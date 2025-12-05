import Image from "next/image";
import Link from "next/link";

import { VariantProps, tv } from "tailwind-variants";

const talVars = tv({
  base: "w-[480px] items-center gap-6",
  variants: {
    variant: {
      primary: "flex",
      secundary: "hidden",
    },
  },
});

interface IProps extends VariantProps<typeof talVars> {}

export function HeaderAd({ variant }: IProps) {
  return (
    <header className="flex w-full items-center justify-between bg-zinc-950 px-6 py-2">
      <Link href="/">
        <Image
          src="/IconTransparent.svg"
          width={132}
          height={40}
          alt="icon-spotify"
        />
      </Link>
      <nav className={talVars({ variant })}>
        <div className="flex items-center gap-8">
          <Link href="/premium" className="text-white hover:text-white/80">
            Premium
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            Support
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            Download
          </Link>
        </div>
        <div className="flex items-center gap-8 border-l border-white pl-8">
          <Link href="#" className="text-white hover:text-white/80">
            Sign up
          </Link>
          <Link href="/login" className="text-white hover:text-white/80">
            Log in
          </Link>
        </div>
      </nav>
    </header>
  );
}
