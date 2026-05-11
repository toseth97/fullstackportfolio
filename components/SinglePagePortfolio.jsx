import Link from "next/link";

const SinglePagePortfolio = ({ content }) => {
  const { bg, image, image_2, info, description, sm_1, link, name, tools } = content;
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-16">
      <div className={`${bg} relative w-10/12 mt-8 lg:h-screen h-60 border border-green-400 rounded`}>
        <img src={image} alt="banner_1" className="absolute w-8/12 lg:top-10 lg:right-10 top-2 right-2" />
        <img src={image_2} alt="banner_2" className="absolute w-8/12 lg:left-10 lg:bottom-10 bottom-2 left-2" />
      </div>

      <div className="lg:w-8/12 w-10/12 flex lg:flex-row flex-col justify-between py-16 gap-16">
        <div className="border-b border-t border-green-400 lg:w-5/12 w-full py-8">
          <h1 className="font-bold text-4xl pb-8 title_text text-green-400">{name}</h1>
          <p className="text-sm opacity-80 py-8 text-gray-300">{description}</p>
          <p className="text-sm text-green-400">{tools}</p>

          <Link href={link} target="_blank" className="portfolioBtn inline-block my-4 mb-8 py-2 px-16 text-sm text-center shadow-green-500/50">
            Visit Site
          </Link>
        </div>
        <div className="lg:w-7/12 w-full">
          <h1 className="title_text lg:pb-16 pb-4 text-4xl text-green-400">Project Background</h1>
          <p className="text-sm opacity-80 lg:text-left text-justify text-gray-300">{info}</p>
          <h1 className="title_text lg:text-3xl text-2xl py-4 text-green-400">Static Image</h1>
          <div className={`${bg} relative w-full lg:min-h-48 h-36 overflow-hidden border border-gray-600 rounded`}>
            <img src={image_2} alt="banner_2" className="absolute w-8/12 lg:left-5 lg:top-5 top-2 left-2" />
            <img src={sm_1} alt="banner_2" className="absolute w-3/12 lg:right-5 lg:top-5 top-2 right-2" />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default SinglePagePortfolio;
