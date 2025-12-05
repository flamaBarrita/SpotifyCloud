import { ReactNode } from "react";

interface IProps {
  TitleList: string;
  children: ReactNode;
}

export function ListAudios({ TitleList, children }: IProps) {
  return (
    <>
      <header className="flex w-full items-center justify-between">
        <a href="#" className="mb-2 mt-4 text-xl font-semibold hover:underline">
          {TitleList}
        </a>
        <a
          href="#"
          className="mb-2 mt-4 text-sm font-semibold text-zinc-400 hover:underline"
        >
          Show all
        </a>
      </header>
      <ul className="mb-6 grid grid-cols-1 justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {children}
      </ul>
    </>
  );
}
