import { RowPlaylist } from "@/components/molecules/RowPlaylist";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IPlaylist } from "@/dtos";
import { Clock } from "lucide-react";

interface IProps extends Omit<IPlaylist, "data"> {}

export function TablePlaylist({ audios }: IProps) {
  return (
    <ScrollArea className="max-h-[360px] w-full sm:max-h-[420px] md:max-h-[520px] lg:max-h-[620px] xl:max-h-[200px]">
      <Table className="h-full">
        <TableHeader>
          <TableRow className="border-b-zinc-400 bg-zinc-800 hover:bg-transparent">
            <TableHead>#</TableHead>
            <TableHead className="w-1/2">Title</TableHead>
            <TableHead className="w-1/2">Album</TableHead>
            <TableHead className="text-right">
              <Clock />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {audios.map((item) => (
            <RowPlaylist key={item.id} data={item} />
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
