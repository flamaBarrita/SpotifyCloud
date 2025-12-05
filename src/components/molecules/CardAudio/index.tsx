'use client'

import Image from 'next/image'
// import Link from 'next/link' // Ya no necesitamos Link porque no vamos a cambiar de página
import { tv, VariantProps } from 'tailwind-variants'
import { ICardDaily } from '@/dtos'

// Importamos el cerebro para poder darle "Play"
import { usePlayer } from '@/context/PlayerContext'

const tailVar = tv({
  base: [
    'flex h-68 w-52 flex-col items-center justify-between p-3 rounded overflow-hidden sm:h-64 md:w-full cursor-pointer text-left transition-transform active:scale-95',
  ],
  variants: {
    variant: {
      primary: 'bg-white/5 hover:bg-white/10',
      secundary: 'bg-zinc-800 hover:bg-zinc-900/80',
    },
  },
})

interface IProps extends VariantProps<typeof tailVar> {
  data: ICardDaily
}

export function CardAudio({ data, variant }: IProps) {
  // 1. Obtenemos la función para reproducir
  const { playSong } = usePlayer()

  return (
    // 2. Usamos un botón (o div) en lugar de Link
    <button 
      className={tailVar({ variant })} 
      // 3. Al hacer clic, enviamos los datos (incluyendo el audioSrc de AWS) al reproductor
      // Usamos "as any" por si TypeScript se queja de que falta el campo audioSrc en la interfaz original
      onClick={() => playSong(data as any)}
    >
      <Image
        src={data.urlImage}
        alt={data.title}
        title={data.title}
        className="h-3/4 w-56 rounded object-cover sm:h-3/4 lg:h-2/3 shadow-lg"
        width={380}
        height={380}
      />
      <div className="flex w-full flex-col items-start justify-center mt-2">
        <strong className="truncate text-xl font-semibold sm:text-base w-full">
          {data.title}
        </strong>
        <span className="text-md truncate w-full text-zinc-500 sm:text-sm">
          {data.description}
        </span>
      </div>
    </button>
  )
}