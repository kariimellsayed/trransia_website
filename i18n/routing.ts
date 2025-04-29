import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "ar",
  localeDetection: false,
  pathnames: {
    "/": {
      en: "/",
      ar: "/",
    },
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
    "/screens": {
      en: "/screens",
      ar: "/شاشات_لوحات",
    },
    "/gifts": {
      en: "/gifts",
      ar: "/هدايا_دعائية",
    },
    "/business": {
      en: "/business",
      ar: "/رجال_الأعمال",
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
