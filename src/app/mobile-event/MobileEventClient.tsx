"use client";

import { Button } from "@/components/ui/button";
import { UIConfig, ComponentType } from "@/lib/type";

export default function MobileEventClient({uiConfig}: {uiConfig: UIConfig | null}) {

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
  