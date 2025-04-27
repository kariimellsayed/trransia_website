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
  | "/electronic"
  | "/service7"
  | "/service8"
  | "/service9";

export interface NavLink {
  key: string;
  href?: ValidPathnames;
  dropdown?: boolean;
  children?: { key: string; href: ValidPathnames }[];
}

export interface ServicesCards {
  key: string;
  img: string;
  href?: ValidPathnames;
}
