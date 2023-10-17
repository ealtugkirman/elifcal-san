import Image from "next/image";
import img from "../../img/blog1.jpeg";
import img2 from "../../img/blog2.jpeg"
import BlogCard from "@/app/components/BlogCard";

const BlogAnon = () => {
  return (
    <div className="flex font-Libre px-24 mt-32 bg-white flex-col  pb-24 justify-center items-center">
      <div className="text-center space-y-4">
        <h3 className="text-4xl  italic">
          Daha Fazla Haberdar Olmak için Blog sayfamıza göz atın
        </h3>
      </div>
      <div className="flex-row mt-16 flex h-80 space-x-12">
        <BlogCard
          imageUrl={img}
          title="Kişisel İlişki Tesis Karalarında Dikkat Edilmesi Gereken Önemli Hususlar"
          description="Boşanma veya velayet davasında, velayet hakkı eşlerden birine verildiğinde, haklı bir sebep mevcut değilse diğer eş için de çocukla kişisel ilişki kurulmasına hükmedilir. "
          lastUpdated="15.10.2023"
        />
        <BlogCard
          imageUrl={img2}
          title="Çocuk Teslim Merkezleriyle Aşılan Sorunlar"
          description=" Aile hakiminin verdiği boşanma kararı ile birtakım hukuki sonuçlar meydana geliyor. Nihayetinde, boşanma davasının sonuçları açısından en çok etkilenen çocuk..."
          lastUpdated="10.10.2023"
        />
      </div>
    </div>
  );
};

export default BlogAnon;
