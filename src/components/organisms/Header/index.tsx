"use client";

import { useContext, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import { Menu, Search } from "lucide-react";

import { AuthContext } from "@/context/AuthContext";

import { InputIcon } from "@/components/atoms/InputIcon";
import { ButtonSign } from "@/components/atoms/ButtonSign";
import { WrapperBtnsControll } from "@/components/molecules/WrapperBtnsControll";
import { ActionDropdownProfile } from "@/components/molecules/ActionDropdownProfile";
import { MenuContext } from "@/context/MenuContext";

export function Header() {
  const pathName = usePathname();
  const navigation = useRouter();
  const { isLogged } = useContext(AuthContext);
  const { handleShowMenu } = useContext(MenuContext);

  const [isInputSearchFocused, setIsInputSearchFocused] =
    useState<boolean>(false);

  function handleNavigateLogin() {
    navigation.push("/login");
  }

  function handleNavigateSignUp() {
    navigation.push("/signup");
  }

  function handleFocusInputSearch() {
    setIsInputSearchFocused((prev) => !prev);
  }

  return (
    <header className="flex w-full items-center justify-between bg-zinc-950 px-6 py-2">
      <div className="flex items-center gap-4 sm:w-full lg:w-2/4">
        <button
          className="mr-4 rounded border-zinc-400 p-1 outline-none focus:border md:block lg:hidden"
          onClick={handleShowMenu}
        >
          <Menu size={20} />
        </button>
        <WrapperBtnsControll isInputSearchFocused={isInputSearchFocused} />
        {pathName === "/search" && (
          <InputIcon
            icon={Search}
            type="text"
            placeholder="What do you want to listen to?"
            className="Input-Search"
            onBlur={handleFocusInputSearch}
            onFocus={handleFocusInputSearch}
          />
        )}
      </div>
      {isLogged ? (
        <ActionDropdownProfile />
      ) : (
        <div className="flex items-center gap-2  sm:gap-4 md:gap-4 lg:w-1/3 lg:gap-6">
          <div className="hidden lg:flex lg:w-80">
            <ButtonSign
              text="Sign up"
              variant="secundary"
              onClick={handleNavigateSignUp}
            />
          </div>
          <ButtonSign
            text="Log in"
            variant="primary"
            onClick={handleNavigateLogin}
          />
        </div>
      )}
    </header>
  );
}
