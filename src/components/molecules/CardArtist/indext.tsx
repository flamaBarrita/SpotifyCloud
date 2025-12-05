import { ButtonPlay } from "@/components/atoms/ButtonPlay";
import { ICardDaily } from "@/dtos";
import Image from "next/image";

interface IProps {
  data: ICardDaily;
}

export function CardArtist({ data }: IProps) {
  return (
    <a
      href="#"
      className="group flex h-64 w-full items-center justify-center rounded bg-zinc-800 p-3 hover:bg-zinc-900/80"
    >
      <li className="flex h-full w-full flex-col items-center justify-between">
        <div className="relative h-2/3 w-full">
          <div>
            <Image
              src={data.urlImage}
              width={320}
              height={320}
              alt="Artist"
              title={data.title}
              className="h-44 w-44 overflow-hidden rounded-full"
            />
          </div>
          <div className="absolute -right-4 bottom-0 z-50">
            <ButtonPlay variant="green" />
          </div>
        </div>
        <div className="flex h-1/3 w-full flex-col items-start justify-end truncate">
          <span className="text-base">{data.title}</span>
          <span className="text-sm text-zinc-500">{data.description}</span>
        </div>
      </li>
    </a>
  );
}
