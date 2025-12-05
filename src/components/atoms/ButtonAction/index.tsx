import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { ElementType, forwardRef } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ElementType;
}

const ButtonAction = forwardRef<HTMLButtonElement, IProps>(
  ({ label, icon: Icon, ...rest }, ref) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="text-zinc-400 outline-none group-hover:text-white"
              ref={ref}
              {...rest}
            >
              <Icon size={32} />
            </button>
          </TooltipTrigger>
          <TooltipContent className="rounded bg-zinc-900 px-2 py-1">
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
);

ButtonAction.displayName = "Button";

export { ButtonAction };
