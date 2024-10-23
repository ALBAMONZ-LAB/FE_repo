"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { handleAction } from "@/lib/actionHandler";
import {
  UIConfig,
  ComponentType,
  HeaderProps,
  TextProps,
  EventButtonProps,
  LinkButtonProps,
  UserProps,
} from "@/types/eventTypes";
import { GET_USER } from "@/graphql/queries";
import { gql, useApolloClient, useQuery } from "@apollo/client";

// 이벤트 페이지
export default function EventPage() {
  const [uiConfig, setUiConfig] = useState<UIConfig | null>(null);
  const client = useApolloClient();
  const { data, loading } = useQuery(GET_USER, {
    variables: { id: "1" },
  });

  useEffect(() => {
    fetch("/api/event")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUiConfig(data);
      })
      .catch((error) =>
        console.error("이벤트 UI 설정을 가져오는 중 오류 발생:", error)
      );

    client
      .query({
        query: gql`
          query GetUser {
            user(id: "1") {
              id
              name
              email
            }
          }
        `,
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);

  const DynamicComponent = ({ type, props }: ComponentType) => {
    switch (type) {
      case "Header":
        return (
          <h1 className="text-3xl font-bold text-white mb-6">
            {(props as HeaderProps).title}
          </h1>
        );
      case "Text":
        return <p className="mb-4">{(props as TextProps).content}</p>;
      case "EventButton":
        return (
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-center text-black font-bold py-3 px-6 rounded-full text-xl shadow-lg transform transition duration-300 hover:scale-105"
            onClick={() => handleAction((props as EventButtonProps).action)}
          >
            {(props as EventButtonProps).label}
          </button>
        );
      case "LinkButton":
        return (
          <Link href={(props as LinkButtonProps).href || "#"}>
            <Button variant="outline">
              {(props as LinkButtonProps).label}
            </Button>
          </Link>
        );
      case "User":
        return (
          <div>
            {(props as UserProps).label} {data?.user.name}
          </div>
        );
      default:
        return null;
    }
  };

  if (!uiConfig || loading) {
    return <div className="text-white">로딩 중...</div>;
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{
        backgroundImage: `url(${uiConfig.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center bg-black bg-opacity-50 p-10 rounded-lg">
        {uiConfig.components?.map((component, index) => (
          <DynamicComponent key={index} {...component} />
        ))}
      </div>
    </div>
  );
}
