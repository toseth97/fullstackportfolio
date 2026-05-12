import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "Tobiloba Lawal -Portfolio",
  description: "Security-First IT Support Engineer & Ethical Hacker,Bridging the gap between robust infrastructure management and proactive threat defense. 8+ years of experience securing digital environments and empowering users."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Boxicons for hamburger/menu icons */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
