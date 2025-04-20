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

// Navigation
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import LanguageSwitcher from "./ui/LanguageSwitcher";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[0.5px] border-brandgray bg-white">
      <div className="mx-auto flex justify-between items-center padding-x py-3">
        {/* Logo */}
        <Link href="/home">
          <Image
            src="/nav-logo.svg"
            alt="logo"
            width={89}
            height={68}
            className="object-contain"
          />
        </Link>

        {/* Links Mobile Menu */}
        <div
          className={`fixed bottom-0 left-0 h-full w-full bg-white transform z-20 px-6 sm:px-10 py-12 flex flex-col ${
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
            href={"/landing"}
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
                      {t(link.key)}{" "}
                      <Image
                        src="/drop-icon.svg"
                        alt="services"
                        width={12}
                        height={6}
                      />
                    </span>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="center"
                    className="border-[0.5px] border-primary w-52"
                  >
                    {link.children.map((child) => (
                      <DropdownMenuItem asChild key={child.key}>
                        <Link
                          href={child.href}
                          className="text-lg font-medium text-brandblack"
                        >
                          {t(child.key)}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`text-lg font-normal transition-colors w-full flex justify-center px-7 py-3 rounded-xl
                  border-1 border-primary duration-200 hover:bg-primary hover:text-white ${
                    pathname === link.href &&
                    "bg-primary text-white font-medium"
                  }`}
                >
                  {t(link.key)}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-end justify-between py-4 border-b-2 border-brandgray mt-5">
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
              <NavigationMenu
                key={link.key}
                className="relative"
                dir={locale === "ar" ? "rtl" : "ltr"}
              >
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className="relative text-lg font-normal px-0 mx-0 flex items-center gap-2 transition-colors duration-200
                      data-[state=open]:!bg-transparent data-[state=open]:text-primary data-[state=open]:font-semibold hover:!bg-transparent"
                    >
                      {t(link.key)}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="p-4 bg-black rounded-xl min-w-[250px] absolute left-0 top-0 z-50">
                      <div className="flex flex-col gap-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.key}
                            href={child.href}
                            className={`block px-4 py-2 rounded-lg text-base w-full font-semibold transition-all duration-200 text-center
                            ${
                              pathname === child.href
                                ? "bg-primary text-white"
                                : "bg-white text-brandblack hover:bg-primary hover:text-white"
                            }`}
                          >
                            {t(child.key)}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <Link
                key={link.key}
                href={link.href}
                className={`text-lg font-normal transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary font-semibold" : ""
                }`}
              >
                {t(link.key)}
              </Link>
            )
          )}

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
