import Image from "next/image";
import AnketBg from "../../img/anketbg.svg";

const Anket = () => {
  return (
    <div className="">
      <div className="text-center py-12 bg-blue-300">
        <h3 className="text-3xl font-bold mb-4" >İhtiyaçınızı beraber bulalım</h3>
        <p>
          İlişkinize en çok yardımcı olacak içeriğe doğrudan ulaşmak ister
          misiniz?!
        </p>
        <p>
          Sizin için en iyi 3 evlilik kaynağını öğrenmek için 4 soruyu
          yanıtlayın.
        </p>
      </div>
    </div>
  );
};

export default Anket;
