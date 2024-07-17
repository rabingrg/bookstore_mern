import { ABOUT, CONTACT, COURSE, HOME } from "../../config/path";

export interface NavMenuType {
  id: number;
  label: string;
  route: string;
}
export const NavMenuItems: NavMenuType[] = [
  {
    id: 1,
    label: "Home",
    route: HOME,
  },
  {
    id: 2,
    label: "Course",
    route: COURSE,
  },
  {
    id: 3,
    label: "About",
    route: ABOUT,
  },
  {
    id: 4,
    label: "Contact",
    route: CONTACT,
  },
];
