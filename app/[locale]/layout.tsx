import "./globals.css";
import "react-phone-input-2/lib/style.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Tajawal, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { getTranslations } from "next-intl/server";
import WhatsAppButton from "./_components/ui/WhatsAppButton";
import SocialMediaButtons from "./_components/ui/SocialMediaButtons";

// Fonts
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  // preload: true,
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  // preload: true,
});

// Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(["en", "ar"], locale)) notFound();

  const t = await getTranslations({ locale, namespace: "SEO" });

  return {
    title: t("title"),
    description: t("description"),
    keywords:
      "ترجمة معتمدة, دعاية وإعلان, تقنية معلومات, تسويق إلكتروني, خدمات رجال الأعمال, طباعة مخططات, هدايا دعائية, Certified Translation, Advertising, IT Services, Digital Marketing, Business Services, Printing, Promotional Gifts",
    authors: [{ name: "Transia Team" }],
    robots: "index, follow",
    icons: {
      icon: "/favicon.ico", //Website icon
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png", //Apple icon
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://transia.com.sa",
      siteName: "Transia",
      images: ["/assets/og-image.png"],
      locale,
      type: "website",
    },
    metadataBase: new URL("https://transia.com.sa"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabic = locale === "ar";
  const direction = isArabic ? "rtl" : "ltr";
  const fontClass = isArabic ? tajawal.className : inter.className;
  inter;

  return (
    <html lang={locale} className={fontClass} dir={direction}>
      <body>
        <NextIntlClientProvider>
          {children}
          <WhatsAppButton />
          <SocialMediaButtons />
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
