'use client'

import { Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react'
import { ButtonPlay } from '@/components/atoms/ButtonPlay'
import { usePlayer } from '@/context/PlayerContext' // Importamos el contexto

export function PlayControll() {
  // Obtenemos el estado y la función del PlayerContext
  const { isPlaying, togglePlayPause } = usePlayer()

  return (
    <div className="flex items-center gap-4">
      <Shuffle size={24} className="text-zinc-400 hover:text-white transition-colors cursor-pointer" />
      <SkipBack size={24} className="text-zinc-400 hover:text-white transition-colors cursor-pointer" />
      
      {/* 💥 EL BOTÓN PRINCIPAL 💥 */}
      <ButtonPlay 
          variant="white" 
          // 1. Le decimos al botón el estado actual
          isPlaying={isPlaying} 
          // 2. Le decimos qué hacer al hacer clic
          onClick={togglePlayPause} 
      />
      
      <SkipForward size={24} className="text-zinc-400 hover:text-white transition-colors cursor-pointer" />
      <Repeat size={24} className="text-zinc-400 hover:text-white transition-colors cursor-pointer" />
    </div>
  )
}