/* eslint-disable import/order */
import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

export default function Banner() {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/banner_sunglass.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
            }
            type="text"
          />
        </form>
      </div>
    </div>
  );
}
