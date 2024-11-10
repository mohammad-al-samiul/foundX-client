import { Card, Skeleton } from "@nextui-org/react";

export default function CardSkeleton() {
  return (
    <div className="max-w-7xl mx-auto">
      <Card className="w-[350px] rounded-xl">
        <div className="p-0 overflow-visible">
          <div className="absolute z-[1000] mt-2">
            <Skeleton className="w-[56px] h-[16px] rounded-lg mt-2 ml-3  bg-default-400 ">
              <p />
            </Skeleton>
            <Skeleton className="w-[101px] h-[28px] rounded-xl mt-2 ml-3 bg-default-400">
              <p />
            </Skeleton>
          </div>
          <div className="w-[350px] h-[350px] bg-default-400 rounded-xl" />
        </div>
        <div className="flex justify-between p-1">
          <Skeleton className="w-[45px] h-[20px] rounded-lg m-2 bg-default-400">
            <p> </p>
          </Skeleton>
          <Skeleton className="w-[45px] h-[20px] rounded-lg m-2 bg-default-400">
            <p> </p>
          </Skeleton>
        </div>
      </Card>
    </div>
  );
}
