"use client";
import { logout } from "@/src/services/AuthService";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function NavbarDropdown() {
  const router = useRouter();
  const handleNavigation = (pathName: string) => {
    router.push(pathName);
  };
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className="cursor-pointer" name="Joe" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            onClick={() => handleNavigation("/profile")}
            key="profile"
          >
            Profile
          </DropdownItem>
          <DropdownItem
            onClick={() => handleNavigation("/create-post")}
            key="post"
          >
            Create Post
          </DropdownItem>
          <DropdownItem
            onClick={() => handleNavigation("/claim-request")}
            key="request"
          >
            Claim Request
          </DropdownItem>
          <DropdownItem
            onClick={() => handleNavigation("/setting")}
            key="setting"
          >
            Setting
          </DropdownItem>
          <DropdownItem
            onClick={() => logout()}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
