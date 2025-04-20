import { useTranslations } from "next-intl";
import React from "react";

const ContactForm = () => {
  const t = useTranslations("Contact.contact-form");

  return (
    <div className="flex flex-col md:items-end items-center w-full gap-10">
      <div className="w-full max-w-md">
        <h1 className="md:text-right text-center head-color text-3xl font-bold">
          {t("contact-us")}
        </h1>
      </div>

      <form className="flex flex-col w-full gap-10 max-w-md">
        <input
          type="text"
          placeholder={t("name")}
          className="bg-gray-100 p-3 rounded-2xl"
        />
        <input
          type="text"
          placeholder={t("phone-num")}
          className="bg-gray-100 p-3 rounded-2xl"
        />
        <input
          type="email"
          placeholder={t("email")}
          className="bg-gray-100 p-3 rounded-2xl"
        />
        <textarea
          rows={5}
          placeholder={t("message")}
          className="bg-gray-100 p-3 rounded-2xl resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-white font-bold py-3 px-6 rounded-full transition-all duration-200
         hover:bg-red-600 cursor-pointer"
        >
          {t("send")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
