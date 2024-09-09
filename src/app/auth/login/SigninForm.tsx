"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "../../services/firebase/firebaseService";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email({ message: "enter a valid email" }),
  password: z.string().min(6),
});

type Schema = z.infer<typeof schema>;

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Schema> = (data: Schema) => {
    signIn(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-[40px] ">
      <div className=" mb-[10px] text-center">
        Cadastre-se para ver fotos e vídeos dos seus amigos.
      </div>

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
      <div className="mt-[10px]  mb-[18px] flex items-center gap-2">
        <div className="line"></div>
        <div>OU</div>
        <div className="line"></div>
      </div>
      <button className="form-btn  ">Entrar com o Facebook</button>

      <div className="text-sm text-center">Esqueceu a senha ?</div>
    </form>
  );
}
