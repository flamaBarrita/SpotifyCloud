"use client";

import { useContext } from "react";

import { LinkNav } from "@/components/atoms/Link";
import { ActionDropdownProfile } from "@/components/molecules/ActionDropdownProfile";
import { WrapperBtnsControll } from "@/components/molecules/WrapperBtnsControll";
import { MenuContext } from "@/context/MenuContext";
import { Menu } from "lucide-react";

export function HeaderLibrary() {
  const { handleShowMenu } = useContext(MenuContext);

  return (
    <header className="flex w-full items-center justify-between bg-zinc-950 px-6 py-2">
      <button
        className="mr-4 rounded border-zinc-400 p-1 outline-none focus:border md:block lg:hidden"
        onClick={handleShowMenu}
      >
        <Menu size={20} />
      </button>
      <WrapperBtnsControll />
      <div className="flex w-40 items-center gap-5 overflow-auto sm:w-72 md:w-full">
        <div className="flex items-center justify-center gap-4">
          <LinkNav href="#" text="Playlists" variant="primary" />
          <LinkNav href="#" text="Podcasts" variant="primary" />
          <LinkNav href="#" text="Artists" variant="primary" />
          <LinkNav href="#" text="Albums" variant="primary" />
        </div>
      </div>
      <div className="flex items-center justify-end gap-6">
        <ActionDropdownProfile />
      </div>
    </header>
  );
}
