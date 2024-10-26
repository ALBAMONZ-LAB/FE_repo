"use client";

import { Button } from "@/components/ui/button";
import { UIConfig, ComponentType } from "@/lib/type";
import { gql, useApolloClient, useQuery } from "@apollo/client";
import { GET_USER } from "@/graphql/queries";
import { useEffect } from "react";

export default function MobileEventClient({uiConfig}: {uiConfig: UIConfig | null}) {
  const client = useApolloClient();
  
useEffect(()=>{
  client.query({
    query: gql`query GetUser { user(id: "1") { id name email } }`
  }) 
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}, []);

  const handleCustomClick = (type: string) => {
    switch (type) {
      case "EventButtonWithFunction":
        alert("함수클릭됨");
        break;
      default:
        break;
    }
  };

    const DynamicButtonComponent = ({ type, props }: ComponentType) => {
          return <Button onClick={() =>handleCustomClick(props.type)}>{props.label}</Button>
    };
  
    return (<div>
      {
        uiConfig?.components.map((component, index)=>
        <DynamicButtonComponent key={`${index}-${component.type}`} type={component.type} props={component.props}/>
        )
      }
    </div>);
  }
  