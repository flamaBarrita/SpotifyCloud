"use client";

import { useContext, ForwardRefExoticComponent, RefAttributes } from "react";

import Link, { LinkProps } from "next/link";

import { AuthContext } from "@/context/AuthContext";

import { LucideProps } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

const tailVar = tv({
  base: ["flex items-center justify-center h-6 w-6 rounded-sm"],
  variants: {
    variant: {
      plus: "bg-white/85 group-hover:bg-white text-black",
      heart: "bg-indigo-400/85 bg-indigo-400 text-white",
      save: "bg-green-700/85 group-hover:bg-green-700 text-white",
    },
  },
});

interface Iprops extends LinkProps, VariantProps<typeof tailVar> {
  text: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const styledLogged = "w-full flex items-center justify-start gap-4 group";
const styledNotLogged = "hidden";

export function NavOption({ icon: Icon, text, variant, ...rest }: Iprops) {
  const { isLogged } = useContext(AuthContext);

  const styled =
    !isLogged && variant === "save" ? styledNotLogged : styledLogged;

  return (
    <Link className={styled} {...rest}>
      <div className={tailVar({ variant })}>
        <Icon size={16} />
      </div>
      <strong className="text-zinc-400 group-hover:text-zinc-100">
        {text}
      </strong>
    </Link>
  );
}
