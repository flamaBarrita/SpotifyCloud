"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface Song {
  title: string;
  description: string;
  urlImage: string;
  audioSrc?: string; // El enlace a AWS CloudFront
}

interface PlayerContextData {
  currentSong: Song | null;
  isPlaying: boolean; // NUEVO: Estado de reproducción
  playSong: (song: Song) => void;
  togglePlayPause: () => void; // NUEVO: Función para Pausa/Play
  setIsPlaying: (playing: boolean) => void; // NUEVO: Para uso interno
}

export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Estado inicial: Pausa

  function playSong(song: Song) {
    setCurrentSong(song);
    setIsPlaying(true); // Si hay nueva canción, ponemos Play
  }

  function togglePlayPause() {
    setIsPlaying((prev) => !prev);
  }

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        playSong,
        isPlaying,
        togglePlayPause,
        setIsPlaying,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
