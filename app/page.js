import Image from "next/image";
import Header from "./components/Navbar/Header";
import Headers from "./pages/Home/Headers";
import SecondHeader from "./pages/Home/SecondHeader";
import Work from "./pages/Home/Work";
import BlogAnon from "./pages/Home/BlogAnon";
import Diff from "./pages/Home/Dİff";
import Footer from "./components/Navbar/Footer";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Headers />
      <SecondHeader />
      <Work />
      <BlogAnon />
      <Diff />
      <Footer />
    </main>
  );
}
