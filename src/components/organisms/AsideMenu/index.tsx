"use client";

import { useContext } from "react";

import { Globe, X } from "lucide-react";

import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { LinkInstallApp } from "@/components/atoms/LinkInstallApp";
import { InfosAsideMenu } from "@/components/molecules/InfosAsideMenu";
import { NavMain } from "@/components/molecules/NavMain";
import { NavOptionsList } from "@/components/molecules/NavOptionsList";
import { NavSuggest } from "@/components/molecules/NavSuggest";
import { WrapperStatus } from "@/components/molecules/WrapperStatus";
import { MenuContext } from "@/context/MenuContext";

export function AsideMenu() {
  const { showMenu, handleShowMenu } = useContext(MenuContext);

  const styledAside = `absolute z-10 lg:relative lg:transform lg:transition-transform lg:duration-300 lg:translate-x-0 h-full w-72 bg-zinc-950 p-6 transform transition-transform duration-300 ${showMenu ? "translate-x-0" : "-translate-x-full"}`;

  return (
    <aside className={styledAside}>
      <div className="flex w-full items-center justify-between">
        <WrapperStatus />
        <button
          className="rounded-lg border p-1 focus:border-zinc-400 md:block lg:hidden"
          onClick={handleShowMenu}
        >
          <X size={20} />
        </button>
      </div>
      <div className="flex w-full flex-col items-start justify-between gap-8">
        <NavMain />
        <div className=" no-scrollbar flex max-h-56 w-full flex-col items-start justify-between gap-8 overflow-y-auto">
          <NavOptionsList />
          <NavSuggest />
          <LinkInstallApp href="#" />
          <InfosAsideMenu />
        </div>
        <div>
          <ButtonIcon icon={Globe} text="English" variant="primary" />
        </div>
      </div>
    </aside>
  );
}
