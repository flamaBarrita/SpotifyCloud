import {
  CirclePlus,
  Copy,
  Ellipsis,
  Plus,
  Radio,
  Search,
  SquareCode,
} from "lucide-react";

import { ButtonAction } from "@/components/atoms/ButtonAction";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function DropdownMorePlaylist() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ButtonAction type="button" icon={Ellipsis} label="More Options" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-0 bg-zinc-700 text-zinc-300 shadow-lg">
        <DropdownMenuGroup>
          <DropdownMenuItem className="focus:bg-zinc-600 focus:text-zinc-300">
            <CirclePlus className="mr-2 h-4 w-4" />
            <span>Add to Your Library</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-zinc-600 focus:text-zinc-300">
            <Radio className="mr-2 h-4 w-4" />
            <span>Go to artist radio</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="focus:bg-zinc-600 focus:text-zinc-300 data-[state=open]:bg-zinc-600">
              <Plus className="mr-2 h-4 w-4" />
              <span>Add to playlist</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="border-0 bg-zinc-700 text-zinc-400 shadow-lg">
                <DropdownMenuItem className="focus:bg-zinc-600 focus:text-zinc-300">
                  <Search className="mr-2 h-4 w-4" />
                  <span>Find a playlist</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-zinc-600 focus:text-zinc-300">
                  <Plus className="mr-2 h-4 w-4" />
                  <span>Create playlist</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="focus:bg-zinc-600 focus:text-zinc-300 data-[state=open]:bg-zinc-600">
            <Plus className="mr-2 h-4 w-4" />
            <span>Share</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="border-0 bg-zinc-700 text-zinc-400 shadow-lg">
              <DropdownMenuItem className="focus:bg-zinc-600 focus:text-zinc-300">
                <Copy className="mr-2 h-4 w-4" />
                <span>Copy Album Link</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-zinc-600 focus:text-zinc-300">
                <SquareCode className="mr-2 h-4 w-4" />
                <span>Embed album</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem className="flex items-center justify-start gap-2 focus:bg-zinc-600 focus:text-zinc-300">
          <Image
            src="/SpotifyIcon.svg"
            width={16}
            height={16}
            alt="icon Spotify"
          />
          <span>Open in Dekstop app</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
