"use client";
import CardSkeleton from "@/src/components/UI/CardSkeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-3 gap-5 justify-center items-center">
      {[...Array(9)].map((item, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
