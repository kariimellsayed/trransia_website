import { services } from "@/data";
import { Link as IntlLink } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Teaser = () => {
  const t = useTranslations();

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
            {t("Welcome.des")}
          </h1>

          <div className="self-end animate-scale">
            <IntlLink
              href="/home"
              className="text-white text-center px-10 py-3 font-semibold bg-gradient-to-r from-primary
               to-black rounded-xl hover:from-black hover:to-primary transition-all duration-300 self-end"
            >
              {t("Welcome.more")}
            </IntlLink>
          </div>
        </div>
      </div>

      {/* Sale Box Section */}
      <div className="mt-12 flex justify-center animate-fadeInUp">
        <Link
          href="/register"
          className="w-full max-w-2xl flex items-center flex-col md:flex-row justify-between gap-4 py-2 px-6 bg-white rounded-2xl
           shadow-lg shadow-primary hover:scale-90 transition-all duration-300 border border-gray-200"
        >
          {/* Logo & Percentage */}
          <div className="flex items-center">
            <Image
              src="/teaser-logo.svg"
              alt="Transia Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/50.webp"
              alt="50% Discount"
              width={200}
              height={200}
              className="object-contain sm:w-36 sm:h-36 w-28 h-28"
            />
          </div>

          {/* Offer Texts */}
          <div className="flex flex-col md:items-end items-center gap-1">
            <p className="text-sm text-gray-600">{t("Welcome.offer")}</p>
            <p className="text-base font-semibold">{t("Welcome.descount")}</p>
            <p className="text-lg font-bold text-primary">{t("Welcome.reg")}</p>
          </div>
        </Link>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-20">
        {services.map((service, index) => {
          const spanClass =
            index === 0 || index === 5 || index === 6
              ? "md:col-span-2"
              : "md:col-span-1";

          return (
            <div
              key={service.key}
              className={`bg-white border-[0.5px] border-red-300 shadow-2xl rounded-4xl p-4 flex flex-col items-center
                     justify-center duration-200 hover:scale-105 z-10 ${spanClass} animate-fadeInUp`}
            >
              <Image
                src={service.img}
                alt={t(`Services.${service.key}`)}
                width={150}
                height={150}
                className="mb-4 object-contain"
              />
              <h4 className="text-brandblack text-center text-lg font-semibold">
                {t(`Services.${service.key}`)}
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Teaser;
