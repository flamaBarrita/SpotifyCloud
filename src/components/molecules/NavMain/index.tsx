import { NavItem } from "@/components/atoms/NavItem";

import { Home, Search, Library } from "lucide-react";

export function NavMain() {
  return (
    <nav className="mt-10 w-full space-y-5">
      <NavItem text="Home" icon={Home} href="/" />
      <NavItem text="Search" icon={Search} href="/search" />
      <NavItem text="Your Library" icon={Library} href="/library" />
    </nav>
  );
}
