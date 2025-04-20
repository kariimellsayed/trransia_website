import { banners } from "@/data";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Banner = ({ title }: { title: string }) => {
  const t = useTranslations("About");
  return (
    <section className="padding-y">
      {title && (
        <h1 className="text-brandblack font-semibold sm:text-3xl text-2xl">
          {t(title)}
        </h1>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 place-items-center mt-10">
        {banners.map((banner) => (
          <Image
            key={banner.id}
            src={banner.img}
            alt="Transia Product Marketing Seo"
            width={100}
            height={48}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
