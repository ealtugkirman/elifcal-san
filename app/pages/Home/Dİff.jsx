import React from "react";
import Image from "next/image";
import diff from "../../img/diff.svg";

const Dİff = () => {
  return (
    <div className="flex bg-gray-300 font-Libre px-12 pb-32 flex-col py-24 justify-center items-center">
      <div className="flex-row justify-center space-x-20 flex">
        <div className="w-2/5">
          <Image src={diff} />
        </div>
        <div className="w-2/5 space-y-8 my-20  flex-row">
          <h2 className="text-4xl  italic ">Size nasıl yardımcı olabiliriz</h2>
          <p>
            Ofisimiz, uzun yıllara dayanan zengin deneyimi ve uzman kadrosuyla,
            her zaman yanınızda olmaktan gurur duyar ve sizin ihtiyaçlarınıza
            karşı en üst düzeyde destek sunmayı taahhüt eder. Bizimle işbirliği
            yaparak, iş süreçlerinizi optimize edebilir, verimliliği artırabilir
            ve başarıya giden yolda güçlü bir ortaklık kurabilirsiniz. Size daha
            fazla bilgi sunmaktan memnuniyet duyarız ve herhangi bir sorunuzu
            yanıtlamak için buradayız.
          </p>
          <button className="border-blue-400 border-2 text-lg rounded-lg bg-white p-4">
            Randevu Oluştur
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dİff;
