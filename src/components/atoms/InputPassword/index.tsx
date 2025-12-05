"use client";

import { Eye, EyeOff } from "lucide-react";
import { ComponentProps, ReactNode, useState } from "react";

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
  base: "flex w-full items-center justify-center gap-1 rounded border p-3 outline-none",
  variants: {
    variant: {
      primary: "border-zinc-500 bg-white text-zinc-500",
      secundary: "border-zinc-500 bg-zinc-950 text-white",
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

function Container({ label, variant, children }: ILabelProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <strong className={talLabel({ variant })}>{label}</strong>
      {children}
    </div>
  );
}

function Input({ variant, ...rest }: IProps) {
  const [show, setShow] = useState<boolean>(false);

  function handleChangeTypeInput() {
    setShow((prev) => !prev);
  }

  return (
    <div className={talInput({ variant })}>
      <input
        className="w-full bg-transparent outline-none placeholder:text-zinc-500"
        type={show ? "text" : "password"}
        {...rest}
      />
      <button type="button" onClick={handleChangeTypeInput}>
        {show ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
}

export const InputPassword = {
  Container,
  Input,
};
