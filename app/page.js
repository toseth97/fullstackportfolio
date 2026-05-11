import Hero from "../components/Hero";

export const metadata = {
  title: "Devwithtobi - Home"
};

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Hero />
    </div>
  );
}
