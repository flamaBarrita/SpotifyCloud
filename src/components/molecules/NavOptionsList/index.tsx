"use client";

import { Bookmark, Heart, Plus } from "lucide-react";

import { NavOption } from "@/components/atoms/NavOption";

export function NavOptionsList() {
  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <NavOption icon={Plus} text="Create Playlist" variant="plus" href="#" />
      <NavOption icon={Heart} text="Liked Songs" variant="heart" href="#" />
      <NavOption icon={Bookmark} text="Your Episodes" variant="save" href="#" />
    </div>
  );
}
