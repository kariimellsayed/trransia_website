"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { Link } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import Back from "../../_components/ui/Back";
import axiosInstance from "@/Utils/axiosPublic";
import { toast } from "sonner";

const RegisterWithPhone = () => {
  const t = useTranslations("RegisterWithPhone");
  const locale = useLocale();

  const [phoneNumber, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken-transia");
    const role = localStorage.getItem("role");

    if (refreshToken && role) {
      if (role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = {
      phoneNumber,
      password,
    };

    axiosInstance
      .post("/auth/register", dataToSend)
      .then((res) => {
        const data = res.data;

        localStorage.setItem("role", data.role);
        localStorage.setItem("refreshToken-transia", data.refreshToken);
        localStorage.setItem("accessToken-transia", data.accessToken);

        toast.success("تم التسجيل بنجاح 🎉");

        if (data.role === "admin") {
          router.push("/dashboard");
        } else {
          router.push("/");
        }
      })
      .catch((err) => {
        console.error("Registration Error:", err);
        toast.error("فشل التسجيل، حاول تاني 🙏");
      })
      .finally(() => {
        setLoading(false);
      });
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

        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-6 animate-fadeInUp"
        >
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
              value={phoneNumber}
              onChange={(phoneNumber) => setPhone(phoneNumber)}
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
            className="w-full cursor-pointer bg-brandred rounded-4xl transition-all duration-200
             hover:bg-red-700 py-2 text-white font-normal text-xl text-center"
          >
            {loading ? t("loading") : t("create")}
          </button>
        </form>

        {/* <p className="text-base text-brandblack text-center mt-10">
          {t("log")}{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            {t("link")}
          </Link>
        </p> */}
      </div>

      {/* Back */}
      <Back />
    </div>
  );
};

export default RegisterWithPhone;
