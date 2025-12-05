"use client";

import { useContext, useEffect, useRef } from "react";
import { TimeAudio } from "@/components/atoms/TimeAudio";
import { AudioInfoPlay } from "@/components/molecules/AudioInfoPlay";
import { MoreAudioControll } from "@/components/molecules/MoreAudioControll";
import { PlayControll } from "@/components/molecules/PlayControll";
import { PlayerContext } from "@/context/PlayerContext"; // Importamos el cerebro

export function FooterPlayer() {
  const { currentSong, isPlaying, setIsPlaying } = useContext(PlayerContext);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Efecto: Controla la reproducción al cambiar el estado (isPlaying o la canción)
  useEffect(() => {
    if (audioRef.current && currentSong) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((e) => console.log("Autoplay bloqueado:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  // Si no hay canción seleccionada, ocultamos el reproductor
  if (!currentSong) {
    return (
      <footer className="border-t border-zinc-700 bg-zinc-800 p-4 text-center text-white">
        <p>Selecciona una canción para comenzar el streaming desde AWS + OCI</p>
      </footer>
    );
  }

  return (
    <footer className="flex w-full items-center justify-between border-t border-zinc-700 bg-zinc-800 p-2 md:p-4 lg:p-6">
      {/* 1. EL REPRODUCTOR INVISIBLE */}
      <audio
        ref={audioRef}
        src={currentSong.audioSrc}
        controls={false}
        // Cuando termina la canción, ponemos isPlaying en falso
        onEnded={() => setIsPlaying(false)}
      />

      {/* 2. LA INFORMACIÓN VISUAL */}
      <AudioInfoPlay
        urlImage={currentSong.urlImage}
        alt={currentSong.title}
        title={currentSong.title}
        info={{ album: "Cloud Híbrida", title: currentSong.description }}
      />

      <div className="flex w-full flex-col items-center gap-2">
        {/* Aquí es donde conectaremos el botón: */}
        <PlayControll />
        <TimeAudio />
      </div>
      <MoreAudioControll />
    </footer>
  );
}
