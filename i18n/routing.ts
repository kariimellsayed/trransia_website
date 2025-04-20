import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "ar",
  localeDetection: false, // لتعطيل الاكتشاف التلقائي بناءً على المتصفح
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
  },
});
