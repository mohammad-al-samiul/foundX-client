"use client";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { useUser } from "@/src/context/user.provider";

export default function Sidebar() {
  const { user } = useUser();

  return (
    <div>
      <Card key={user?._id} shadow="sm">
        <CardBody className="overflow-visible p-0">
          <Image
            alt={user?.name}
            className="w-full object-cover "
            radius="lg"
            src={user?.profilePhoto}
            width="100%"
          />
        </CardBody>
        <CardFooter>
          <Button className="w-full" size="sm">
            Create Post
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
