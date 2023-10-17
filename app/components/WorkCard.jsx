import Link from "next/link";
import Image from "next/image";

const WorkCard = (props) => {
  const { imageUrl, title, description, link } = props;

  return (
    <div className="max-w-sm bg-white hover:bg-blue-100 rounded-lg shadow">
      <Link legacyBehavior href={link}>
        <a>
          <Image className="w-full h-52" src={imageUrl} alt="" />
        </a>
      </Link>
      <div className="p-5">
        <Link legacyBehavior href={link}>
          <a>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
          </a>
        </Link>
        <p className="mb-3 text-md text-gray-700">{description}</p>
        <Link legacyBehavior href={link}>
          <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Daha Fazla
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
