export const metadata = {
  title: "FLASH.AI",
  description: "Generate your own Flashcards for study and revision purposes.",
};
import { Kanit } from "next/font/google";
import "./globals.css";

const ubuntu = Kanit({ subsets: ["latin"], weight: ["300"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="slider-thumb">{children}</div>
      </body>
    </html>
  );
}
