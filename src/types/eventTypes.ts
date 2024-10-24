import { Action } from "@/lib/actionHandler";

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

export interface UserProps {
  label: string;
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
