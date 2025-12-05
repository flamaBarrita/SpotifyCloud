import { Volume } from "lucide-react";

export function VolumeControll() {
  return (
    <div className="hidden items-center gap-1 lg:flex">
      <div className="h-1 w-40 rounded-full bg-zinc-600">
        <div className="h-1 w-20 rounded-full bg-zinc-200" />
      </div>
      <Volume size={20} />
    </div>
  );
}
