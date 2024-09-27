"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { signIn } from "@/app/services/firebase/authService";

const schema = z.object({
  email: z.string().email({ message: "enter a valid email" }),
  password: z.string().min(6),
});

type Schema = z.infer<typeof schema>;

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Schema> = (data: Schema) => {
    signIn(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-[40px] ">
      <header className=" mb-3 text-center">
        Cadastre-se para ver fotos e vídeos dos seus amigos.
      </header>

      <input {...register("email")} className="input" placeholder="Email" />
      {errors.email && (
        <div className="text-sm text-red-500">{errors.email?.message}</div>
      )}
      <input
        {...register("password")}
        className="input"
        placeholder="Senha"
        type="password"
      />
      {errors.password && (
        <div className="text-sm text-red-500">{errors.password?.message}</div>
      )}
      <button className="form-btn" type="submit">
        Entrar
      </button>
      <section className="flex items-center gap-2 mt-3 mb-5 ">
        <div className="line"></div>
        <div>OU</div>
        <div className="line"></div>
      </section>
      <button disabled className="form-btn cursor-not-allowed">
        Entrar com o Facebook
      </button>

      <section className="text-sm text-center">Esqueceu a senha ?</section>
    </form>
  );
}
