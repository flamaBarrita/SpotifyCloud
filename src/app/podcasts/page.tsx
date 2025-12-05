import { FooterSignUp } from "@/components/molecules/FooterSignUp";
import { Header } from "@/components/organisms/Header";
import { AsideMenu } from "@/components/organisms/AsideMenu";
import { ListDaily } from "@/components/organisms/ListDaily";
import { podcastsBests, podcastsBestsByAuthor } from "@/database/podcasts";
import { ContainerLists } from "@/components/templates/ContainerLists";

export default function Podcasts() {
  return (
    <main className="flex h-screen flex-col">
      <div className="flex flex-1">
        <AsideMenu />
        <div className="flex flex-1 flex-col">
          <Header />
          <ContainerLists title="" variant="outline">
            <ListDaily
              title={`Best Episodes - Editor's Picks`}
              data={podcastsBests}
            />
            <ListDaily
              title="Best of: Brown Bag"
              data={podcastsBestsByAuthor}
            />
            <ListDaily
              title="Best of: Brown Bag"
              data={podcastsBestsByAuthor}
            />
          </ContainerLists>
        </div>
      </div>
      <FooterSignUp />
    </main>
  );
}
