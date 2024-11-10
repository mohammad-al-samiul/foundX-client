"use client";
import CardSkeleton from "@/src/components/UI/CardSkeleton";
import Container from "@/src/components/UI/Container";

export default function Loading() {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 justify-center items-center">
        {[...Array(6)].map((item, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
}
