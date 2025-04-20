import Image from "next/image";
import React from "react";
import footLogo from "@/public/foot-logo.svg";
import vision2030 from "@/public/2030.svg";
import telIcon from "@/public/foot-tel.svg";
import emailIcon from "@/public/foot-email.svg";
import locationIcon from "@/public/foot-location.svg";
import { useTranslations } from "next-intl";
import { Link } from "lucide-react";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="w-full bg-brandlightgray relative overflow-hidden">
      <div className="mx-auto padding-x sm:py-20 py-6">
        {/* Logos Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 mb-10 text-center sm:text-start">
          <Image src={footLogo} alt="Transia Logo" width={190} height={146} />
          <Image src={vision2030} alt="Vision 2030" width={120} height={92} />
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Description */}
          <div className="space-y-6 text-brandblack lg:col-span-2">
            <p>{t("Footer.des")}</p>
            <p className="font-semibold">
              {t("Footer.acount")} :
              <span className="font-normal"> 68205008787000</span>
            </p>
            <p className="font-semibold">
              {t("Footer.ipan")} :
              <span className="font-normal"> SA74050000068205008787000</span>
            </p>
            <p>{t("Footer.offer")}</p>
          </div>

          {/* Worktime */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg inline-block relative after:content-[''] after:block after:w-[56px] after:h-[3px] after:bg-red-500 after:mt-1">
              {t("Footer.worktime.title")}
            </h3>
            <p className="text-base text-brandblack">
              {t("Footer.worktime.date")}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg inline-block relative after:content-[''] after:block after:w-[56px] after:h-[3px] after:bg-red-500 after:mt-1">
              {t("Footer.contact.title")}
            </h3>

            <div className="flex items-center gap-2">
              <Image src={telIcon} alt="Phone" width={16} height={16} />
              <a
                href="https://wa.me/966544214748"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-normal"
              >
                00966544214748
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Image src={emailIcon} alt="Email" width={16} height={16} />
              <a
                href="mailto:Info@transia.com.sa"
                className="text-base font-normal"
              >
                Info@transia.com.sa
              </a>
            </div>

            <div className="flex items-start gap-2">
              <Image src={locationIcon} alt="Location" width={16} height={16} />
              <p className="text-base font-normal">{t("Footer.contact.loc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Art Circles */}
      <Image
        src="/foot-art.svg"
        alt="Transia Foot Art"
        width={180}
        height={180}
        className="absolute top-0 left-0 sm:-top-5 sm:-left-10 w-28 h-28 sm:w-40 sm:h-40 object-cover opacity-50 z-0"
      />
      <Image
        src="/foot-circles.svg"
        alt="Transia Foot Circles"
        width={180}
        height={180}
        className="absolute -bottom-10 -right-16 sm:-bottom-10 sm:-right-24 w-28 h-28 sm:w-44 sm:h-44 object-cover z-0"
      />
    </footer>
  );
};

export default Footer;
