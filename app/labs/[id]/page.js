import { notFound } from "next/navigation";
import LabDetail from "../../../components/LabDetail";
import { labs } from "../../../lib/utils";


export async function generateMetadata({ params }) {
  const item = labs.find((lab) => String(lab.id) === String(params.id));
  return {
    title: item ? `Tobiloba Lawal - ${item.title}` : "Tobiloba Lawal - Lab"
  };
}

export default function LabDetailPage({ params }) {
  const content = labs.find((lab) => String(lab.id) === String(params.id));
  if (!content) notFound();
  return <LabDetail content={content} />;
}

