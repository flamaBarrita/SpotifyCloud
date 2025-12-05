import Link, { LinkProps } from "next/link";
import { ElementType } from "react";

interface IProps extends LinkProps {
  icon: ElementType;
}

export function BagdeSocialMedia({ icon: Icon, ...rest }: IProps) {
  return (
    <Link
      className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800"
      {...rest}
    >
      <Icon />
    </Link>
  );
}
