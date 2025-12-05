import { ComponentProps, ElementType } from "react";

interface IProps extends ComponentProps<"input"> {
  icon: ElementType;
}

export function InputIcon({ icon: Icon, ...rest }: IProps) {
  return (
    <div className="flex w-full items-center gap-2 overflow-hidden rounded-full bg-white px-3 py-2 text-base text-black">
      <Icon />
      <input
        {...rest}
        className="w-full text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
      />
    </div>
  );
}
