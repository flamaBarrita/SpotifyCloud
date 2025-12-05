import { Check } from "lucide-react";

interface IProps {
  text: string;
}

export function CheckText({ text }: IProps) {
  return (
    <p className="flex w-full items-start justify-start gap-2 text-base">
      <Check />
      <span className="w-full">{text}</span>
    </p>
  );
}
