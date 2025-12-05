"use client";

import { useContext } from "react";

import { NavItemSuggest } from "@/components/atoms/NavItemSuggest";
import { AuthContext } from "@/context/AuthContext";

const styledLogged =
  "w-full pt-6 mt-6 border-t border-zinc-800 flex flex-col items-start gap-3";
const styledNotLogged = "hidden";

export function NavSuggest() {
  const { isLogged } = useContext(AuthContext);
  const styled = isLogged ? styledLogged : styledNotLogged;

  return (
    <nav className={styled}>
      <NavItemSuggest href="#" text="Stranger Things" />
      <NavItemSuggest href="#" text="This is LiSA" />
      <NavItemSuggest href="#" text="Attack on Titan" />
      <NavItemSuggest href="#" text="This is Coldplay" />
      <NavItemSuggest href="#" text="Ghost Stories" />
    </nav>
  );
}
