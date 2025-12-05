import { Header } from "@/components/organisms/Header";
import { HeaderInfoPlayList } from "@/components/organisms/HeaderInfoPlaylist";
import { HeaderActionsPlaylist } from "@/components/organisms/HeaderActionsPlaylist";
import { TablePlaylist } from "@/components/organisms/TablePlaylist";

import { playlistJazz } from "@/database/playlistJazz";

export function ContainerPlaylist() {
  return (
    <section className="flex flex-1 flex-col">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-start px-4 pb-6">
        <HeaderInfoPlayList data={playlistJazz.data} />
        <HeaderActionsPlaylist />
        <TablePlaylist audios={playlistJazz.audios} />
      </div>
    </section>
  );
}
