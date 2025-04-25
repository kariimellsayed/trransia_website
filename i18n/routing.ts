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
    "/ads": {
      en: "/ads",
      ar: "/الدعايا_و_الاعلان",
    },
    "/marketing": {
      en: "/marketing",
      ar: "/تسويق_الكتروني",
    },
    "/tech": {
      en: "/tech",
      ar: "/تقنية_المعلومات",
    },
    "/student": {
      en: "/student",
      ar: "/خدمة_طالب",
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
