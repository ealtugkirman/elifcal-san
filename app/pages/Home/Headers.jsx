import React from "react";
import Image from "next/image";
import border from "../../img/border.svg";
import avatar from "../../img/avatar.svg";

const Header = () => {
  return (
    <div className="flex font-Libre mx-12 pt-28 flex-col h-screen justify-center items-center ">
      <div>
        <Image src={border} />
      </div>
      <div className="flex-row mx-12 my-12 flex">
        <div className="space-y-12">
          <h1 className="text-6xl ml-12 text-mainblue  italic">
            Av. Elif Nur Çalışan
          </h1>
          <p className="mr-24 ml-12">
            Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en
            etkli yoldur.Ara dönem danışmanlığı tüm sorunlarınızı kökünden
            çözmek için en etkli yoldur. Aile hukukunu anlamanızı kolaylaştırmak ve her davanın benzersiz
          olduğuna, her birinin özel desteğe ihtiyaç duyduğuna ve özenle ele
          alındığına inanmanızı sağlamak için çok çalışıyoruz.
          </p>
          <button className="bg-mainblue ml-12 rounded-md text-lg mr-3 p-4">Yazılar</button>
          <button className="border-mainblue border-2 text-lg rounded-md bg-white p-4">
            Randevu Oluştur
          </button>
        </div>
        <div className="w-full mr-24">
          <Image src={avatar} />
        </div>
      </div>
      <div className="transform rotate-180">
        <Image src={border} />
      </div>
    </div>
  );
};

export default Header;
