"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { ValidPathnames } from "@/types/types";

interface DropdownLink {
  key: string;
  href: ValidPathnames; // بدل string
}

interface CustomDropdownMenuProps {
  label: string;
  links?: DropdownLink[];
}

const CustomDropdownMenu = ({ label, links }: CustomDropdownMenuProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navbar");

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* الزر */}
      <button
        onClick={() => setOpen(!open)}
        className={`relative text-lg font-normal flex items-center gap-1 px-0 mx-0 transition-colors duration-200
          hover:text-primary ${open && "text-primary"}`}
      >
        {t(label)}
        <ChevronDown className="w-6 h-4" />
      </button>

      {/* Dropdown القائمة */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="absolute top-full left-1/2 -translate-x-1/2 z-50 mt-3 min-w-[230px] flex flex-col gap-2"
          >
            {/* العناصر */}
            <div className="bg-transparent flex flex-col gap-2">
              {links?.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg text-base font-semibold w-full transition-all duration-200 text-center
                  shadow-2xl
                    ${
                      pathname === link.href
                        ? "bg-gray-600 text-white font-semibold"
                        : "bg-gray-400 text-white hover:bg-gray-600 hover:text-white"
                    }`}
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdownMenu;
