"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Tab,
  Tabs,
} from "@nextui-org/react";

import Loading from "../Loading";

import SidebarMenu from "./SidebarMenu";

import { useUser } from "@/src/context/user.provider";

export default function Sidebar() {
  const { user, isLoading } = useUser();

  return (
    <div>
      {!isLoading && (
        <>
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

            <CardFooter className="p-0">
              <div className="w-full transform-gpu transition-transform duration-150 active:scale-95">
                <Tabs aria-label="Options" fullWidth={true} isVertical={true}>
                  <Tab key="creae-post" title="Create Post" />
                </Tabs>
              </div>
            </CardFooter>
          </Card>
          <SidebarMenu />
        </>
      )}
    </div>
  );
}
