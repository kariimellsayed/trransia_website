import { servicesCards } from "@/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const t = useTranslations("ServicesSection");
  return (
    <section className="relative w-full padding-y">
      <div className="flex flex-col justify-center items-center gap-3 mx-auto">
        <h1 className="heading">{t("title")}</h1>
        <p className="text-xl sm:text-2xl text-center font-normal text-brandblack leading-8">
          {t("des")}
        </p>
      </div>

      {/* Services Card */}
      <div className="mx-auto relative my-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center">
          {servicesCards.map((service, index) => (
            <div key={service.key}>
              <Link
                href="#"
                className={`relative flex flex-col items-center justify-center bg-brandlightgray rounded-3xl shadow-lg
               w-[300px] h-[260px] transition-transform duration-300 hover:scale-110`}
              >
                {/* أيقونة الخدمة */}
                <div className="flex justify-center items-center w-full">
                  <Image
                    src={service.img}
                    alt={t(service.key)}
                    width={150}
                    height={150}
                    className="object-cover h-auto"
                  />
                </div>

                {/* زر النص */}
                <div
                  className={`absolute bottom-[-15px] px-6 py-2 ${
                    index % 2 === 0 ? "bg-black" : "bg-primary"
                  } text-white text-xl font-semibold rounded-full shadow-md`}
                >
                  {t(service.key)}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
