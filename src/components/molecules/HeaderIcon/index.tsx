import Image from "next/image";
import Link from "next/link";

export function HeaderIcon() {
  return (
    <header className="flex w-full items-center justify-center border-b border-b-zinc-300 py-6">
      <Link href="/">
        <Image src="/IconDark.svg" width={144} height={44} alt="Icon" />
      </Link>
    </header>
  );
}
