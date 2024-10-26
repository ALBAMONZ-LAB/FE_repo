"use client";

import { Button } from "@/components/ui/button";
import { UIConfig, ComponentType } from "@/lib/type";
import { gql, useApolloClient } from "@apollo/client";
import { useEffect } from "react";

export default function MobileEventClient({uiConfig}: {uiConfig: UIConfig | null}) {
  const client = useApolloClient();

useEffect(()=>{
  client.query({
    query: gql`query GET_EVENT_PAGE_WITH_FUNCTION { eventPageWithFunction(id: "1") { id title description } }`
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
  