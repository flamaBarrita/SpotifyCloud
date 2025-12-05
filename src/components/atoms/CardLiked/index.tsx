import Link from "next/link";

export function CardLiked() {
  return (
    <Link
      href="#"
      className="col-span-1 hover:opacity-95 mobileL:col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-3 xl:col-span-5"
    >
      <li className="flex h-full w-[480px] flex-col items-center justify-end gap-8 rounded bg-gradient-to-br from-[#450AF5]  to-[#8E8EE5] p-6 lg:w-full">
        <div className="flex w-full items-center justify-start gap-4 truncate">
          <span>Ali Sethi Ranjish Hi Sahi</span>
          <span> • Willum Maindo Heaven</span>
          <span> • Willum Maindo Heaven</span>
          <span> • Willum Maindo Heaven</span>
        </div>
        <div className="flex w-full  flex-col items-start justify-center">
          <h1 className="text-3xl font-bold">Liked Songs</h1>
          <span className="text-xl sm:text-base">2 Liked Songs</span>
        </div>
      </li>
    </Link>
  );
}
