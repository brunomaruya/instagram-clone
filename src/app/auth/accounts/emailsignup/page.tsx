import SignupForm from "@/components/SignupForm";
import Link from "next/link";
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
          <span>Tem uma conta?</span>
          <Link href="/auth/login" className="link">
            Conecte-se
          </Link>
        </div>
      </div>
    </div>
  );
}
