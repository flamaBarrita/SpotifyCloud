import Link, { LinkProps } from "next/link";

interface Iprops extends LinkProps {
  text: string;
}

export function NavItemSuggest({ text, ...rest }: Iprops) {
  return (
    <Link className="text-sm text-zinc-400 hover:text-zinc-100" {...rest}>
      {text}
    </Link>
  );
}
