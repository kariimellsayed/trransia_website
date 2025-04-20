import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Ques = () => {
  const t = useTranslations("Ques");
  return (
    <section className="relative w-full padding-y">
      <div className="flex flex-col mx-auto sm:flex-row items-center justify-between gap-8">
        {/* Texts */}
        <div className="sm:w-1/2 w-full flex flex-col items-start justify-center gap-10">
          <h1 className="heading">{t("title")}</h1>

          <p className="des">{t("des")}</p>
        </div>

        {/* Image */}
        <div className="sm:w-1/2 flex justify-center">
          <Image
            src={"/ques.png"}
            alt="Transia Services Seo Electronics"
            width={370}
            height={370}
            className="object-contain sm:object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Ques;
