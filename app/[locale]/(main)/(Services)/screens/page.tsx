import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import ContactButton from "@/app/[locale]/_components/ui/ContactButton";
import { Monitor, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import FormScreens from "./FormScreens";
import { getTranslations } from "next-intl/server";

// MetaData
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO.screen");
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

// Benefits
const benefits = [
  {
    title: "benefit1",
    description: "benefit1des",
    icon: Award,
  },
  {
    title: "benefit2",
    description: "benefit2des",
    icon: Users,
  },
  {
    title: "benefit3",
    description: "benefit3des",
    icon: Monitor,
  },
];

// Screens
const screenTypes = [
  {
    type: "indoor",
    title: "شاشات داخلية",
    description:
      "شاشات LED عالية الجودة للاستخدام الداخلي بمواصفات (P2.5, P3, P4)، مثالية للمعارض، المولات، الاستديوهات، والمقاهي.",
    image: "/screen1.png",
    useCases: ["معارض", "مولات", "استديوهات", "مقاهي"],
  },
  {
    type: "outdoor",
    title: "شاشات خارجية",
    description:
      "شاشات LED متينة للاستخدام الخارجي بمواصفات (P4, P5)، مثالية لواجهات المباني واللوحات الإعلانية على الطرق.",
    image: "/buil.png",
    useCases: ["واجهات مباني", "لوحات طرق"],
  },
  {
    type: "flexible",
    title: "شاشات مرنة",
    description:
      "شاشات LED مرنة يمكن تشكيلها (أسطوانية أو منحنية)، مثالية للتصميمات المبتكرة في المعارض والأماكن التجارية.",
    image: "/screen3.png",
    useCases: ["تصميمات معارض", "أماكن تجارية"],
  },
];

const Business = () => {
  const t = useTranslations("Screens");
  const locale = useLocale();

  return (
    <main className="relative min-h-screen w-full padding">
      {/* Background Image */}
      <Image
        src="/screens-bg.jpg"
        alt="Translate Background"
        fill
        className="object-cover object-bottom z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95 z-10"></div>

      {/* Content */}
      <section className="relative z-20 w-full flex flex-col gap-10 animate-slideIn">
        {/* Text */}
        <div className="flex-1 flex flex-col items-start gap-8 w-full max-w-3xl">
          <h1 className="text-primary sm:text-4xl text-3xl font-bold">
            {t("title")}
          </h1>
          <p className="sm:text-xl text-lg text-brandblack leading-7 font-medium max-w-2xl">
            {t("des")}
          </p>

          <div className="flex gap-4">
            <a
              href="#screen"
              className="bg-primary hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full
                 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20 animate-slideIn"
            >
              {t("order")}
            </a>
            <ContactButton />
          </div>
        </div>

        {/* Screens Types */}
        <div className="mt-10">
          <h2 className="sm:text-3xl text-2xl font-bold text-primary text-center mb-8">
            {locale === "ar"
              ? "أنواع الشاشات المتوفرة"
              : "Available Screen Types"}
          </h2>
          <Tabs defaultValue="indoor" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              {screenTypes.map((screen) => (
                <TabsTrigger
                  key={screen.type}
                  value={screen.type}
                  className="font-semibold"
                >
                  {screen.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {screenTypes.map((screen) => (
              <TabsContent key={screen.type} value={screen.type}>
                <Card className="shadow-xs shadow-primary">
                  <CardContent className="px-6 py-2 flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <Image
                        src={screen.image}
                        alt={screen.title}
                        width={400}
                        height={300}
                        className="object-cover h-72 rounded-lg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <h3 className="text-lg font-semibold text-primary">
                        {screen.title}
                      </h3>
                      <p className="text-gray-800 text-lg font-medium">
                        {screen.description}
                      </p>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          {locale === "ar" ? "الاستخدامات:" : "Use Cases:"}
                        </h4>
                        <ul className="list-disc list-inside text-gray-800">
                          {screen.useCases.map((useCase, index) => (
                            <li key={index}>{useCase}</li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild className="self-start mt-4">
                        <a href="#screen">
                          {locale === "ar" ? "اطلب الآن" : "Order Now"}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Form */}
        <FormScreens />

        {/* Why Choose Us */}
        <div className="mt-10 bg-gray-50">
          <h2 className="sm:text-3xl text-2xl font-bold text-primary text-center mb-8">
            {locale === "ar" ? "لماذا تختارنا؟" : "Why Choose Us?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={t(benefit.title)}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-slideIn"
              >
                <benefit.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {t(benefit.title)}
                </h3>
                <p className="text-brandblack">{t(benefit.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Business;
