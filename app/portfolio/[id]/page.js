import SinglePagePortfolio from "../../../components/SinglePagePortfolio";
import { portfolio } from "../../../lib/utils";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const item = portfolio.find((project) => project.id === Number(params.id));
  return {
    title: item ? `Devwithtobi - ${item.name}` : "Devwithtobi - Portfolio"
  };
}

export default function PortfolioItemPage({ params }) {
  const content = portfolio.find((item) => item.id === Number(params.id));

  if (!content) {
    notFound();
  }

  return <SinglePagePortfolio content={content} />;
}
