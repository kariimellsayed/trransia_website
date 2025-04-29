"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks } from "@/data";

// Dropdown
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import LanguageSwitcher from "./ui/LanguageSwitcher";
import CustomDropdownMenu from "./ui/CustomDropdown";
import Account from "./ui/Account";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[0.5px] border-brandgray shadow-xl shadow-red-50 bg-white">
      <div className="mx-auto flex justify-between items-center padding-x py-2">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/nav-logo.svg"
            alt="logo"
            width={89}
            height={68}
            className="object-contain  sm:w-[89px] sm:h-[68px] w-[70px] h-[58px]"
          />
        </Link>

        {/* Links Mobile Menu */}
        <div
          className={`fixed bottom-0 left-0 h-full w-full bg-white transform z-50 px-6 sm:px-10 py-12 flex flex-col ${
            menuOpen ? "translate-y-0" : "translate-y-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <button
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/close-nav.svg" alt="Close" width={30} height={30} />
          </button>

          <Link
            href={"/home"}
            className="absolute top-5 left-5 flex items-center justify-start gap-2"
          >
            <Image
              src={"/nav-logo.svg"}
              alt="Transia Logo"
              width={40}
              height={40}
            />

            <h3 className="text-lg text-brandblack font-semibold">
              {t("mobiletitle")}
            </h3>
          </Link>

          <nav className="flex flex-col mt-20 items-center gap-7">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu
                  key={link.key}
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <DropdownMenuTrigger asChild>
                    <span
                      className="flex items-center gap-1 text-lg font-normal cursor-pointer hover:bg-primary hover:text-white border-1
                       border-primary focus:outline-none focus:ring-0 focus-visible:ring-0 w-full justify-center px-7 py-3 rounded-xl duration-200"
                    >
                      {t(link.key)}
                      <ChevronDown size={16} />
                    </span>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="center"
                    className="border-[0.5px] border-primary w-52 bg-gray-400 p-4 flex flex-col items-center space-y-1"
                  >
                    {link.children?.map((child) => (
                      <DropdownMenuItem
                        asChild
                        key={child.key}
                        className="space-y-3 w-full"
                      >
                        <Link
                          onClick={() => setMenuOpen(false)}
                          href={child.href}
                          className={`text-lg font-semibold  w-full flex justify-center items-cente mx-auto p-2
                          rounded-xl ${
                            pathname === child.href
                              ? "bg-primary text-white"
                              : "bg-white text-brandblack"
                          }`}
                        >
                          {t(child.key)}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : link.href ? ( // تأكد إن href موجود
                <Link
                  key={link.key}
                  href={link.href}
                  className={`text-lg font-normal transition-colors w-full flex justify-center px-7 py-3 rounded-xl
                    border-1 border-primary duration-200 hover:bg-primary hover:text-white ${
                      pathname === link.href &&
                      "bg-primary text-white font-semibold"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(link.key)}
                </Link>
              ) : null
            )}
          </nav>

          <div className="flex items-end justify-between py-4 border-b-2 border-brandgray mt-10">
            {/* Profile */}
            <h3 className="text-black font-semibold">kariimellsayed</h3>
            {/* Languache */}
            <LanguageSwitcher />
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex gap-7 items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <CustomDropdownMenu
                key={link.key}
                label={link.key}
                links={link.children}
              />
            ) : link.href ? ( // تأكد إن href موجود
              <Link
                key={link.key}
                href={link.href}
                className={`text-lg font-normal transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary font-semibold border-b-[0.5px] border-primary"
                    : "text-brandblack"
                }`}
              >
                {t(link.key)}
              </Link>
            ) : null
          )}

          {/* Accont */}
          <Account />

          {/* Language */}
          <LanguageSwitcher />
        </nav>

        {/* Menu Icon*/}
        <div className="block lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="cursor-pointer"
          >
            <Image src="/menu-nav.svg" alt="menu" width={30} height={30} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
