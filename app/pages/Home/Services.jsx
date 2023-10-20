import React from "react";
import {
  FaBalanceScale,
  FaDollarSign,
  FaChild,
  FaFileContract,
  FaUserFriends,
  FaHandshake,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="flex flex-col items-center h-80 my-24 space-y-12 justify-center">
      <h3 className="text-4xl font-bold  font-Libre mb-12 mt-8">Hizmet Alanlarımız</h3>

      <div className="grid grid-cols-3 text-3xl gap-x-40 gap-24">
        <div className="flex items-center">
          <FaBalanceScale className=" text-mainblue mr-2" />
          <div className="text-xl">Boşanma Hukuku</div>
        </div>
        <div className="flex items-center">
          <FaDollarSign className=" text-mainblue mr-2" />
          <div className="text-xl">Finansal Yaklaşım</div>
        </div>
        <div className="flex items-center">
          <FaHandshake className=" text-mainblue mr-2" />
          <div className="text-xl">Boşanma Sonrası</div>
        </div>
        <div className="flex items-center">
          <FaChild className=" text-mainblue mr-2" />
          <div className="text-xl">Çocuk Hukuku</div>
        </div>
        <div className="flex items-center">
          <FaFileContract className=" text-mainblue mr-2" />
          <div className="text-xl">Evlilik Sözleşmeleri</div>
        </div>
        <div className="flex items-center">
          <FaUserFriends className=" text-mainblue mr-2" />
          <div className="text-xl">Boşanma Öncesi</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
