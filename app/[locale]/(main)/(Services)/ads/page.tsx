import { useTranslations } from "next-intl";
import Image from "next/image";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ads } from "@/data";
import FormAds from "./FormAds";
import ContactButton from "@/app/[locale]/_components/ui/ContactButton";

// MetaData
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO.ad");

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

const Tech = () => {
  const t = useTranslations("Ad");

  return (
    <main className="relative min-h-screen w-full padding">
      {/* Background Image */}
      <Image
        src="/ad-bg.png"
        alt="Translate Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95 z-10"></div>

      {/* Content */}
      <section className="relative z-20 w-full flex flex-col gap-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 animate-fadeIn">
          {/* Texts */}
          <div className="flex flex-col items-start gap-6 w-full max-w-3xl animate-slideIn">
            <h1 className="text-primary sm:text-4xl text-3xl font-bold">
              {t("title")}
            </h1>
            <p className="sm:text-xl text-lg text-brandblack leading-7 font-medium">
              {t("des")}
            </p>

            {/* our */}
            <h2 className="sm:text-xl text-lg text-brandblack font-semibold">
              {t("our")} :
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
            </ul>

            <div className="flex gap-4">
              <a
                href="#ad"
                className="bg-primary hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full
                 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20 animate-slideIn"
              >
                {t("order")}
              </a>
              <ContactButton />
            </div>
          </div>

          {/* info image */}
          <div className="flex flex-col items-center animate-slideIn">
            <Image
              src={"/info-ad.png"}
              alt="Tech Services Marketing"
              width={370}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        {/* ads Cards */}
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ads.map((ad) => (
              <div
                key={ad.title}
                className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-slideIn overflow-hidden"
              >
                {/* Card Image */}
                <div className="relative w-full h-40">
                  <Image
                    src={ad.image}
                    alt={t(ad.title)}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {t(ad.title)}
                  </h3>
                  <p className="text-gray-800 text-base">{t(ad.description)}</p>
                  <a
                    href={"#ad"}
                    className="self-start bg-primary hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
                  >
                    {t("order")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <FormAds />
      </section>
    </main>
  );
};

export default Tech;
