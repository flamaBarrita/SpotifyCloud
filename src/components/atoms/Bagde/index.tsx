import { tv, VariantProps } from "tailwind-variants";

const tailVar = tv({
  base: ["py-1 px-2 border rounded"],
  variants: {
    variant: {
      primary: "border-blue-500 text-white bg-blue-500",
      secundary: "border-blue-500 text-blue-500",
    },
  },
});

interface IProps extends VariantProps<typeof tailVar> {
  text: string;
}

export function Bagde({ text, variant }: IProps) {
  return (
    <div className={tailVar({ variant })}>
      <strong>{text}</strong>
    </div>
  );
}
