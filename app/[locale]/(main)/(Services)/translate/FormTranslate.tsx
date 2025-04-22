"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { availableLanguages } from "@/data";
import { Languages, FileText, StickyNote, X } from "lucide-react";
import { useLocale } from "next-intl";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "201064689587"; // 👈🏻 غيّر الرقم هنا لرقم خدمة العملاء

const FormTranslate = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sourceLang, setSourceLang] = useState<string | null>(null);
  const [targetLang, setTargetLang] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>("");
  const locale = useLocale();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleSourceLangChange = (value: string) => {
    setSourceLang(value);
    if (targetLang === value) setTargetLang(null);
  };

  const filteredTargetLanguages = availableLanguages.filter(
    (lang) => lang !== sourceLang
  );

  const handleSubmit = () => {
    if (!sourceLang || !targetLang) {
      toast.error("من فضلك اختر اللغات المطلوبة.");
      return;
    }

    if (!selectedFile) {
      toast.error("الرجاء إرفاق ملف للترجمة.");
      return;
    }

    const now = new Date().toLocaleString("ar-SA", {
      timeZone: "Asia/Riyadh", // ✅ توقيت السعودية
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    const message = `📬 *طلب ترجمة جديد*
  
  🕒 *التاريخ والوقت:* ${now}
  
  🌐 *من اللغة:* ${sourceLang}
  🌐 *إلى اللغة:* ${targetLang}
  📝 *ملاحظات العميل:*
  ${notes.trim() !== "" ? `- ${notes}` : "- لا توجد ملاحظات"}
  
  📁 *الملف تم إرفاقه بواسطة العميل وسيتم إرساله لكم عند التأكيد.*
  
  📞 برجاء مراجعة البيانات والتواصل مع العميل في أقرب وقت ممكن.
  
  🔒 *جميع البيانات سرية وتحتفظ بها إدارة المنصة فقط.*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
    toast.success("تم تجهيز الرسالة بنجاح! سيتم فتح واتساب الآن.");
  };

  return (
    <div
      className="relative bg-white/90 backdrop-blur-md border p-8 rounded-xl shadow-xl shadow-primary/30 w-full max-w-4xl
      mx-auto mt-10 animate-slideIn"
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* اللغة المصدر */}
        <div className="animate-slideIn delay-100">
          <label className="flex items-center gap-2 font-semibold mb-1">
            من
            <Languages className="w-4 h-4 text-brandred" />
          </label>
          <Select
            onValueChange={handleSourceLangChange}
            value={sourceLang || ""}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <SelectTrigger className="w-full rounded-lg">
              <SelectValue placeholder="اختر اللغة" />
            </SelectTrigger>
            <SelectContent>
              {availableLanguages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* اللغة الهدف */}
        <div className="animate-slideIn delay-200">
          <label className="flex items-center gap-2 font-semibold mb-1">
            إلى
            <Languages className="w-4 h-4 text-brandred" />
          </label>
          <Select
            onValueChange={(value) => setTargetLang(value)}
            value={targetLang || ""}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <SelectTrigger className="w-full rounded-lg">
              <SelectValue placeholder="اختر اللغة" />
            </SelectTrigger>
            <SelectContent>
              {filteredTargetLanguages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* رفع ملف */}
        <div className="animate-slideIn delay-300">
          <label className="flex items-center gap-2 font-semibold mb-1">
            رفع ملف
            <FileText className="w-4 h-4 text-brandred" />
          </label>
          <div className="relative">
            {selectedFile ? (
              <div className="w-full px-4 py-2 bg-gray-100 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brandred" />
                  <span>{selectedFile.name}</span>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="text-brandred"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <Input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.txt"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
                <div className="w-full px-4 py-2 bg-gray-100 rounded-lg flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brandred" />
                  اختر ملف
                </div>
              </>
            )}
          </div>
        </div>

        {/* ملاحظات */}
        <div className="animate-slideIn delay-400">
          <label className="flex items-center gap-2 font-semibold mb-1">
            الملاحظات (اختياري)
            <StickyNote className="w-4 h-4 text-brandred" />
          </label>
          <Textarea
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full resize-none rounded-lg"
            placeholder="أضف أي ملاحظات إضافية هنا..."
          />
        </div>

        {/* زر التنفيذ */}
        <div className="animate-slideIn delay-500">
          <Button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-primary hover:bg-red-600 transition-all duration-200 rounded-xl font-semibold
             cursor-pointer"
          >
            تنفيذ الطلب
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormTranslate;
