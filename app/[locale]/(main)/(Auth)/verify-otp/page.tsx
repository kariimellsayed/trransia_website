"use client";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Otp = () => {
  const t = useTranslations("Otp");
  const locale = useLocale();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center padding">
      <div className="w-full max-w-xl">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <Image
            src={"/auth-logo.svg"}
            alt="Transia Logo"
            width={180}
            height={164}
            className="object-cover h-auto"
          />
        </div>

        <h2 className="sm:text-4xl text-2xl text-brandblack font-semibold mt-14 text-center">
          {t("title")}
        </h2>

        <p className="text-brandblack font-normal text-2xl text-center mt-10">
          {t("des")}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-6 animate-fadeInUp"
        >
          {/* Otp */}
          <div className="flex items-center justify-center">
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              className="flex gap-2"
              dir="ltr"
            >
              <InputOTPGroup className="flex gap-2" dir="ltr">
                {[...Array(6)].map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="w-14 h-14 rounded-2xl border-2 border-brandgray text-2xl font-bold text-center text-brandblack focus:outline-none focus:border-brandred transition-all"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-brandred rounded-4xl transition-all duration-200 hover:bg-red-700
            py-2 text-white font-normal text-xl text-center mt-5"
          >
            {t("sure")}
          </button>
          <button
            className="text-xl txet-brandblack font-normal mt-5 w-full flex items-center justify-center text-center bg-none
            transition-all duration-200 hover:text-primary cursor-pointer"
          >
            {t("reset")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
