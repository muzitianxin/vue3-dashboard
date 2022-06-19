import { MenuItem } from "../../../types/menu/menu-item.interface";

export const appMenuItems: MenuItem[] = [
  { id: "index", label: "Home", icon: "fas fa-home", to: "home" },
  { id: "chat", label: "Chat", icon: "fas fa-comments", to: "chat" },
  {
    id: "calendar",
    label: "Calendar",
    icon: "fas fa-calendar",
    to: "calendar",
  },
  { id: "setting", label: "Setting", icon: "fas fa-cog", to: "setting" },
];
