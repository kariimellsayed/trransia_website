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
    "/electronic": {
      en: "/electronic",
      ar: "/خدمات_الكترونية",
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
    "/register": {
      en: "/register",
      ar: "/تسجيل",
    },
    "/login": {
      en: "/login",
      ar: "/تسجيل_الدخول",
    },
    "/forgot-password": {
      en: "/forgot-password",
      ar: "/نسيت_كلمة_المرور",
    },
    "/verify-otp": {
      en: "/verify-otp",
      ar: "/التحقق",
    },
  },
});
