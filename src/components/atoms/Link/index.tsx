import Link, { LinkProps } from "next/link";

import { tv, VariantProps } from "tailwind-variants";

const tailVar = tv({
  base: ["text-sm font-bold"],
  variants: {
    variant: {
      primary: "rounded p-3 hover:bg-zinc-600",
    },
  },
});

interface IProps extends LinkProps, VariantProps<typeof tailVar> {
  text: string;
}

export function LinkNav({ text, variant, ...rest }: IProps) {
  return (
    <Link className={tailVar({ variant })} {...rest}>
      {text}
    </Link>
  );
}
