"use client";

import { ICategory } from "@/dtos";
import Image from "next/image";
import Link, { LinkProps } from "next/link";

interface IProps extends LinkProps {
  data: ICategory;
}

export function CardCategory({ data, ...rest }: IProps) {
  return (
    <Link {...rest}>
      <li
        className="relative h-52 w-52 rounded-lg"
        style={{
          backgroundColor: data.bgCard,
        }}
      >
        <div className="flex flex-col items-start  p-4">
          <strong>{data.title}</strong>
        </div>
        <Image
          className="absolute bottom-0 right-0"
          src={data.url}
          width={100}
          height={100}
          alt="cover"
        />
      </li>
    </Link>
  );
}
