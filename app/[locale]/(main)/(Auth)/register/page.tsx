"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import RegisterWithEmail from "./RegisterWithEmail";
import RegisterWithPhone from "./RegisterWithPhone";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const RegisterPage = () => {
  const t = useTranslations("Taps.reg");
  const locale = useLocale();

  return (
    <div className="min-h-screen flex items-center justify-center padding">
      <div className="w-full max-w-4xl">
        <Tabs
          defaultValue="phone"
          className="w-full"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="email"
              className="flex justify-center items-center gap-2 font-semibold"
            >
              <Image
                src={"/email-tap.svg"}
                alt="Email Register"
                width={18}
                height={18}
              />
              <h3 className="md:text-base sm:text-[10px] text-[7px] text-brandblack">
                {t("email")}
              </h3>
            </TabsTrigger>
            <TabsTrigger
              value="phone"
              className="flex justify-center items-center gap-2 font-semibold"
            >
              <Image
                src={"/mobile-tap.svg"}
                alt="Email Register"
                width={18}
                height={18}
              />
              <h3 className="md:text-base sm:text-[10px] text-[7px] text-brandblack">
                {t("phone")}
              </h3>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email">
            <RegisterWithEmail />
          </TabsContent>

          <TabsContent value="phone">
            <RegisterWithPhone />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RegisterPage;
