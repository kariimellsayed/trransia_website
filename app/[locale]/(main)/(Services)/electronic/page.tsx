import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactButton from "@/app/[locale]/_components/ui/ContactButton";
import { electronics } from "@/data";
import FormElectronic from "./FormElectronic";

// MetaData
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO.elec");

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

const Electronic = () => {
  const t = useTranslations("Electronic");
  return (
    <main className="relative min-h-screen w-full padding">
      {/* Background Image */}
      <Image
        src="/electronic-bg.jpg"
        alt="Translate Background"
        fill
        className="object-cover object-bottom z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95 z-10"></div>

      {/* Content */}
      <section className="relative z-20 w-full flex flex-col gap-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 animate-fadeIn">
          {/* Text */}
          <div className="flex-1 flex flex-col items-start gap-6 w-full max-w-3xl animate-slideIn">
            <h1 className="text-primary sm:text-4xl text-3xl font-bold">
              {t("title")}
            </h1>
            <p className="sm:text-xl text-lg text-brandblack leading-7 font-medium max-w-2xl">
              {t("des")}
            </p>

            <div className="flex gap-4">
              <a
                href="#elec"
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
              src="/info-elec.png"
              alt="Marketing Visual"
              width={450}
              height={400}
              className="object-contain transition-transform duration-300 hover:scale-105 animate-slideIn"
            />
          </div>
        </div>

        {/* Electronic Cards */}
        <div className="mt-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {electronics.map((elec) => (
              <div
                key={elec.title}
                className="flex flex-col justify-between bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl
                 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-slideIn overflow-hidden"
              >
                {/* Card Image */}
                <div className="relative w-full h-40">
                  <Image
                    src={elec.image}
                    alt={t(elec.title)}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {t(elec.title)}
                    </h3>
                    <p className="text-gray-800 text-base">
                      {t(elec.description)}
                    </p>
                  </div>

                  {/* زرار الطلب */}
                  <div className="mt-6">
                    <a
                      href={"#elec"}
                      className="block w-fit bg-primary hover:bg-red-600 text-white font-semibold py-2 px-4
                       rounded-full transition-all duration-300"
                    >
                      {t("order")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <FormElectronic />
      </section>
    </main>
  );
};

export default Electronic;
