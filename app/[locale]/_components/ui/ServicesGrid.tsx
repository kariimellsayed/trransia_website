import { services } from "@/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const ServicesGrid = () => {
  const t = useTranslations("Services");

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
      {services.map((service, index) => {
        const spanClass =
          index === 0 || index === 5 || index === 6
            ? "md:col-span-2"
            : "md:col-span-1";

        return (
          <Link
            href={service.href}
            key={service.key}
            className={`bg-white border-[0.5px] border-red-300 shadow-2xl rounded-4xl p-4 flex flex-col items-center
                 justify-center duration-200 hover:scale-105 z-10 ${spanClass} animate-fadeInUp`}
          >
            <Image
              src={service.img}
              alt={t(`${service.key}`)}
              width={150}
              height={150}
              className="mb-4 object-contain"
            />
            <h4 className="text-brandblack text-center text-lg font-semibold">
              {t(`${service.key}`)}
            </h4>
          </Link>
        );
      })}
    </div>
  );
};

export default ServicesGrid;
