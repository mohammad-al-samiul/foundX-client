import React from "react";

import Sidebar from "@/src/components/UI/Sidebar";
import Container from "@/src/components/UI/Container";
import { Navbar } from "@/src/components/UI/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="flex">
          <div className="w-2/8">
            <Sidebar />
          </div>

          <div className="w-full m-2">{children}</div>
        </div>
      </Container>
    </div>
  );
}
