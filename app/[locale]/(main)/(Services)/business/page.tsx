import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactButton from "@/app/[locale]/_components/ui/ContactButton";
import { business } from "@/data";
import { FileText, Award, Users } from "lucide-react";
import FormBusiness from "./FormBusiness";

// MetaData
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO.busi");
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

// Benefits
const benefits = [
  {
    title: "benefit1",
    description: "benefit1des",
    icon: Award,
  },
  {
    title: "benefit2",
    description: "benefit2des",
    icon: Users,
  },
  {
    title: "benefit3",
    description: "benefit3des",
    icon: FileText,
  },
];

const Business = () => {
  const t = useTranslations("Business");
  const locale = useLocale();

  return (
    <main className="relative min-h-screen w-full padding">
      {/* Background Image */}
      <Image
        src="/business-bg.png"
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

            <div className="flex gap-4">
              <a
                href="#busi"
                className="bg-primary hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full
                 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20 animate-slideIn"
              >
                {t("order")}
              </a>
              <ContactButton />
            </div>
          </div>

          {/* Side Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/info-business.png"
              alt="Marketing Visual"
              width={450}
              height={400}
              className="object-contain transition-transform duration-300 hover:scale-105 animate-slideIn"
            />
          </div>
        </div>

        {/* Business Cards */}
        <div>
          <h2 className="sm:text-3xl text-2xl font-bold text-primary text-center mb-10">
            {t("our")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {business.map((busi) => (
              <div
                key={busi.title}
                className="flex flex-col justify-between bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl
                 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-slideIn overflow-hidden"
              >
                {/* Card Image */}
                <div className="relative w-full h-52">
                  <Image
                    src={busi.image}
                    alt={t(busi.title)}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {t(busi.title)}
                    </h3>
                    <p className="text-gray-800 text-base">
                      {t(busi.description)}
                    </p>
                  </div>

                  {/* زرار الطلب */}
                  <div className="mt-6">
                    <a
                      href={"#busi"}
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
        <FormBusiness />

        {/* Why Choose Us */}
        <div className="mt-10 bg-gray-50">
          <h2 className="sm:text-3xl text-2xl font-bold text-primary text-center mb-8">
            {locale === "ar" ? "لماذا تختارنا؟" : "Why Choose Us?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={t(benefit.title)}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-slideIn"
              >
                <benefit.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {t(benefit.title)}
                </h3>
                <p className="text-brandblack">{t(benefit.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Business;
