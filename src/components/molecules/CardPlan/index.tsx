import Link from "next/link";

import { ButtonSign } from "@/components/atoms/ButtonSign";
import { IPlan } from "@/dtos";
import { Bagde } from "@/components/atoms/Bagde";
import { CheckText } from "@/components/atoms/CheckText";

interface IProps {
  data: IPlan;
}

function Terms() {
  return (
    <span className="text-zinc-600">
      {" "}
      1 month free not available for users who have already tried Premium.
    </span>
  );
}

export function CardPlan({ data }: IProps) {
  return (
    <li className="flex h-[620px] w-64 flex-col items-center rounded-lg p-4 shadow-xl">
      <header className="flex h-48 flex-col items-start justify-start gap-1 border-b border-b-zinc-300 text-black">
        <div className="flex flex-col gap-2">
          {data.bagde.map((item) => (
            <Bagde
              key={item.id}
              text={item.text}
              variant={data.isPay && item.id === 1 ? "primary" : "secundary"}
            />
          ))}
        </div>
        <strong className="text-xl">{data.title}</strong>
        <p className="text-base">{data.perMounth}</p>
        <span className="text-base">{data.totalCounts}</span>
      </header>
      <div className="flex flex-col items-center justify-center">
        <div className="flex h-56 w-full flex-col items-start justify-start gap-2 pt-5 text-black">
          {data.checkList.map((item, index) => (
            <CheckText key={index} text={item} />
          ))}
        </div>
        <div className="w-48">
          <ButtonSign text="View Plans" variant="dark" />
        </div>
      </div>
      <div className="h-20 pt-4">
        <Link href="#" className="text-zinc-600 underline">
          Terms and conditions apply.
        </Link>
        {data.isPay && <Terms />}
      </div>
    </li>
  );
}
