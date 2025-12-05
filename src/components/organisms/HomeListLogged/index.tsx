import { CardAudio } from "@/components/molecules/CardAudio";
import { CardLastMusic } from "@/components/molecules/CardLastMusic";
import { ListAudios } from "@/components/organisms/ListAudios";
import { lastsListen } from "@/database/LastListen";
import { madeForMe } from "@/database/madeForMe";

export function HomeListLogged() {
  return (
    <section className="no-scrollbar flex max-h-screen flex-col overflow-y-auto p-6">
      <h1 className="mt-4 text-4xl font-semibold">Good Night</h1>
      <ul className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {lastsListen.map((item) => (
          <CardLastMusic key={item.id} data={item} href="#" />
        ))}
      </ul>
      <ListAudios TitleList="Made for you">
        {madeForMe.map((item) => (
          <CardAudio key={item.id} data={item} variant="secundary" />
        ))}
      </ListAudios>
    </section>
  );
}
