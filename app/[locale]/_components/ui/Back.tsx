import { Link } from "@/i18n/navigation";
import { ArrowBigLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const Back = () => {
  const t = useTranslations("Back");
  return (
    <Link
      href={"/"}
      className="text-2xl text-brandblack font-semibold transition-all duration-200 hover:text-primary
      flex items-center gap-2"
    >
      <ArrowBigLeft scale={16} />
      {t("back")}
    </Link>
  );
};

export default Back;
