import Link from "next/link";
import { FaLink } from "react-icons/fa";

const PortfolioList = (props) => {
  const { id, name, image, description, link, bg } = props.item;
  return (
    <div className="w-10/12 flex lg:flex-row flex-col justify-between gap-5 my-8 my_portfolio bg-gray-900/50 p-6 rounded border border-green-400">
      <div className={`lg:w-7/12 w-full flex ${bg} items-center justify-center my_portfolio rounded border border-gray-600`}>
        <img src={image} alt={name} className="w-11/12" />
      </div>
      <div className="lg:w-5/12 w-full border-t border-b border-green-400 lg:py-8 py-1 text-justify lg:text-left">
        <a href={link} target="_blank" rel="noreferrer" className="flex gap-5 items-center hover:text-green-400 transition-colors">
          <h1 className="title_text text-4xl font-bold my-4 lg:text-left text-center text-green-400">{name}</h1>
          <FaLink className="text-green-400" />
        </a>
        <div className="opacity-80 tracking-wider lg:leading-7 leading-6 lg:text-sm text-md lg:min-h-40 text-gray-300">
          {description}
          <br />
        </div>

        <p>
          <Link href={`/portfolio/${id}`} className="portfolioBtn inline-block my-4 mb-8 py-2 px-16 text-sm text-center shadow-green-500/50">
            More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PortfolioList;
