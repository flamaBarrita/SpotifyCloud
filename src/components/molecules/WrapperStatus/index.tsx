import { CircleStatus } from "@/components/atoms/CircleStatus";

export function WrapperStatus() {
  return (
    <div className="flex items-center gap-2">
      <CircleStatus variant="red" />
      <CircleStatus variant="yellow" />
      <CircleStatus variant="green" />
    </div>
  );
}
