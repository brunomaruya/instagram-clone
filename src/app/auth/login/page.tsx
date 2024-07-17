import SigninForm from "@/components/SigninForm";
import SignupForm from "@/components/SignupForm";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="sign-box mb-[10px] ">
        <span className="logo pt-9 pb-3 text-5xl">Instagram</span>
        <SigninForm />
      </div>
      <div className="sign-box  ">
        <div className="h-12 flex items-center gap-1">
          <span>Nao tem uma conta?</span>
          <span className="link">Cadastre-se</span>
        </div>
      </div>
    </div>
  );
}
