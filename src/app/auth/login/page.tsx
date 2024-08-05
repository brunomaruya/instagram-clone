import Link from "next/link";
import React from "react";
import SigninForm from "./SigninForm";

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
          <Link href="/auth/accounts/emailsignup" className="link">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
