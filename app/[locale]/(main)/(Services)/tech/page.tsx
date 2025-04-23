import { itServices } from "@/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FormTech from "./FormTech";

const Tech = () => {
  const t = useTranslations("Tech");
  return (
    <main className="relative min-h-screen w-full padding">
      {/* Background Image */}
      <Image
        src="/tech-bg.png"
        alt="Translate Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 z-10"></div>

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
          <a
            href="#it-services"
            className="bg-primary hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all
             duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20 animate-slideIn"
          >
            {t("order")}
          </a>
        </div>

        {/* It Services */}
        <div className="animate-fadeInUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {itServices.map((service, index) => (
              <a
                href="#it-services"
                key={service.key}
                className="bg-white/90 backdrop-blur-md border border-gray-200 p-6 rounded-xl shadow-md 
                hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-slideIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t(service.key)}
                </h3>
                <p className="text-brandblack text-sm">
                  {t(service.description)}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <FormTech />
      </section>
    </main>
  );
};

export default Tech;
