import SignupForm from "@/components/SignupForm";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="sign-box mb-[10px] ">
        <span className="logo pt-9 pb-3 text-5xl">Instagram</span>
        <SignupForm />
      </div>
      <div className="sign-box  ">
        <div className="h-12 flex items-center gap-1">
          <span>Tem uma conta?</span> <span className="link">Conecte-se</span>
        </div>
      </div>
    </div>
  );
}
