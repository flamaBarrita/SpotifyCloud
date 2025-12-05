import { DropdownCompactTable } from "@/components/molecules/DropdownCompactTable";
import { WrapperActionsPlaylist } from "@/components/molecules/WrapperActionsPlaylist";

export function HeaderActionsPlaylist() {
  return (
    <header className="flex w-full items-center justify-between py-2">
      <WrapperActionsPlaylist />
      <DropdownCompactTable />
    </header>
  );
}
