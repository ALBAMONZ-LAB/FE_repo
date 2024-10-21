export type ComponentType = {
    type: string;
    props: Record<string, any>;
  };
  
export  type UIConfig = {
    backgroundImage: string;
    components: ComponentType[];
  };