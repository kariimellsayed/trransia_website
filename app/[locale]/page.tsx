"use client";

import { services } from "@/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Teaser = () => {
  const t = useTranslations();

  return (
    <section className="w-full min-h-screen bg-white padding">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center md:w-1/3"
        >
          <Image
            src={"/teaser-logo.svg"}
            alt="Transia Business Logo"
            width={300}
            height={300}
            className="object-contain md:w-64 md:h-64 w-48 h-48"
          />
        </motion.div>

        {/* Texts */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-start gap-6 md:w-2/3"
        >
          <h1 className="text-xl md:text-2xl text-gray-900 font-normal leading-relaxed te">
            {t("Welcome.des")}
          </h1>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-end"
          >
            <Link
              href={"/home"}
              className="text-white text-center px-10 py-3 font-semibold bg-gradient-to-r from-primary
               to-black rounded-xl hover:from-black hover:to-primary transition-all duration-300 self-end"
            >
              {t("Welcome.more")}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Sale Box Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 flex justify-center"
      >
        <Link
          href="/register"
          className="w-full max-w-2xl flex items-center flex-col md:flex-row justify-between gap-4 py-2 px-6 bg-white rounded-2xl
           shadow-lg shadow-primary hover:scale-90 transition-all duration-300 border border-gray-200"
        >
          {/* Logo & Percentage */}
          <div className="flex items-center">
            <Image
              src="/teaser-logo.svg"
              alt="Transia Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/50.png"
              alt="50% Discount"
              width={200}
              height={200}
              className="object-contain sm:w-36 sm:h-36 w-28 h-28"
            />
          </div>

          {/* Offer Texts */}
          <div className="flex flex-col md:items-end items-center gap-1">
            <p className="text-sm text-gray-600">{t("Welcome.offer")}</p>
            <p className="text-base font-semibold">{t("Welcome.descount")}</p>
            <p className="text-lg font-bold text-primary">{t("Welcome.reg")}</p>
          </div>
        </Link>
      </motion.div>

      {/* Services */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-20"
      >
        {services.map((service, index) => {
          const spanClass =
            index === 0 || index === 5 || index === 6
              ? "md:col-span-2"
              : "md:col-span-1";

          return (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className={`bg-white border-[0.5px] border-red-300 shadow-2xl rounded-4xl p-4 flex flex-col items-center
                     justify-center duration-200 hover:scale-105 z-10 ${spanClass}`}
            >
              <Image
                src={service.img}
                alt={t(`Services.${service.key}`)}
                width={150}
                height={150}
                className="mb-4 object-contain"
              />
              <h4 className="text-brandblack text-center text-lg font-semibold">
                {t(`Services.${service.key}`)}
              </h4>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Teaser;
