import Image from "next/image";
import Link from "next/link";

import { BagdeSocialMedia } from "@/components/atoms/BagdeSocialMedia";
import { Facebook, Globe, Instagram, Twitter } from "lucide-react";

export function FooterMain() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-16 bg-zinc-950 px-32 py-16">
      <div className="flex w-full items-start justify-between">
        <Link href="/">
          <Image
            src="/IconTransparent.svg"
            width={132}
            height={40}
            alt="icon-spotify"
          />
        </Link>
        <div className="flex items-start justify-center gap-20">
          <div className="flex flex-col items-center justify-center gap-5">
            <strong className="text-base text-zinc-500">Company</strong>
            <nav className="flex flex-col items-center justify-center gap-4">
              <Link href="#" className="text-white hover:text-zinc-400">
                About
              </Link>
              <Link href="#" className="text-white hover:text-zinc-400">
                Jobs
              </Link>
              <Link href="#" className="text-white hover:text-zinc-400">
                For the Record
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <strong className="text-base text-zinc-500">Communities</strong>
            <nav className="flex flex-col items-center justify-center gap-4">
              <Link href="#" className="text-white hover:text-zinc-400">
                For Artists
              </Link>
              <Link href="#" className="text-white hover:text-zinc-400">
                Developers
              </Link>
              <Link href="#" className="text-white hover:text-zinc-400">
                Advertising
              </Link>
              <Link href="#" className="text-white hover:text-zinc-400">
                Investors
              </Link>
              <Link href="#" className="text-white hover:text-zinc-400">
                Vendors
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <strong className="text-base text-zinc-500">Useful links</strong>
            <nav className="flex flex-col items-center justify-center gap-4">
              <Link href="#" className="text-white hover:text-zinc-400">
                Support
              </Link>
              <Link href="#" className="text-white hover:text-zinc-400">
                Web Player
              </Link>
              <Link href="#" className="text-white hover:text-zinc-400">
                Free Mobile App
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BagdeSocialMedia href="#" icon={Instagram} />
          <BagdeSocialMedia href="#" icon={Twitter} />
          <BagdeSocialMedia href="#" icon={Facebook} />
        </div>
      </div>
      <div className="flex w-full items-end justify-between">
        <nav className="flex items-center gap-6">
          <Link href="#" className="text-xs text-zinc-400 hover:text-white">
            Legal
          </Link>
          <Link href="#" className="text-xs text-zinc-400 hover:text-white">
            Privacy Center
          </Link>
          <Link href="#" className="text-xs text-zinc-400 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs text-zinc-400 hover:text-white">
            Cookies
          </Link>
          <Link href="#" className="text-xs text-zinc-400 hover:text-white">
            About Ads
          </Link>
        </nav>
        <div className="flex flex-col items-start gap-3">
          <span className="flex items-center gap-2 text-xs text-zinc-400">
            <Globe /> USA (English)
          </span>
          <span className="text-xs text-zinc-400">© 2023 Spotify AB</span>
        </div>
      </div>
    </section>
  );
}
