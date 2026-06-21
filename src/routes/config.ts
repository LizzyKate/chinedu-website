export type NavLinkId =
  | "inventory"
  | "marine-tech"
  | "og-equipment"
  | "service-status"
  | "logistics";

export interface AppRoute {
  id: NavLinkId;
  label: string;
  href: string;
}

export const routes: AppRoute[] = [
  { id: "inventory",      label: "Inventory",      href: "/" },
  { id: "marine-tech",    label: "Marine Tech",    href: "/directory" },
  { id: "og-equipment",   label: "O&G Equipment",  href: "#" },
  { id: "service-status", label: "Service Status", href: "#" },
  { id: "logistics",      label: "Logistics",      href: "#" },
];
