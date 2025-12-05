"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { List } from "lucide-react";

export function DropdownCompactTable() {
  const [check, setCheck] = React.useState<0 | 1>(1);

  function handleCheckCompact() {
    setCheck(0);
  }

  function handleCheckList() {
    setCheck(1);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2 border-0 bg-transparent outline-none focus:border-0">
          {" "}
          List <List />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-0 bg-zinc-700 text-zinc-300 shadow-lg">
        <DropdownMenuCheckboxItem
          checked={check === 0}
          onCheckedChange={handleCheckCompact}
          className="focus:bg-zinc-600 focus:text-zinc-300"
        >
          Compact
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={check === 1}
          onCheckedChange={handleCheckList}
          className="focus:bg-zinc-600 focus:text-zinc-300"
        >
          List
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
