"use client";

import { Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";
import { ButtonPlay } from "@/components/atoms/ButtonPlay";
import { usePlayer } from "@/context/PlayerContext"; // Importamos el contexto

export function PlayControll() {
  // Obtenemos el estado y la función del PlayerContext
  const { isPlaying, togglePlayPause } = usePlayer();

  return (
    <div className="flex items-center gap-4">
      <Shuffle
        size={24}
        className="cursor-pointer text-zinc-400 transition-colors hover:text-white"
      />
      <SkipBack
        size={24}
        className="cursor-pointer text-zinc-400 transition-colors hover:text-white"
      />

      {/* 💥 EL BOTÓN PRINCIPAL 💥 */}
      <ButtonPlay
        variant="white"
        // 1. Le decimos al botón el estado actual
        isPlaying={isPlaying}
        // 2. Le decimos qué hacer al hacer clic
        onClick={togglePlayPause}
      />

      <SkipForward
        size={24}
        className="cursor-pointer text-zinc-400 transition-colors hover:text-white"
      />
      <Repeat
        size={24}
        className="cursor-pointer text-zinc-400 transition-colors hover:text-white"
      />
    </div>
  );
}
