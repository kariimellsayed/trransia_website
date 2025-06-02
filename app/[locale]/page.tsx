"use client";

import { Link as IntlLink, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ServicesGrid from "./_components/ui/ServicesGrid";

const Teaser = () => {
  const t = useTranslations("Welcome");

  const [showSaleBox, setShowSaleBox] = useState(true);

  useEffect(() => {
    const role = localStorage.getItem("role");
    const accessToken = localStorage.getItem("accessToken-transia");

    if (accessToken && role !== "admin") {
      setShowSaleBox(false);
    }
  }, []);

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
      {showSaleBox && (
        <div className="flex justify-center animate-fadeInUp mt-10">
          <div
            className="w-full max-w-4xl flex items-center flex-col md:flex-row justify-between gap-4 py-3 sm:py-2 px-6
           bg-white rounded-2xl shadow-lg shadow-primary border border-gray-200 group"
          >
            {/* Download */}
            <div className="flex flex-col items-center gap-2">
              <p className="sm:text-lg text-base font-semibold">
                قم بتحميل التطبيق واستفد بالعروض
              </p>
              <div className="flex flex-col items-center gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/googleplay.png"
                    alt="Download on Google Play"
                    width={140}
                    height={45}
                    className="object-contain transition-transform duration-200 hover:scale-105"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/apple.png"
                    alt="Download on App Store"
                    width={140}
                    height={45}
                    className="object-contain transition-transform duration-200 hover:scale-105"
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src="/50.webp"
                alt="50% Discount"
                width={200}
                height={200}
                className="object-contain sm:w-44 sm:h-44 w-24 h-24"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="sm:text-xl text-base font-semibold">
                {t("descount")}
              </p>

              <Link
                href={"/register"}
                className="text-xl font-bold text-white bg-primary px-8 py-2 rounded-2xl transition-all
               duration-200 hover:bg-red-600 group-hover:scale-90"
              >
                {t("reg")}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Services Cards */}
      <ServicesGrid />
    </section>
  );
};

export default Teaser;
