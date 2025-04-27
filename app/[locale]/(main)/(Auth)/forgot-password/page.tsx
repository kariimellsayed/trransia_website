"use client";

import { useRouter } from "@/i18n/navigation"; // استخدم useRouter من i18n/navigation
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const Forgot = () => {
  const t = useTranslations("Forgot");
  const router = useRouter(); // هنا
  const [data, setData] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (data.trim() !== "") {
      // هنا بتعمل التنقل
      router.push("/verify-otp");
    }
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

        <h2 className="sm:text-3xl text-2xl text-brandblack font-semibold mt-14 text-center">
          {t("title")}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-6 animate-fadeInUp"
        >
          <div className="flex justify-start flex-col space-y-3">
            <label
              htmlFor="label"
              className="text-base text-brandblack font-semibold"
            >
              {t("label")}
            </label>
            <input
              type="text"
              id="label"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="rounded-xl w-full border-2 border-brandgray px-4 py-2 text-brandgray text-sm font-normal"
              required
            />
          </div>

          {/* الزرار العادي */}
          <button
            type="submit"
            disabled={data.trim() === ""}
            className={`w-full rounded-4xl transition-all duration-200 py-2 text-white font-normal text-xl text-center
              ${
                data.trim() === ""
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-brandred hover:bg-red-700 cursor-pointer"
              }`}
          >
            {t("cont")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
