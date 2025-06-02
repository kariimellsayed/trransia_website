"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FileText, StickyNote, X } from "lucide-react";
import { toast } from "sonner";
import { LanguageSelect } from "@/app/[locale]/_components/ui/LanguageSelect";

// const WHATSAPP_NUMBER = "966569366161";

const FormTranslate = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null); //File
  const [sourceLang, setSourceLang] = useState<string | null>(null); //LangFrom
  const [targetLang, setTargetLang] = useState<string | null>(null); //LangTo
  const [notes, setNotes] = useState<string>(""); //Notes

  // Change in File
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Remove File
  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      toast.error("الرجاء إرفاق ملف للترجمة.");
      return;
    }

    // تجهيز الرسالة
    const message =
      `📄 *طلب ترجمة*\n\n` +
      `🗣️ من: ${sourceLang || "غير محددة"}\n` +
      `🔤 إلى: ${targetLang || "غير محددة"}\n` +
      `📎 اسم الملف: ${selectedFile.name}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "966544214748";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // فتح رابط واتساب
    window.open(whatsappLink, "_blank");

    toast.success("تم تجهيز الرسالة بنجاح! سيتم فتح واتساب الآن.");

    // Reset form
    setSourceLang("");
    setTargetLang("");
    setSelectedFile(null);
  };

  return (
    <div
      id="trans"
      className="relative bg-white/90 backdrop-blur-md border p-8 rounded-xl shadow-xl shadow-primary/30 w-full max-w-4xl
      mx-auto mt-10 animate-slideIn"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* اللغة المصدر */}
        <div className="animate-slideIn delay-100">
          <LanguageSelect
            label="من"
            value={sourceLang}
            onChange={(value) => {
              setSourceLang(value);
              if (targetLang === value) setTargetLang(null);
            }}
          />
        </div>

        {/* اللغة الهدف */}
        <div className="animate-slideIn delay-200">
          <LanguageSelect
            label="إلى"
            value={targetLang}
            onChange={(value) => setTargetLang(value)}
          />
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
            className="w-full resize-none rounded-lg transition-all duration-200 hover:shadow-sm
              hover:shadow-primary"
            placeholder="أضف أي ملاحظات إضافية هنا..."
          />
        </div>

        {/* زر التنفيذ */}
        {selectedFile && (
          <div className="animate-slideIn delay-500">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-red-600 transition-all duration-200 rounded-xl font-semibold"
            >
              تنفيذ الطلب
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormTranslate;
