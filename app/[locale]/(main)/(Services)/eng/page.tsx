import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactButton from "@/app/[locale]/_components/ui/ContactButton";
import FormEng from "./FormEng";

// MetaData
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO.eng");
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: "ar",
      siteName: "Transia",
    },
  };
}

const Eng = () => {
  const t = useTranslations("Eng");

  return (
    <main className="relative min-h-screen w-full padding">
      {/* Background Image */}
      <Image
        src="/print-bg.jpg"
        alt="Translate Background"
        fill
        className="object-cover object-bottom z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 z-10"></div>

      {/* Content */}
      <section className="relative z-20 w-full flex flex-col gap-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 animate-fadeIn">
          {/* Text */}
          <div className="flex-1 flex flex-col items-start gap-8 w-full max-w-3xl animate-slideIn">
            <h1 className="text-primary sm:text-4xl text-3xl font-bold">
              {t("title")}
            </h1>
            <p className="sm:text-xl text-lg text-brandblack leading-7 font-medium max-w-2xl">
              {t("des")}
            </p>

            {/* our */}
            <h2 className="sm:text-xl text-lg text-brandblack font-semibold">
              {t("our")} :
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="sm:text-lg text-base text-brandblack font-normal">
                {t("our1")}
              </li>
              <li className="sm:text-lg text-base text-brandblack font-normal">
                {t("our2")}
              </li>
              <li className="sm:text-lg text-base text-brandblack font-normal">
                {t("our3")}
              </li>
            </ul>

            <div className="flex gap-4">
              <a
                href="#eng"
                className="bg-primary hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full
                transition-all text-sm sm:text-lg duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20 animate-slideIn"
              >
                {t("order")}
              </a>
              <ContactButton />
            </div>
          </div>

          {/* Side Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/eng.png"
              alt="Marketing Visual"
              width={450}
              height={400}
              className="object-contain transition-transform duration-300 hover:scale-105 animate-slideIn"
            />
          </div>
        </div>

        {/* Form */}
        <FormEng />
      </section>
    </main>
  );
};

export default Eng;
