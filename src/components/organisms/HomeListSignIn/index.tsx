import { popularArtists } from "@/database/popularArtists";
import { ListAudios } from "../ListAudios";
import { CardArtist } from "@/components/molecules/CardArtist/indext";
import { playlistsSpotify } from "@/database/playlistSpotify";
import { CardAudio } from "@/components/molecules/CardAudio";

export function HomeListSignIn() {
  return (
    <section className="no-scrollbar flex max-h-full flex-1 flex-col overflow-y-auto p-6">
      <ListAudios TitleList="Popular Artists">
        {popularArtists.map((item) => (
          <CardArtist key={item.id} data={item} />
        ))}
      </ListAudios>
      <ListAudios TitleList="Spotify Playlists">
        {playlistsSpotify.map((item) => (
          <CardAudio key={item.id} data={item} variant="secundary" />
        ))}
      </ListAudios>
      <ListAudios TitleList="Spotify Playlists">
        {playlistsSpotify.map((item) => (
          <CardAudio key={item.id} data={item} variant="secundary" />
        ))}
      </ListAudios>
    </section>
  );
}
