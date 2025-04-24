import Image from "next/image";
import FormTranslate from "./FormTranslate";
import { availableLanguages } from "@/data";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

// MetaData
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO.translation");

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

const Translate = () => {
  const t = useTranslations("Translate");
  return (
    <main className="relative min-h-screen w-full padding">
      {/* Background Image */}
      <Image
        src="/translate-bg.png"
        alt="Translate Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85 z-10"></div>

      {/* Content */}
      <section className="relative z-20 w-full flex flex-col gap-10">
        {/* Texts */}
        <div className="flex flex-col items-start gap-6 w-full animate-slideIn">
          <h1 className="text-primary sm:text-4xl text-3xl font-bold">
            {t("title")}
          </h1>
          <p className="sm:text-xl text-lg text-brandblack leading-8 font-medium">
            {t("des")}
          </p>

          <div className="flex gap-4">
            <a
              href="#trans"
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
        </div>
        {/* Form */}
        <FormTranslate />

        {/* Languaches */}
        <div className="flex flex-col items-start gap-8">
          <h2 className="head-color sm:text-3xl text-2xl leading-relaxed font-bold">
            {t("office")}:
          </h2>

          <p className="sm:text-xl text-lg text-brandblack font-medium">
            {t("depart")}:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li className="sm:text-2xl text-base text-brandblack font-normal">
              {t("from")}
            </li>
            <li className="sm:text-2xl text-base text-brandblack font-normal">
              {t("to")}
            </li>
          </ul>

          <div
            className="p-5 bg-white/50 rounded-xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border 
             border-primary shadow-2xl"
          >
            {availableLanguages.map((lang) => (
              <p key={lang} className="text-lg text-brandblack font-medium">
                {lang}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Translate;
