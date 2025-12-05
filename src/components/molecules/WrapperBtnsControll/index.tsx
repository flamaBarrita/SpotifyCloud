import { ChevronLeft, ChevronRight } from "lucide-react";

import { ButtonControll } from "@/components/atoms/ButtonControll";

interface IProps {
  isInputSearchFocused?: boolean;
}

export function WrapperBtnsControll({ isInputSearchFocused = false }: IProps) {
  const style = `${isInputSearchFocused ? "hidden" : "flex"} items-center gap-1 md:gap-3`;

  return (
    <div className={style}>
      <ButtonControll icon={ChevronLeft} />
      <ButtonControll icon={ChevronRight} />
    </div>
  );
}
