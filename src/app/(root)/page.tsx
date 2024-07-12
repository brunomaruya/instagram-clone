import Topbar from "@/components/Topbar";
import InstagramLogo from "../../common/InstagramLogo";
import Image from "next/image";
import Bottombar from "@/components/Bottombar";
import Feed from "@/components/Feed";
import Rightbar from "@/components/Rightbar";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="flex  justify-center ">
      <div className="md:w-[630px] w-full mt-0  md:mt-4 border-transparent border">
        <div className="md:hidden mb-5 fixed w-full bg-black top-0 z-[1000000000]">
          <Topbar />
        </div>
        <div className="mt-[70px] md:mt-0">
          <Stories />
        </div>
        <div>
          <Feed />
        </div>
        <div className="fixed bottom-0 w-full md:hidden">
          <Bottombar />
        </div>
      </div>
      <div className="w-[383px] pl-16  border-transparent border mt-9 hidden xl:block">
        <Rightbar />
      </div>
    </div>
  );
}
