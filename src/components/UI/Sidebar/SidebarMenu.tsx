"use client";

import { Button } from "@nextui-org/react";
import NextLink from "next/link";
export default function SidebarMenu() {
  return (
    <div className="flex flex-col w-full mt-3 bg-default-50 p-2 rounded-xl">
      <Button className="mb-2" href="/profile" as={NextLink}>
        Post
      </Button>
      <Button
        className="mb-2"
        href="/profile/received-claim-requests"
        as={NextLink}
      >
        Received Claim Request
      </Button>
      <Button className="mb-2" href="/profile/setting" as={NextLink}>
        Setting
      </Button>
    </div>
  );
}
