import React from "react";
import Section from "../pages/Home/Section";
import SecondHeader from "../pages/WhyUs/SecondHeader";
import Services from "../pages/Home/Services";
import Anket from "../pages/Home/Anket";
import AraDnm from "../pages/Home/AraDnm";
import { AraDnmSpec } from "../pages/Home/AraDnmSpec";
import Progress from "../pages/Home/Progress";
import Contact from "../components/Contact";

const page = () => {
  return (
    <div>
      <Section />
      <SecondHeader />
      <Services />
      <Anket />
      <AraDnm />
      <AraDnmSpec />
      <Progress />
      <Contact />
    </div>
  );
};

export default page;
