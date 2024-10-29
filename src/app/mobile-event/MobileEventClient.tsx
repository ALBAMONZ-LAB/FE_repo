"use client";

import { Button } from "@/components/ui/button";
import { UIConfig, ComponentType } from "@/lib/type";
import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

interface EventPageWithFunctionType {
  type: string;
  bannerImage: string;
  eventMainImage: string;
  buttonList?: Button[];
}

interface Button {
  type: string;
  label: string;
  onClick: string;
}

export default function MobileEventClient() {
  const client = useApolloClient();
  const [uiConfigData, setUiConfigData] = useState<EventPageWithFunctionType | null>(null);

useEffect(()=>{
  client.query({
    query: gql`query GET_EVENT_PAGE_WITH_FUNCTION { eventPageWithFunction(type: "new crew") { type bannerImage eventMainImage buttonList { type label } } }`
  }) 
  .then((result) => {
    setUiConfigData(result.data.eventPageWithFunction);
    console.log(result)
  })
  .catch((error) => console.error(error));
}, []);

  const handleCustomClick = (type: string) => {
    switch (type) {
      case "mainEventButton":
        alert("메인 이벤트 버튼입니다");
        break;
      default:
        break;
    }
  };

    const DynamicButtonComponent = ({ type, props }: ComponentType) => {
      switch (type) {
        case "mainEventButton":
          return <Button onClick={() =>handleCustomClick(type)}>{props.label}</Button>
        default:
          return null;
      }
    };
  
    return (<div>
      {/* event main banner */}
      {
        uiConfigData?.bannerImage && <img src={uiConfigData.bannerImage} alt="banner" />
      }
      {/* event button  */}
      {
        uiConfigData?.buttonList && uiConfigData.buttonList.map((button, index)=>
        <DynamicButtonComponent key={`${index}-${button.type}`} type={button.type} props={button}/>
        )
      }
    </div>);
  }
  