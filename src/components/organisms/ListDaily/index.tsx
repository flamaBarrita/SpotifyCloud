import { CardAudio } from "@/components/molecules/CardAudio";
import { ICardDaily } from "@/dtos";

interface IProps {
  title: string;
  data: ICardDaily[];
}

export function ListDaily({ title, data }: IProps) {
  return (
    <div className="flex flex-col items-start gap-5">
      <strong className="text-lg text-white">{title}</strong>
      <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {data.map((item) => (
          <CardAudio key={item.id} data={item} variant="primary" />
        ))}
      </div>
    </div>
  );
}
