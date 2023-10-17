import Image from "next/image";
const BlogCard = ({ imageUrl, title, description, lastUpdated }) => {
  return (
    <div className="flex flex-col rounded-lg bg-gray-200 md:max-w-md-xl md:flex-row">
      <Image
        className="h-40 rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-md"
        src={imageUrl}
        width={800}
        alt=""
      />
      <div className="flex flex-col mx-4 mt-8 justify-start ">
        <h5 className="mb-2 text-2xl font-bold text-neutral-800 ">{title}</h5>
        <p className="mb-4 text-sm text-neutral-600 ">{description}</p>
        <p className="text-xs text-neutral-500 ">{lastUpdated}</p>
      </div>
    </div>
  );
};

export default BlogCard;
