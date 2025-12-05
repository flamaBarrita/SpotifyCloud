import Image from "next/image";

interface IProps {
  urlImage: string;
  alt: string;
  title: string;
  info: {
    album: string;
    title: string;
  };
}

export function AudioInfoPlay({ urlImage, title, alt, info }: IProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <Image src={urlImage} alt={alt} title={title} width={56} height={56} />
      <div className="flex flex-col">
        <strong className="font-normal">{info.title}</strong>
        <span className="text-xs text-zinc-400">{info.album}</span>
      </div>
    </div>
  );
}
