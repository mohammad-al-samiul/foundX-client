/* eslint-disable import/order */
"use client";
import { IPost } from "@/src/types";
import {
  Card as NextUiCard,
  CardFooter,
  Image,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

export default function Card({ item }: { item: IPost }) {
  //console.log(item);
  return (
    <div>
      <NextUiCard
        key={item._id}
        isPressable
        shadow="sm"
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="p-0 overflow-visible">
          <CardHeader className="absolute top-1 left-2 z-[1000] flex-col items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">
              {item?.dateFound.slice(0, 10)}
            </p>
            <h4 className="text-black/60 font-bold text-lg">
              {item?.location}
            </h4>
          </CardHeader>
          <Image
            alt={item.title}
            className="w-[350px] object-cover h-[350px]"
            radius="lg"
            src={item?.images[0]}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{item.title}</b>
          <p className="text-default-500">{item.status}</p>
        </CardFooter>
      </NextUiCard>
    </div>
  );
}
