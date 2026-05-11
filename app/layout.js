import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "Devwithtobi Portfolio",
  description: "Fullstack portfolio built with Next.js App Router"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
