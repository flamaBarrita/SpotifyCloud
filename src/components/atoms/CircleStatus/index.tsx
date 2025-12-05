import { tv, VariantProps } from "tailwind-variants";

const tailVar = tv({
  base: ["w-3 h-3 rounded-full"],
  variants: {
    variant: {
      green: "bg-green-500",
      yellow: "bg-yellow-500",
      red: "bg-red-500",
    },
  },
});

interface IProps extends VariantProps<typeof tailVar> {}

export function CircleStatus({ variant }: IProps) {
  return <div className={tailVar({ variant })} />;
}
