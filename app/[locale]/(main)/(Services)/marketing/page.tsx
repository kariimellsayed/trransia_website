import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Marketing = () => {
  const t = useTranslations("Marketing");
  return (
    <main className="relative min-h-screen w-full padding">
      {/* Background Image */}
      <Image
        src="/marketing-bg.png"
        alt="Translate Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95 z-10"></div>

      {/* Content */}
      <section className="relative z-20 w-full flex flex-col gap-10">
        {/* Texts */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="head-color sm:text-3xl text-2xl font-bold">
            {t("title")}
          </h1>
          <p className="sm:text-xl text-lg text-brandblack font-medium">
            {t("des")}
          </p>
          {/* our service */}
          <h2 className="sm:text-xl text-lg text-brandblack font-semibold">
            {t("our")}
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
            <li className="sm:text-lg text-base text-brandblack font-normal">
              {t("our4")}
            </li>
          </ul>
          {/* end texts */}
          <p className="sm:text-xl text-lg text-brandblack font-medium">
            {t("end")}
          </p>
        </div>

        {/* Form */}
      </section>
    </main>
  );
};

export default Marketing;
