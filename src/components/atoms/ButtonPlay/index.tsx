import { ButtonHTMLAttributes } from "react";

// Importamos el ícono de Pause además de Play
import { Play, Pause } from "lucide-react";

import { tv, VariantProps } from "tailwind-variants";

const tailVar = tv({
  base: ["w-12 h-12 flex items-center justify-center rounded-full text-black"],
  variants: {
    variant: {
      green:
        "hidden bg-green-400 invisible group-hover:visible lg:flex lg:ml-auto lg:mr-6",
      greenVisible: "bg-green-400",
      white: "bg-white hover:bg-white/90",
    },
  },
});

// 💥 CORRECCIÓN DE TYPESCRIPT 💥
interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tailVar> {
  // AÑADIMOS ESTAS PROPIEDADES PARA QUE TS DEJE DE QUEJARSE
  isPlaying?: boolean;
}

// Desestructuramos isPlaying del resto de las propiedades
export function ButtonPlay({ variant, isPlaying, ...rest }: IProps) {
  return (
    <button className={tailVar({ variant })} {...rest}>
      {/* 💥 IMPLEMENTACIÓN DE PLAY / PAUSE 💥 */}
      {isPlaying ? (
        // SI isPlaying ES TRUE, muestra Pause
        <Pause fill="black" size={24} />
      ) : (
        // SI isPlaying ES FALSE, muestra Play
        <Play fill="black" size={24} className="ml-[2px]" />
      )}
    </button>
  );
}
