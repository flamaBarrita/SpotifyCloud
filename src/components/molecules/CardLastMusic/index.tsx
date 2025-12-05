import { ButtonPlay } from "@/components/atoms/ButtonPlay";
import { ICardDaily } from "@/dtos";
import Image from "next/image";
import { ComponentProps } from "react";

interface IProps extends ComponentProps<"a"> {
  data: ICardDaily;
}

export function CardLastMusic({ data, ...rest }: IProps) {
  return (
    <a
      className="group flex flex-col items-center justify-center gap-4 overflow-hidden rounded bg-white/10 transition-colors hover:bg-white/20 lg:flex-row"
      {...rest}
    >
      <Image
        src={data.urlImage}
        alt={data.title}
        title={data.title}
        width={104}
        height={104}
      />
      <strong>{data.title}</strong>
      <ButtonPlay variant="green" />
    </a>
  );
}
