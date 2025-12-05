import { CardLiked } from "@/components/atoms/CardLiked";
import { ReactNode } from "react";

import { tv, VariantProps } from "tailwind-variants";

const tailVar = tv({
  base: ["no-scrollbar w-full mb-2 grid gap-6 overflow-y-auto max-h-screen"],
  variants: {
    variant: {
      search:
        "grid-cols-1 justify-items-center xl:grid-cols-4 sm:grid-cols-3 mobileL:grid-cols-2 sm:justify-between",
      library:
        "grid-cols-1 justify-items-center xl:grid-cols-6 sm:grid-cols-3 mobileL:grid-cols-2 sm:justify-between",
      outline: "",
    },
  },
});

interface IProps extends VariantProps<typeof tailVar> {
  showTitle?: boolean;
  title?: string;
  children: ReactNode;
  isLibrary?: boolean;
}

export function ContainerLists({
  showTitle = false,
  title = "",
  isLibrary = false,
  variant,
  children,
}: IProps) {
  return (
    <section className="mt-6 flex flex-1 flex-col items-start gap-5 px-1 pt-6 sm:px-1 md:px-2 lg:px-6">
      {showTitle && <strong className="text-lg text-white">{title}</strong>}
      <ul className={tailVar({ variant })}>
        {isLibrary && <CardLiked />}
        {children}
      </ul>
    </section>
  );
}
