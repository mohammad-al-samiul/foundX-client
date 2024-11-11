"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";

export default function NavbarDropdown() {
  const { setIsLoading: userLoading } = useUser();
  const router = useRouter();
  const handleNavigation = (pathName: string) => {
    router.push(pathName);
  };

  const handleLogout = () => {
    logout();
    userLoading(true);
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className="cursor-pointer" name="Joe" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="profile"
            onClick={() => handleNavigation("/profile")}
          >
            Profile
          </DropdownItem>
          <DropdownItem
            key="post"
            onClick={() => handleNavigation("/create-post")}
          >
            Create Post
          </DropdownItem>
          <DropdownItem
            key="request"
            onClick={() => handleNavigation("/claim-request")}
          >
            Claim Request
          </DropdownItem>
          <DropdownItem
            key="setting"
            onClick={() => handleNavigation("/setting")}
          >
            Setting
          </DropdownItem>
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            onClick={handleLogout}
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
