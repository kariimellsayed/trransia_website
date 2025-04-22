import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "ar",
  localeDetection: false,
  pathnames: {
    "/home": {
      en: "/home",
      ar: "/الرئيسية",
    },
    "/about": {
      en: "/about",
      ar: "/عنا",
    },
    "/contact": {
      en: "/contact",
      ar: "/تواصل_معنا",
    },
    // إضافة الروابط الجديدة
    "/translate": {
      en: "/translate",
      ar: "/الترجمة_المعتمدة",
    },
    "/service2": {
      en: "/service2",
      ar: "/خدمة2",
    },
    "/service3": {
      en: "/service3",
      ar: "/خدمة3",
    },
    "/service4": {
      en: "/service4",
      ar: "/خدمة4",
    },
    "/service5": {
      en: "/service5",
      ar: "/خدمة5",
    },
    "/service6": {
      en: "/service6",
      ar: "/خدمة6",
    },
    "/service7": {
      en: "/service7",
      ar: "/خدمة7",
    },
    "/service8": {
      en: "/service8",
      ar: "/خدمة8",
    },
    "/service9": {
      en: "/service9",
      ar: "/خدمة9",
    },
  },
});
