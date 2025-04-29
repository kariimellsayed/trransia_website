"use client";

import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { availableLanguages } from "@/data";
import { useLocale } from "next-intl";

export function LanguageSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string | null;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const locale = useLocale();

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 font-semibold mb-1">
        {label}
        <Languages className="w-4 h-4 text-brandred" />
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full rounded-lg transition-all duration-200 hover:shadow-sm
              hover:shadow-primary"
          >
            {value ? value : "اختر اللغة"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="ابحث عن لغة..." className="h-9" />
            <CommandList>
              <CommandEmpty>لا توجد لغة مطابقة.</CommandEmpty>
              <CommandGroup>
                {availableLanguages.map((lang) => {
                  const label = locale === "ar" ? lang.ar : lang.en;
                  return (
                    <CommandItem
                      key={label}
                      value={label}
                      className="text-base font-semibold"
                      onSelect={() => {
                        onChange(label);
                        setOpen(false);
                      }}
                    >
                      {label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
