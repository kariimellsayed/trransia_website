import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { NextIntlClientProvider } from "next-intl";

export default function WithNavFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider>
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
