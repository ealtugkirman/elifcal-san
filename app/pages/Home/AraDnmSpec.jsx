import React from "react";
import Image from "next/image";
import pic from "../../img/work3.jpeg";
import pic2 from "../../img/work4.jpeg"
import pic3 from "../../img/work5.jpeg"

export const AraDnmSpec = () => {
  return (
    <div className="flex px-12 py-20 flex-col space-y-20 bg-gray-200">
      <div className="flex flex-row items-center space-x-6">
        <div className="w-2/5 ">
          <Image className="rounded-xl" src={pic} width={500} />
        </div>
        <div className="w-3/5 space-y-8">
          <h3 className="italic font-bold text-2xl ">
            Ara Dönem danışmanlıgı{" "}
            <span className="text-mainblue">gizlidir</span>
            <span className="italic text-mainblue"></span>
          </h3>
          <p>
            Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en
            etklissss yoldur.Ara dönem danışmanlığı tüm sorunlarınızı kökünden
            çözmek için en etkli yoldur.Ara dönem danışmanlığı tüm sorunlarınızı
            kökünden çözmekssss için en etkli yoldur.
          </p>
          <h5>
            Hukuki kuşkularınız{" "}
            <span className="text-mainblue italic"> hızlı</span> bir şekilde
            giderelim.
          </h5>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-6">
        <div className="w-3/5 space-y-8">
          <h3 className="italic font-bold text-2xl ">
            Ara Dönem danışmanlıgı{" "}
            <span className="text-mainblue">hızlı</span>
            <span className="italic text-mainblue"></span>
          </h3>
          <p>
            Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en
            etklissss yoldur.Ara dönem danışmanlığı tüm sorunlarınızı kökünden
            çözmek için en etkli yoldur.Ara dönem danışmanlığı tüm sorunlarınızı
            kökünden çözmekssss için en etkli yoldur.
          </p>
          <h5>
            Hukuki kuşkularınız{" "}
            <span className="text-mainblue italic"> ekonomik</span> bir şekilde
            giderelim.
          </h5>
        </div>
        <div className="w-2/5 ">
          <Image className="rounded-xl" src={pic2} width={500} />
        </div>
      </div>
      <div className="flex flex-row items-center space-x-6">
        <div className="w-2/5 ">
          <Image className="rounded-xl" src={pic3} width={500} />
        </div>
        <div className="w-3/5 space-y-8">
          <h3 className="italic font-bold text-2xl ">
            Ara Dönem danışmanlıgı{" "}
            <span className="text-mainblue">ekonomiktir</span>
            <span className="italic text-mainblue"></span>
          </h3>
          <p>
            Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en
            etklissss yoldur.Ara dönem danışmanlığı tüm sorunlarınızı kökünden
            çözmek için en etkli yoldur.Ara dönem danışmanlığı tüm sorunlarınızı
            kökünden çözmekssss için en etkli yoldur.
          </p>
          <h5>
            Hukuki kuşkularınız{" "}
            <span className="text-mainblue italic"> gizli</span> bir şekilde
            giderelim.
          </h5>
        </div>
      </div>
    </div>
  );
};
