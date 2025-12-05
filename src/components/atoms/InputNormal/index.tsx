import { ComponentProps, ReactNode } from "react";

import { VariantProps, tv } from "tailwind-variants";

const talLabel = tv({
  base: "text-sm",
  variants: {
    variant: {
      primary: "text-black",
      secundary: "text-white",
    },
  },
});

const talInput = tv({
  base: "w-full rounded border  p-3 text-black outline-none placeholder:text-zinc-500",
  variants: {
    variant: {
      primary: "border-zinc-500 bg-white",
      secundary: "border-zinc-400 bg-zinc-950 text-white",
    },
  },
});

interface ILabelProps extends VariantProps<typeof talLabel> {
  label: string;
  children: ReactNode;
}

interface IProps
  extends ComponentProps<"input">,
    VariantProps<typeof talInput> {}

function Input({ variant, ...rest }: IProps) {
  return <input className={talInput({ variant })} {...rest} />;
}

function ContainerLabelInput({ label, children, variant }: ILabelProps) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-2">
      <strong className={talLabel({ variant })}>{label}</strong>
      {children}
    </div>
  );
}

export const InputNormal = {
  ContainerLabelInput,
  Input,
};
