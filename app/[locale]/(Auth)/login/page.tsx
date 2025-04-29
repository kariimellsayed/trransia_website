"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import LoginWithEmail from "./LoginWithEmail";
import LoginWithPhone from "./LoginWithPhone";
import Back from "../../_components/ui/Back";

const RegisterPage = () => {
  const t = useTranslations("Taps.log");
  const locale = useLocale();

  return (
    <div className="min-h-screen flex items-center justify-center padding relative">
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
            <LoginWithEmail />
          </TabsContent>

          <TabsContent value="phone">
            <LoginWithPhone />
          </TabsContent>
        </Tabs>
      </div>

      {/* Back */}
      <div
        className={`absolute top-5 ${locale === "ar" ? "right-5" : "left-5"}`}
      >
        <Back />
      </div>
    </div>
  );
};

export default RegisterPage;
