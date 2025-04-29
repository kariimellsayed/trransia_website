import { aboutTitles } from "@/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Ques from "../../_sections/Ques";
import Banner from "../../_components/ui/Banner";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO.about");

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
export default function About() {
  const t = useTranslations("About");

  return (
    <section className="relative padding w-full">
      {/* Main */}
      <div className="flex flex-col mx-auto sm:flex-row items-center justify-between gap-8 animate-slideIn">
        {/* Texts */}
        <div className="sm:w-1/2 w-full flex flex-col items-start justify-center gap-10">
          <h1 className="heading">{t("title")}</h1>

          <p className="des">{t("des")}</p>
        </div>

        {/* Image */}
        <div className="sm:w-1/2 flex justify-center">
          <Image
            src={"/about.png"}
            alt="Transia Services Seo Electronics About Us Translation"
            width={370}
            height={370}
            className="object-contain sm:object-cover max-w-full h-auto transition-transform duration-300 hover:scale-105
             animate-slideIn"
          />
        </div>
      </div>
      {/* About Titles */}
      <div className="flex flex-col items-center gap-2 mt-20">
        <h2 className="head-color sm:text-3xl text-2xl font-semibold">
          {t("aboutTitle")}
        </h2>

        <ul className="mt-10 list-disc list-inside text-start w-full flex flex-col gap-5">
          {aboutTitles.map((item, index) => (
            <li key={index} className="leading-relaxed des">
              {t(item.ab)}
            </li>
          ))}
        </ul>
      </div>
      {/* Ques */}
      <Ques />
      {/* Banners */}
      <Banner title={true} />
    </section>
  );
}
