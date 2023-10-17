import React from "react";
import Card from "../../components/WorkCard";
import img from "../../img/boşanma.jpeg";
import img2 from "../../img/koşu.jpg";
import img3 from "../../img/work3.jpeg";
import img4 from "../../img/work4.jpeg";
import img5 from "../../img/work5.jpeg";
import img6 from "../../img/work6.jpeg";


const Work = () => {
  return (
    <div className="flex bg-gray-300 font-Libre px-12 pb-32 flex-col pt-24 justify-center items-center">
      <div className="flex-col text-center space-y-4">
        <h1 className="font-bold text-5xl">Çalışma Alanlarımız</h1>
        <h3 className="italic text-2xl text-blue-500"> Aile Hukuku Hizmetlerimiz </h3>
      </div>
      <div className="flex flex-row space-x-24 mx-16 text-center mt-16">
        <Card
          imageUrl={img}
          title="Boşanma"
          description="Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en etkli yoldur."
          link="<a>#</a>"
        />
        <Card
          imageUrl={img2}
          title="Boşanma Sonrası"
          description="Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en etkli yoldur."
          link="<a>#</a>"
        />
        <Card
          imageUrl={img3}
          title="Finansal Yaklaşım"
          description="Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en etkli yoldur."
          link="<a>#</a>"
        />
      </div>
      <div className="flex flex-row space-x-24 mx-16 text-center mt-24">
        <Card
          imageUrl={img4}
          title="Çocuk Hukuku"
          description="Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en etkli yoldur."
          link="<a>#</a>"
        />
        <Card
          imageUrl={img5}
          title="Evlilik Sözleşmeleri"
          description="Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en etkli yoldur."
          link="<a>#</a>"
        />
        <Card
          imageUrl={img6}
          title="Boşanma Öncesi"
          description="Ara dönem danışmanlığı tüm sorunlarınızı kökünden çözmek için en etkli yoldur."
          link="<a>#</a>"
        />
      </div>
    </div>
  );
};

export default Work;
