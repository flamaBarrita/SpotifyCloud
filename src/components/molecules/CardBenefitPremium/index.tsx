import { ICardBenefit } from "@/dtos";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  data: ICardBenefit;
}

export function CardBenefitPremium({ data }: IProps) {
  return (
    <Link href="#">
      <li className="flex h-72 w-72 flex-col items-center justify-center gap-10">
        <Image
          src={data.urlImage}
          width={142}
          height={142}
          alt={data.title}
          title={data.title}
        />
        <div className="flex flex-col items-center gap-3">
          <strong className="text-sm text-black">{data.title}</strong>
          <span className="text-center text-base text-black">
            {data.description}
          </span>
        </div>
      </li>
    </Link>
  );
}
