/* eslint-disable import/order */
"use client";
import { IPost } from "@/src/types";
import {
  Card as NextUiCard,
  CardFooter,
  Image,
  Button,
  CardHeader,
} from "@nextui-org/react";
import { format } from "date-fns";

export default function Card({ item }: { item: IPost }) {
  //console.log(item);
  return (
    <NextUiCard
      isFooterBlurred
      className="w-[300px] h-[300px] col-span-12 sm:col-span-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-black font-medium text-2xl">{item.title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={item.images[0]}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">
            {format(new Date(item.dateFound), "dd-MM-yyyy")}
          </p>
          <p className="text-black text-tiny"> {item.status}</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          GET
        </Button>
      </CardFooter>
    </NextUiCard>
  );
}
