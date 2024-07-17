"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const schema = z
  .object({
    email: z.string().email({ message: "enter a valid email" }),
    name: z.string(),
    username: z.string(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type Schema = z.infer<typeof schema>;

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Schema> = (data: Schema) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-[40px] ">
      <div className=" mb-[10px] text-center">
        Cadastre-se para ver fotos e vídeos dos seus amigos.
      </div>
      <button className="form-btn  ">Entrar com o Facebook</button>
      <div className="mt-[10px]  mb-[18px] flex items-center gap-2">
        <div className="line"></div>
        <div>OU</div>
        <div className="line"></div>
      </div>
      <input {...register("email")} className="input" placeholder="Email" />
      {errors.email && (
        <div className="text-sm text-red-500">{errors.email?.message}</div>
      )}
      <input
        {...register("name")}
        className="input"
        placeholder="Nome Completo"
      />
      {errors.name && (
        <div className="text-sm text-red-500">{errors.name?.message}</div>
      )}
      <input
        {...register("username")}
        className="input"
        placeholder="Nome de usuário"
      />
      {errors.username && (
        <div className="text-sm text-red-500">{errors.username?.message}</div>
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
      <input
        {...register("confirmPassword")}
        className="input"
        placeholder="Confirmar senha"
        type="password"
      />
      {errors.confirmPassword && (
        <div className="text-sm text-red-500">
          {errors.confirmPassword?.message}
        </div>
      )}
      <div className="text-xs mb-[6px] text-center">
        As pessoas que usam nosso serviço podem ter enviado suas informações de
        contato para o Instagram. Saiba mais
      </div>
      <div className="text-xs mb-[6px] text-center">
        Ao se cadastrar, você concorda com nossos Termos, Política de
        Privacidade e Política de Cookies.
      </div>
      <button className="form-btn" type="submit">
        Cadastre-se
      </button>
    </form>
  );
}
