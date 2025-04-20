// Dropdown
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
// Flags
import ksaFlag from "@/public/ksa.svg";
import britishFlag from "@/public/british.svg";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div>
      <DropdownMenu dir={locale === "ar" ? "rtl" : "ltr"}>
        <DropdownMenuTrigger asChild>
          <span
            className="flex items-center gap-2 cursor-pointer text-lg font-normal hover:text-primary
           focus:outline-none"
          >
            <Image
              src={locale === "ar" ? ksaFlag : britishFlag}
              alt="flag"
              width={20}
              height={15}
            />
            {locale === "ar" ? "العربية" : "English"}
            <Image src="/drop-icon.svg" alt="services" width={12} height={6} />
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="center"
          className="p-4 bg-black min-w-[150px] rounded-xl flex flex-col gap-2"
        >
          <DropdownMenuItem asChild>
            <Link
              href={pathname}
              locale="ar"
              className={`flex items-center gap-2 font-semibold ${
                locale === "ar"
                  ? "bg-primary text-white"
                  : "bg-white  text-brandblack"
              }`}
            >
              <Image src={ksaFlag} alt="ksa" width={20} height={15} />
              العربية
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href={pathname}
              locale="en"
              className={`flex items-center gap-2 font-semibold ${
                locale === "en"
                  ? "bg-primary text-white"
                  : "bg-white text-brandblack"
              }`}
            >
              <Image src={britishFlag} alt="british" width={20} height={15} />
              English
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
