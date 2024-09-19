import {
  PhoneIcon,
  VideoCameraIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import userImg from "@/../public/assets/user.jpg";
export function Header({
  user,
}: {
  user: { username: string; profilePicture: string };
}) {
  return (
    <div className="fixed top-0 left-[120px] md:left-[calc(77px+120px)] lg:left-[calc(77px+380px)] right-0">
      <header className=" h-[75px] w-full flex justify-between items-center px-4 border-b-[1px] border-white">
        <Link href={`/${user.username}`} className="flex items-center gap-3  ">
          <Image
            src={user.profilePicture ? user.profilePicture : userImg}
            alt=""
            width={500}
            height={500}
            className="w-14 h-14 rounded-full"
          />

          <div className="font-bold">{user.username}</div>
        </Link>
        <div className="flex">
          <div className="p-2">
            <PhoneIcon className="size-6 " />
          </div>
          <div className="p-2">
            <VideoCameraIcon className="size-6 " />
          </div>
          <div className="p-2">
            <InformationCircleIcon className="size-6 " />
          </div>
        </div>
      </header>
    </div>
  );
}
