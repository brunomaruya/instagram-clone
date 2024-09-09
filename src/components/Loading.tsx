import { colors } from "@/constants/colors";
import React from "react";
import { Oval } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color={colors.blueBg}
        secondaryColor="transparent"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
