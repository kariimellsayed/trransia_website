// types.ts
export type ValidPathnames =
  | "/home"
  | "/about"
  | "/contact"
  | "/translate"
  | "/service2"
  | "/marketing"
  | "/tech"
  | "/student"
  | "/service6"
  | "/service7"
  | "/service8"
  | "/service9";

export interface NavLink {
  key?: string;
  href?: ValidPathnames;
  img?: string;
  dropdown?: boolean;
  children?: { key: string; href: ValidPathnames }[];
}
