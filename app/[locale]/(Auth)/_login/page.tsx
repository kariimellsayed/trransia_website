"use client";

import { useState } from "react";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "@/i18n/navigation";
import Back from "../../_components/ui/Back";

const LoginWithPhone = () => {
  const t = useTranslations("LoginWithPhone");
  const locale = useLocale();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center padding relative">
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

        <form
          onSubmit={handleRegister}
          className="mt-14 space-y-6 animate-fadeInUp"
        >
          <div className="flex justify-start flex-col space-y-2">
            <label
              htmlFor="phone"
              className="text-base text-brandblack font-semibold"
            >
              {t("phone")}
            </label>
            <PhoneInput
              country={"sa"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass="!w-full !rounded-xl !border !border-brandgray !py-2 !pl-20 !text-sm !text-brandblack
              !focus:outline-none !focus:border-brandred !placeholder-black-300"
              containerClass="!w-full !relative"
              buttonClass="!absolute !left-4 !top-1/2 !-translate-y-1/2 !bg-transparent !border-none !p-0 !m-0"
              dropdownClass="!rounded-xl !mt-2 !left-1/2"
              inputProps={{
                placeholder: t("place2"),
                name: "phone",
                required: true,
              }}
            />
          </div>

          <div className="flex justify-start flex-col space-y-2">
            <label
              htmlFor="pass"
              className="text-base text-brandblack font-semibold"
            >
              {t("pass")}
            </label>
            <div className="relative">
              <input
                id="pass"
                className="rounded-xl w-full border-2 border-brandgray px-4 py-2 text-brandgray text-sm font-normal"
                type={showPassword ? "text" : "password"}
                placeholder={t("place2")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute top-1/2 ${
                  locale === "ar" ? "left-3" : "right-3"
                } transform -translate-y-1/2 cursor-pointer text-zinc-500`}
              >
                {showPassword ? (
                  <span className="text-base text-brandgray font-normal">
                    {t("eye2")}
                  </span>
                ) : (
                  <span className="text-base text-brandgray font-normal">
                    {t("eye1")}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" />
              <span className="text-brandblack font-medium">{t("rem")}</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-blue-600 hover:underline font-medium"
            >
              {t("forgot")}
            </Link>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full cursor-pointer bg-brandred rounded-4xl transition-all duration-200 hover:bg-red-700
            py-2 text-white font-normal text-xl text-center"
          >
            {isLoading ? t("loading") : t("inter")}
          </button>
        </form>

        <p className="text-base text-brandblack text-center mt-10">
          {t("sign")}{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            {t("link")}
          </Link>
        </p>
      </div>

      {/* Back */}
      <Back />
    </div>
  );
};

export default LoginWithPhone;
