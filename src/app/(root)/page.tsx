import Rightbar from "@/app/(root)/components/home/Rightbar";
import Stories from "@/app/(root)/components/home/Stories";
import Feed from "@/app/(root)/components/home/Feed";
import Topbar from "@/app/(root)/components/home/Topbar";

export default function Home() {
  return (
    <div className="flex  justify-center ml-0 md:ml-[76px]  xl:ml-[244px] 2xl:ml-[335px] ">
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
      </div>
      <div className="w-[383px] pl-16  border-transparent border mt-9 hidden xl:block">
        <Rightbar />
      </div>
    </div>
  );
}
