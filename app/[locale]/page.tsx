import { services } from "@/data";
import { Link as IntlLink } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServicesGrid from "./_components/ui/ServicesGrid";

const Teaser = () => {
  const t = useTranslations("Welcome");

  return (
    <section className="w-full min-h-screen bg-white padding">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex justify-center items-center md:w-1/3 animate-fadeIn">
          <Image
            src="/teaser-logo.svg"
            alt="Transia Business Logo"
            width={300}
            height={300}
            priority
            className="object-contain md:w-64 md:h-64 w-48 h-48"
          />
        </div>

        {/* Texts */}
        <div className="flex flex-col items-start gap-6 md:w-2/3 animate-slideIn">
          <h1 className="text-xl md:text-2xl text-gray-900 font-normal leading-relaxed">
            {t("des")}
          </h1>

          <div className="self-end animate-scale">
            <IntlLink
              href="/home"
              className="text-white text-center px-10 py-3 font-semibold bg-gradient-to-r from-primary
               to-black rounded-xl hover:from-black hover:to-primary transition-all duration-300 self-end"
            >
              {t("more")}
            </IntlLink>
          </div>
        </div>
      </div>

      {/* Sale Box Section */}
      <div className="flex justify-center animate-fadeInUp mt-10">
        <Link
          href="/register"
          className="w-full max-w-md flex items-center flex-col md:flex-row justify-center gap-4 py-2 px-6 bg-white rounded-2xl
           shadow-lg shadow-primary hover:scale-90 transition-all duration-300 border border-gray-200"
        >
          {/* Logo & Percentage */}
          {/* <div className="flex items-center">
            <Image
              src="/teaser-logo.svg"
              alt="Transia Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div> */}
          <div className="flex items-center">
            <Image
              src="/50.webp"
              alt="50% Discount"
              width={200}
              height={200}
              className="object-contain sm:w-32 sm:h-32 w-24 h-24"
            />
          </div>

          {/* Offer Texts */}
          <div className="flex flex-col md:items-end items-center gap-1">
            <p className="text-sm text-gray-600">{t("offer")}</p>
            <p className="text-base font-semibold">{t("descount")}</p>
            <p className="text-xl font-bold text-primary">{t("reg")}</p>
          </div>
        </Link>
      </div>
      {/* Services Cards */}
      <ServicesGrid />
    </section>
  );
};

export default Teaser;
