"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP_NUMBER = "966544214748";
const DEFAULT_MESSAGE = "مرحبًا، أحتاج مساعدة من خدمة العملاء";

export default function WhatsAppButton() {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      DEFAULT_MESSAGE
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
    >
      <button
        onClick={handleClick}
        className="p-4 cursor-pointer bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200"
      >
        <Image
          src={"/whatsapp.svg"}
          alt="Customer Services Transia Technology Business"
          width={35}
          height={35}
        />
      </button>
    </motion.div>
  );
}
