"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import React from "react";

const Account = () => {
  const t = useTranslations("Account");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <DropdownMenu dir={locale === "ar" ? "rtl" : "ltr"}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 text-lg font-normal hover:text-primary transition-colors">
          {t("name")}
          <ChevronDown size={16} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="border-[0.5px] border-primary w-48 bg-white p-2 space-y-1">
        <DropdownMenuItem asChild>
          <Link
            href="/login"
            className={`block px-4 py-2 text-sm hover:bg-primary font-semibold  rounded-md
              ${"/login" === pathname ? "text-primary" : "text-brandblack"}`}
          >
            {t("login")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/register"
            className={`block px-4 py-2 text-sm hover:bg-primary font-semibold  rounded-md
              ${"/register" === pathname ? "text-primary" : "text-brandblack"}`}
          >
            {t("register")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/forgot-password"
            className={`block px-4 py-2 text-sm hover:bg-primary font-semibold  rounded-md
              ${
                "/forgot-password" === pathname
                  ? "text-primary"
                  : "text-brandblack"
              }`}
          >
            {t("forgot")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Account;
