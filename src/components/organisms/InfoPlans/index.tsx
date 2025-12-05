import { ButtonSign } from "@/components/atoms/ButtonSign";
import { CardPlan } from "@/components/molecules/CardPlan";
import { plans } from "@/database/plans";
import Image from "next/image";

export function InfoPlans() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-16 bg-zinc-100 pb-16 pt-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold text-black">Pick your Premium</h1>
        <span className="text-base text-black">
          Listen without limits on your phone, speaker, and other devices.
        </span>
        <Image
          src="/FormsPagament.svg"
          alt="Pagament"
          width={210}
          height={24}
        />
      </div>
      <ul className="grid grid-cols-4 gap-4">
        {plans.map((item) => (
          <CardPlan key={item.id} data={item} />
        ))}
      </ul>
      <div className="flex w-[780px] items-center justify-center gap-4 rounded-xl p-4 shadow-xl">
        <strong className="text-2xl text-black">
          Special discount for eligible students in university
        </strong>
        <div>
          <ButtonSign text="Learn more" variant="darkBgWhite" />
        </div>
      </div>
    </section>
  );
}
