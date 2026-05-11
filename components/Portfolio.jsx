"use client";

import { useEffect } from "react";
import { portfolio } from "../lib/utils";
import PortfolioList from "./PortfolioList";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center lg:mt-8 mt-0 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-16">
      <div className="lg:w-11/12 w-full flex flex-col items-center justify-center">
        {portfolio.map((item) => {
          return <PortfolioList key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
