import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section className="relative w-full padding-y">
      <div className="flex flex-col mx-auto sm:flex-row items-center justify-between gap-8">
        {/* Texts */}
        <div className="sm:w-1/2 w-full flex flex-col items-start justify-center gap-10">
          <h1 className="heading">{t("title")}</h1>

          <p className="des">{t("des")}</p>

          <a
            href="https://wa.me/966544214748"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-red-600 text-white px-8 py-3 rounded-full transition duration-300 font-semibold"
          >
            {t("link")}
          </a>
        </div>

        {/* Image */}
        <div className="sm:w-1/2 flex justify-center">
          <Image
            src={"/hero.png"}
            alt="Transia Services Seo Electronics"
            width={370}
            height={370}
            className="object-contain sm:object-cover"
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300 mt-16"></div>
    </section>
  );
};

export default Hero;
