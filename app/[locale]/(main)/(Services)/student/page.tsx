import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import FormStudent from "./FormStudent";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// MetaData
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO.student");

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

const Student = () => {
  const t = useTranslations("Student");
  return (
    <main className="relative min-h-screen w-full padding">
      {/* Background Image */}
      <Image
        src="/student-bg.png"
        alt="Translate Background"
        fill
        className="object-cover object-bottom z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95 z-10"></div>

      {/* Content */}
      <section className="relative z-20 w-full flex flex-col gap-10">
        {/* Texts */}
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-primary sm:text-4xl text-3xl font-bold">
            {t("title")}
          </h1>
          <p className="sm:text-xl text-lg text-brandblack leading-7 font-medium">
            {t("des")}
          </p>

          {/* our service */}
          <h2 className="sm:text-xl text-lg text-brandblack font-semibold">
            {t("our")} :
          </h2>

          <ul className="list-disc list-inside space-y-3">
            <li className="sm:text-lg text-base text-brandblack font-medium">
              {t("our1")}
            </li>
            <li className="sm:text-lg text-base text-brandblack font-medium">
              {t("our2")}
            </li>
            <li className="sm:text-lg text-base text-brandblack font-medium">
              {t("our3")}
            </li>
          </ul>

          {/* Order */}
          <div className="flex gap-4">
            <a
              href="#student"
              className="bg-primary hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full
                 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20 animate-slideIn"
            >
              {t("order")}
            </a>
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary hover:bg-primary hover:text-white
                 font-semibold py-3 px-8 rounded-full transition-all duration-300 animate-slideIn"
            >
              {t("contact")}
            </a>
          </div>

          {/* end texts */}
          <p className="sm:text-xl text-lg text-brandblack font-medium">
            {t("end")}
          </p>
        </div>

        {/* Form Student */}
        <FormStudent />
      </section>
    </main>
  );
};

export default Student;
