import { UIConfig } from "@/lib/type";
import MobileEventClient from "./MobileEventClient";

export default async function MobileEventPage(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/event`, {cache: 'no-store'});
  const uiConfig: UIConfig | null = await res.json();

  return <MobileEventClient uiConfig={uiConfig}/>
}