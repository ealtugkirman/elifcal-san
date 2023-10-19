import Headers from "../pages/WhyUs/Headers";
import SecondHeader from "../pages/WhyUs/SecondHeader";
import Work from "../pages/WhyUs/Work";
import BlogAnon from "../pages/WhyUs/BlogAnon";
import Diff from "../pages/WhyUs/Dİff";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Headers />
      <SecondHeader />
      <Work />
      <BlogAnon />
      <Diff />
    </div>
  );
}
