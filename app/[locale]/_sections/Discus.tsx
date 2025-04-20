import { useTranslations } from "next-intl";
import Image from "next/image";

const Discus = () => {
  const t = useTranslations("Discus");
  return (
    <section className="relative w-full padding-y">
      <div className="flex flex-col gap-10 items-start">
        {/* Title */}
        <h1 className="heading max-w-3xl">{t("title")}</h1>

        <p className="des">{t("des")}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-28">
        <div className="sm:w-1/2 w-full flex flex-col items-start justify-center gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl text-brandblack font-medium leading-tight">
                {t("visiontitle")}
              </h2>
              <Image
                src={"/roqia.svg"}
                alt="Tranisa Roqia Electronics"
                width={40}
                height={40}
              />
            </div>

            <p className="text-xl sm:text-2xl font-normal text-brandblack leading-relaxed">
              {t("visiondes")}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl text-brandblack font-medium leading-tight">
                {t("misiontitle")}
              </h2>
              <Image
                src={"/resala.svg"}
                alt="Tranisa Roqia Electronics"
                width={40}
                height={40}
              />
            </div>

            <p className="text-xl sm:text-2xl font-normal text-brandblack leading-relaxed">
              {t("misiondes")}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="sm:w-1/2 flex justify-center">
          <Image
            src={"/discuss.png"}
            alt="Transia Services Seo Electronics Discus Customer Services"
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

export default Discus;
