import { ChevronDown } from "lucide-react";

export function ActionDropdownProfile() {
  return (
    <div className="flex w-32 cursor-pointer items-center justify-center gap-2 rounded-full bg-zinc-950 p-1 text-white hover:bg-zinc-800">
      <img
        src="https://github.com/MaxiiXx23.png"
        alt="Image profile"
        className="h-7 w-7 rounded-full"
      />
      <strong className="hidden lg:block">Max J</strong>
      <ChevronDown />
    </div>
  );
}
