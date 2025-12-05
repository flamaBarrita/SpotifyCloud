import { Heart } from "lucide-react";

import { ButtonAction } from "@/components/atoms/ButtonAction";
import { ButtonPlay } from "@/components/atoms/ButtonPlay";
import { DropdownMorePlaylist } from "../DropdownMorePlaylist";

export function WrapperActionsPlaylist() {
  return (
    <div className="flex items-center justify-center gap-4">
      <ButtonPlay variant="greenVisible" />
      <ButtonAction icon={Heart} label="Save To Your Library" type="button" />
      <DropdownMorePlaylist />
    </div>
  );
}
