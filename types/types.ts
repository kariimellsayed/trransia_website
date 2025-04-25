// types.ts
export type ValidPathnames =
  | "/home"
  | "/about"
  | "/contact"
  | "/translate"
  | "/ads"
  | "/marketing"
  | "/tech"
  | "/student"
  | "/service6"
  | "/service7"
  | "/service8"
  | "/service9";

export interface NavLink {
  key: string;
  href?: ValidPathnames;
  dropdown?: boolean;
  children?: { key: string; href: ValidPathnames }[];
}
