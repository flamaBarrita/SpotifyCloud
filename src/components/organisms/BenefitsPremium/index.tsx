import { CardBenefitPremium } from "@/components/molecules/CardBenefitPremium";
import { ICardBenefit } from "@/dtos";

interface IProps {
  data: ICardBenefit[];
}

export function BenefitsPremium({ data }: IProps) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-16 bg-white pb-16 pt-16">
      <h1 className="text-5xl font-bold text-black">The power of Premium</h1>
      <ul className="grid grid-cols-4">
        {data.map((item) => (
          <CardBenefitPremium key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
}
