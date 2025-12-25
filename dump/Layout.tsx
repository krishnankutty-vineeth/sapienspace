import Navbar from "./Navbar";
import Footer from "../Footer";

export const metadata = {
  title: "SapienSpace",
  description: "Where Human Wisdom Meets the Infinite Cosmos."
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#020826] text-white min-h-screen">
      <Navbar />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
}
