import React from "react";
import Hero from "../../_sections/Hero";
import Discus from "../../_sections/Discus";
import Services from "../../_sections/Services";
import Ques from "../../_sections/Ques";
import Banner from "../../_components/ui/Banner";

const page = () => {
  return (
    <main className="min-h-screen w-full padding-x">
      <Hero />
      <Services />
      <Discus />
      <Ques />
      <Banner title={false} />
    </main>
  );
};

export default page;
