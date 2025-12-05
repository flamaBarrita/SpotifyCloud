import { VolumeControll } from "@/components/atoms/VolumeControll";
import { Laptop2, LayoutList, Maximize2, Mic2 } from "lucide-react";

export function MoreAudioControll() {
  return (
    <div className="hidden w-full items-center justify-between gap-2 sm:flex sm:justify-end">
      <Mic2 size={20} />
      <LayoutList size={20} />
      <Laptop2 size={20} />
      <VolumeControll />
      <Maximize2 size={20} />
    </div>
  );
}
