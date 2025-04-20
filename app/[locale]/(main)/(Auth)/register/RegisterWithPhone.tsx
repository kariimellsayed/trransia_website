"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";

const RegisterWithPhone = () => {
  const t = useTranslations("RegisterWithPhone");
  const locale = useLocale();

  const [phone, setPhone] = useState<string>(""); // رقم التليفون
  const [password, setPassword] = useState<string>(""); // كلمة المرور
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // هنا هتبعت البيانات للـ backend
    const dataToSend = {
      phone, // الرقم بيكون جاهز بصيغة دولية
      password,
    };

    console.log("Form Data:", dataToSend);

    // تقدر تبعتهم بالـ fetch أو axios
  };

  return (
    <div className="min-h-screen flex items-center justify-center padding">
      <div className="w-full max-w-xl">
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

        <form onSubmit={handleSubmit} className="mt-14 space-y-6">
          {/* رقم الموبايل */}
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
              inputClass="!w-full !rounded-xl !border !border-brandgray !py-2 !pl-14 !text-sm !text-brandblack
              !focus:outline-none !focus:border-brandred"
              containerClass="!w-full !relative"
              buttonClass="!absolute !left-3 !top-1/2 !-translate-y-1/2 !bg-transparent !border-none !p-0 !m-0"
              placeholder={t("place2")}
            />
          </div>

          {/* كلمة المرور */}
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
                placeholder={t("place3")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute top-1/2 ${
                  locale === "ar" ? "left-3" : "right-3"
                } transform -translate-y-1/2 cursor-pointer text-zinc-500`}
              >
                <span className="text-base text-brandgray font-normal">
                  {showPassword ? t("eye2") : t("eye1")}
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-brandred rounded-4xl transition-all duration-200 hover:bg-red-700 py-2 text-white font-normal text-xl text-center"
          >
            {t("create")}
          </button>
        </form>

        <p className="text-base text-brandblack text-center mt-10">
          {t("log")}{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            {t("link")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterWithPhone;
