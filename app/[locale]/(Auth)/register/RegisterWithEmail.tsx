"use client";

import { useState } from "react";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const RegisterPage = () => {
  const t = useTranslations("RegisterWithEmail");
  const locale = useLocale();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // Register With Email Logic.......
    setIsLoading(true);
    setError("");
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

        <form
          onSubmit={handleRegister}
          className="mt-14 space-y-6 animate-fadeInUp"
        >
          <div className="flex justify-start flex-col space-y-2">
            <label
              htmlFor="user"
              className="text-base text-brandblack font-semibold"
            >
              {t("user")}
            </label>
            <input
              type="text"
              id="user"
              className="w-full rounded-xl border-1 border-brandgray px-4 py-2 text-brandgray text-sm font-normal"
              placeholder={t("place1")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex justify-start flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-base text-brandblack font-semibold"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              className="rounded-xl w-full border-2 border-brandgray px-4 py-2 text-brandgray text-sm font-normal"
              placeholder={t("place2")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full cursor-pointer bg-brandred rounded-4xl transition-all duration-200 hover:bg-red-700
            py-2 text-white font-normal text-xl text-center"
          >
            {isLoading ? t("loading") : t("create")}
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

export default RegisterPage;
