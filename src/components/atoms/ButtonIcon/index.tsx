import { ComponentProps, ElementType } from "react";

import { tv, VariantProps } from "tailwind-variants";

const tailVar = tv({
  base: [
    "w-full flex items-center justify-center gap-4 border rounded-full py-2 px-6 text-xs",
  ],
  variants: {
    variant: {
      primary: "border-zinc-500 bg-zinc-950  text-white hover:bg-zinc-800",
      secondary: "bg-white  text-black",
      facebook: "bg-blue-500 text-white hover:bg-blue-400",
      white: "bg-white border border-zinc-400 text-zinc-500 hover:bg-zinc-50",
      outline: "bg-transparent border-zinc-700 text-white hover:border-white",
    },
  },
});

interface IProps
  extends ComponentProps<"button">,
    VariantProps<typeof tailVar> {
  text: string;
  icon: ElementType;
}

export function ButtonIcon({ icon: Icon, text, variant, ...rest }: IProps) {
  return (
    <button className={tailVar({ variant })} {...rest}>
      <Icon />
      <strong>{text}</strong>
    </button>
  );
}
