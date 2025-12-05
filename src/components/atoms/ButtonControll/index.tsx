import { ComponentProps, ElementType } from "react";

interface IProps extends ComponentProps<"button"> {
  icon: ElementType;
}

export function ButtonControll({ icon: Icon, ...rest }: IProps) {
  return (
    <button
      className="flex items-center rounded-full bg-black/40 p-1 hover:bg-black/20"
      {...rest}
    >
      <Icon />
    </button>
  );
}
