import { toDateTime } from "@/utils/dateUtils";
import Image from "next/image";
import userImgDefault from "@/../public/assets/user.jpg";
export function Message({
  sentUser,
  text,
  date,
  userImg,
}: {
  sentUser: "me" | "friend";
  text: string;
  date: any;
  userImg?: string;
}) {
  return (
    <div title={toDateTime(date.seconds).toString()} className={`w-full mb-2`}>
      <div
        className={`flex gap-2 items-center  mx-4  ${
          sentUser === "me" ? "justify-end" : ""
        }`}
      >
        <Image
          className={`w-7 h-7 rounded-2xl ${sentUser === "me" ? "hidden" : ""}`}
          src={userImg ? userImg : userImgDefault}
          alt=""
          width={500}
          height={50}
        />
        <div
          className={`${
            sentUser === "me" ? "bg-blueBg " : "bg-grayBg"
          } py-[7px] px-3 w-fit rounded-full `}
        >
          <div> {text}</div>
        </div>
      </div>
    </div>
  );
}
