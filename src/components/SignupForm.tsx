"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="mx-[40px] ">
      <div className=" mb-[10px] text-center">
        Cadastre-se para ver fotos e vídeos dos seus amigos.
      </div>
      <button className="form-btn  ">Entrar com o Facebook</button>
      <div className="mt-[10px]  mb-[18px] flex items-center gap-2">
        <div className="line"></div>
        <div>OU</div>
        <div className="line"></div>
      </div>

      <input className="input" placeholder="Numero do celular ou email" />
      <input className="input" placeholder="Nome Completo" />
      <input className="input" placeholder="Nome de usuário" />
      <input className="input" placeholder="Senha" />
      <div className="text-xs mb-[6px] text-center">
        As pessoas que usam nosso serviço podem ter enviado suas informações de
        contato para o Instagram. Saiba mais
      </div>
      <div className="text-xs mb-[6px] text-center">
        Ao se cadastrar, você concorda com nossos Termos, Política de
        Privacidade e Política de Cookies.
      </div>
      <button className="form-btn">Cadastre-se</button>
    </div>
  );
}
