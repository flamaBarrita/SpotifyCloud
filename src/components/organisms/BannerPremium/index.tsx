import Link from "next/link";

import { ButtonSign } from "@/components/atoms/ButtonSign";

export function BannerPremium() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-10 bg-[#1D75DE] pb-28 pt-28">
      <div className="flex w-full flex-col items-center gap-8">
        <h1 className="text-5xl font-bold">Get Premium free for 1 month</h1>
        <h2 className="text-2xl font-normal">
          Just $4.90/month after. Debit and credit cards accepted. Cancel
          anytime.
        </h2>
        <div className="flex w-2/5 items-center gap-4">
          <ButtonSign text="Get started" variant="dark" />
          <ButtonSign text="See other plans" variant="whiteTransparent" />
        </div>
      </div>
      <p>
        <Link href="#" className="underline">
          Terms and conditions apply.
        </Link>{" "}
        1 month free not available for users who have already tried Premium.
      </p>
    </section>
  );
}
