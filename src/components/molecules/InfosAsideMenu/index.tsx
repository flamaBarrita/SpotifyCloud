import Image from "next/image";
import Link from "next/link";

export function InfosAsideMenu() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Link href="#" className="text-xs text-zinc-400 hover:text-zinc-100">
          Legal
        </Link>
        <Link href="#" className="text-xs text-zinc-400 hover:text-zinc-100">
          Privacy Center
        </Link>
        <Link href="#" className="text-xs text-zinc-400 hover:text-zinc-100">
          Privacy Policy
        </Link>
        <Link href="#" className="text-xs text-zinc-400 hover:text-zinc-100">
          About Ads
        </Link>
        <Image
          src="/private.svg"
          width={24}
          height={32}
          alt="Simbol private"
          title="Private"
        />
      </div>
      <Link href="#" className="text-xs text-zinc-400 hover:text-zinc-100">
        Cookies
      </Link>
    </div>
  );
}
