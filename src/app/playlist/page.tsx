"use client";

import { useContext } from "react";

import { FooterSignUp } from "@/components/molecules/FooterSignUp";
import { AsideMenu } from "@/components/organisms/AsideMenu";
import { FooterPlayer } from "@/components/organisms/FooterPlayer";
import { AuthContext } from "@/context/AuthContext";
import { ContainerPlaylist } from "@/components/templates/ContainerPlaylist";

export default function Playlist() {
  const { isLogged } = useContext(AuthContext);

  return (
    <main className="flex h-screen flex-col">
      <div className="flex flex-1  overflow-hidden">
        <AsideMenu />
        <ContainerPlaylist />
      </div>
      {isLogged ? <FooterPlayer /> : <FooterSignUp />}
    </main>
  );
}
