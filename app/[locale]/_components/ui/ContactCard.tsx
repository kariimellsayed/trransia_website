import { useTranslations } from "next-intl";
import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactCard = () => {
  const t = useTranslations("Contact.contact-form");

  return (
    <div className="w-full rounded-2xl bg-white shadow-2xl p-10">
      <div className="flex justify-between md:flex-row flex-col items-center gap-10">
        {/* Contact information */}
        <div className="flex flex-col items-start gap-6 w-full">
          <Image
            src="/contact.png"
            alt="Contact Image"
            width={280}
            height={280}
            className="object-contain"
          />

          <div className="flex flex-col items-start gap-8 text-brandblack text-base leading-relaxed">
            {/* وصف عام */}
            <p>{t("des")}</p>

            {/* معلومات الدفع */}
            <div className="space-y-2">
              <h3 className="font-bold">{t("payment-title")}:</h3>
              <p>{t("payment-des")}</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="text-primary">{t("account-number")}:</span>{" "}
                  <span className="font-semibold">68205008787000</span>
                </li>
                <li>
                  <span className="text-primary">{t("ipan")}:</span>{" "}
                  <span className="font-semibold">
                    SA7405000068205008787000
                  </span>
                </li>
              </ul>
              <p>{t("offer")}</p>
            </div>

            {/* أوقات العمل */}
            <div className="w-full">
              <h2 className="text-primary text-2xl font-bold mb-3">
                {t("working")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="text-primary font-semibold">
                    {t("saturday")}:
                  </span>{" "}
                  <span className="font-semibold">{t("hours")}</span>
                </li>
                <li>
                  <span className="text-primary font-semibold">
                    {t("friday")}:
                  </span>{" "}
                  <span className="font-semibold">{t("friday-des")}</span>
                </li>
                <li>
                  <span className="text-primary font-semibold">
                    {t("phone")}:
                  </span>{" "}
                  <span className="font-semibold">0544214748 – 0508926162</span>
                </li>
              </ul>
              <p className="mt-2">{t("wats")}</p>
            </div>
          </div>
        </div>
        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactCard;
