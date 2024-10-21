"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ComponentType, UIConfig } from "@/lib/type";



export default function EventPage() {
  const [uiConfig, setUiConfig] = useState<UIConfig | null>(null);

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
  }, []);

  const DynamicComponent = ({ type, props }: ComponentType) => {
    switch (type) {
      case "Header":
        return (
          <h1 className="text-3xl font-bold text-white mb-6">{props.title}</h1>
        );
      case "Text":
        return <p className="mb-4">{props.content}</p>;
      case "EventButton":
        return (
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-center text-black font-bold py-3 px-6 rounded-full text-xl shadow-lg transform transition duration-300 hover:scale-105"
            onClick={() => eval(props.onClick)}
          >
            {props.label}
          </button>
        );
      case "LinkButton":
        return (
          <Link href={`/photo`}>
            <Button variant="outline">{props.label}</Button>
          </Link>
        );
      default:
        return null;
    }
  };

  if (!uiConfig) {
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
