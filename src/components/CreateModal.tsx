import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function CreateModal() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)] absolute z-[100000000] ">
      <div className="w-[692px] h-[735px] bg-[#262626] rounded-xl">
        <header className="h-[42px] border-b-[1px] border-[#333333] flex justify-center items-center">
          Criar nova publicação
        </header>
        <main className="flex justify-center items-center flex-col h-full">
          <PhotoIcon className="h-32 w-32" />
          <div>Arraste as fotos e os videos aqui</div>
          <button className="form-btn w-fit mt-5">
            Selecionar do computador
          </button>
        </main>
      </div>
    </div>
  );
}
