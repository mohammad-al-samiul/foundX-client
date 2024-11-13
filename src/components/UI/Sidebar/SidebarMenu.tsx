"use client";

import { Tabs, Tab } from "@nextui-org/react";

export default function SidebarMenu() {
  return (
    <div className="flex flex-col w-full mt-3">
      <Tabs aria-label="Options" fullWidth={true} isVertical={true}>
        <Tab key="post" title="Post" />
        <Tab key="setting" title="Setting" />
      </Tabs>
    </div>
  );
}
