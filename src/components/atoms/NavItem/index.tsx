import Link, { LinkProps } from "next/link";
import { ElementType } from "react";

interface Iprops extends LinkProps {
  icon: ElementType;
  text: string;
}

export function NavItem({ icon: Icon, text, ...rest }: Iprops) {
  return (
    <Link
      className="flex items-center gap-2 text-xs font-semibold text-zinc-200 hover:text-zinc-200/80"
      {...rest}
    >
      <Icon />
      {text}
    </Link>
  );
}
