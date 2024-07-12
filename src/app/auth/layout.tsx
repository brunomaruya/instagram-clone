import React, { ReactNode } from "react";
import "../../app/globals.css";
import Image from "next/image";
import banner from "../../../public/assets/instagram-banner.jpg";
import { PiFlagBannerFoldLight } from "react-icons/pi";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen items-center mx-[484px]">
        <Image
          className="flex-1 object-contain"
          src="https://pngbuy.com/wp-content/uploads/2023/06/splash-instagram-logo-pnginstagram-png-logo.png"
          width={500}
          height={500}
          alt="banner"
        />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
