// import { Inter } from "next/font/google";
import Theme from "@/components/Theme";
import "./globals.css";
import DarkLight from "@/components/DarkLight";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Musa Mueed | An IT Influencer",
  description: "Assalam-o-Alaikum! I am Muhammad Musa Mueed, a software developer. I am passionate about building scalable and efficient software solutions. I am a full-stack developer with expertise in both front-end and back-end development. I am also a strong believer in the importance of clean code and test-driven development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <DarkLight />{children}</Theme>
      </body>
    </html>
  );
}
