"use client";

import { Button } from "@/components/ui/button";
import { UIConfig, ComponentType } from "@/lib/type";

export default function MobileEventClient({uiConfig}: {uiConfig: UIConfig | null}) {

    const DynamicComponent = ({ type, props }: ComponentType) => {
      switch (type) {
        case "EventButtonWithFunction":
          return <Button onClick={() => eval(props.onClick)}>{props.label}</Button>;
        default:
          return null;
      }
    };
  
    return <div>
      {
        uiConfig?.components.map((component, index)=>
        <DynamicComponent key={`${index}-${component.type}`} type={component.type} props={component.props}/>
        )
      }
    </div>;
  }
  