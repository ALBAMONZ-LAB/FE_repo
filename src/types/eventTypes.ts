import { Action } from "@/lib/handleAction";

export interface HeaderProps {
  title: string;
}

export interface TextProps {
  content: string;
}

export interface EventButtonProps {
  label: string;
  action: Action;
}

export interface LinkButtonProps {
  label: string;
  href: string;
}

export type ComponentProps =
  | HeaderProps
  | TextProps
  | EventButtonProps
  | LinkButtonProps;

export type ComponentType = {
  type: string;
  props: ComponentProps;
};

export type UIConfig = {
  backgroundImage: string;
  components: ComponentType[];
};
