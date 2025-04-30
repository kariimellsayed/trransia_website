import { PhoneIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const ContactButton = () => {
  const t = useTranslations("Button");
  return (
    <a
      href="https://wa.me/966544214748"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-primary text-primary hover:bg-primary hover:text-white
      font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
    >
      {t("contact")}
      <PhoneIcon size={20} />
    </a>
  );
};

export default ContactButton;
