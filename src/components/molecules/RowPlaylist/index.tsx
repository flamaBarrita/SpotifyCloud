import { TableCell, TableRow } from "@/components/ui/table";
import { IRowMusicPlaylist } from "@/dtos";
import { Play } from "lucide-react";
import Link from "next/link";

interface IProps {
  data: IRowMusicPlaylist;
}

export function RowPlaylist({ data }: IProps) {
  return (
    <TableRow className="group border-0 bg-zinc-800 hover:bg-zinc-700">
      <TableCell className="rounded-s-md font-medium">
        <span className="flex group-hover:hidden">1</span>
        <Play size={10} fill="#fff" className="hidden group-hover:block" />
      </TableCell>
      <TableCell className="flex items-center justify-start gap-2">
        <img
          src="/PlaylistJazz.png"
          alt="music"
          className="h-10 w-10 rounded"
        />
        <div className="flex flex-col items-start justify-center">
          <span>{data.title}</span>
          <Link href="#">{data.author}</Link>
        </div>
      </TableCell>
      <TableCell>
        <Link href={data.linkAlbum}>{data.album}</Link>
      </TableCell>
      <TableCell className="rounded-e-md">{data.time}</TableCell>
    </TableRow>
  );
}
