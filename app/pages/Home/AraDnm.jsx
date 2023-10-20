"use client";
import Lottie from "lottie-react";
import family from "../../img/family.json";

const AraDnm = () => {
  return (
    <div className="section grid-cols-2 px-20 gap-40">
      <div className="space-y-12 w-3/5">
        <div>
          {" "}
          <p className="italic">Boşanma sürecine dair kuşkularınız mı var?</p>
          <h1 className="text-4xl">
            <span className="text-mainblue italic">
              Ara dönem danışmanlığımız
            </span>{" "}
            <br />
            ile her zaman yanınızdayız.{" "}
          </h1>
        </div>
        <p>
          Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en etkli
          yoldur.
        </p>
        <button className="btn bg-mainblue mr-6">Detayli Bilgi</button>
        <button className="btn2 border-2 border-mainblue">
          Randevu Oluştur
        </button>
        <p>
          Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en etkli
          yoldur.Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için
          en etkli yoldur.Ara dönem danışmanlığı tüm sorunlarınızı kökünden
          çözmek için en etkli yoldur.
        </p>
      </div>
      <div className="w-2/5">
        <Lottie animationData={family} loop={true} />
      </div>
    </div>
  );
};

export default AraDnm;
