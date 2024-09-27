import Link from "next/link";
import React from "react";
import SignupForm from "./SignupForm";

export default function page() {
  return (
    <div>
      <div className="sign-box mb-3 ">
        <span className="logo pt-9 pb-3 text-5xl">Instagram</span>
        <SignupForm />
      </div>
      <div className="sign-box  ">
        <div className="flex items-center gap-1 h-12 ">
          <span>Tem uma conta?</span>
          <Link href="/auth/login" className="link">
            Conecte-se
          </Link>
        </div>
      </div>
    </div>
  );
}
