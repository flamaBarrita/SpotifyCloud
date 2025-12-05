import { ComponentProps } from "react";

import { tv, VariantProps } from "tailwind-variants";

const tailVar = tv({
  base: ["w-full py-2 px-1 rounded-full sm:py-3 px-8"],
  variants: {
    variant: {
      primary: "bg-white text-zinc-950 hover:bg-zinc-100",
      secundary: "bg-transparent text-zinc-400 hover:text-zinc-200",
      secundaryRounded:
        "bg-transparent text-zinc-400 border border-zinc-400 hover:bg-zinc-50",
      whiteTransparent:
        "bg-transparent border border-white text-white hover:text-zinc-200 border-zinc-200",
      darkBgWhite: "bg-white border border-black text-black hover:bg-zinc-100",
      dark: "bg-black text-white hover:bg-zinc-950",
      green: "bg-green-500 text-white hover:bg-green-400",
    },
  },
});

interface IProps
  extends ComponentProps<"button">,
    VariantProps<typeof tailVar> {
  text: string;
}

export function ButtonSign({ text, variant, ...rest }: IProps) {
  return (
    <button className={tailVar({ variant })} {...rest}>
      <strong>{text}</strong>
    </button>
  );
}
