import { branches, media } from "@/data";
import ContactCard from "../../_components/ui/ContactCard";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MapSection from "../../_components/ui/MapSection";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO.contact");

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

export default function Contact() {
  const tmedia = useTranslations("Contact.media");
  const tbranch = useTranslations("Contact.branches");

  return (
    <section className="relative w-full padding">
      <ContactCard />
      {/* Media */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center mt-40">
        {media.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-center justify-center gap-5 px-5 py-2 shadow-2xl w-64 h-52 
            rounded-2xl transition-all duration-200 hover:scale-110"
          >
            <Image
              src={card.icon}
              alt="Social Media Email Phone Location"
              width={30}
              height={30}
            />
            <h2 className="text-center head-color leading-tight text-xl font-bold">
              {tmedia(card.title)}
            </h2>
            {card.address && (
              <p className="text-base font-normal leading-tight">
                {tmedia(card.address)}
              </p>
            )}
            {card.des && (
              <p className="text-base font-normal leading-tight">{card.des}</p>
            )}
          </div>
        ))}
      </div>
      {/* Map */}
      <MapSection />

      {/* Branches */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center mt-40">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="flex flex-col items-center justify-center gap-4 px-5 py-2 shadow-sm w-64 h-52 
            rounded-2xl border-1 border-primary transition-all duration-200 hover:scale-110"
          >
            <h3 className="text-center head-color leading-tight text-xl font-bold">
              {tbranch(branch.title)}
            </h3>
            <p className="text-base font-normal leading-tight">{branch.num}</p>
            {branch.ad && (
              <p className="text-base font-normal text-center leading-tight">
                {tbranch(branch.ad)}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
