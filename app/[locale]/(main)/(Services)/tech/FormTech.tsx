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
import { FileText, StickyNote, X } from "lucide-react";
import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";

// لستة خدمات تقنية المعلومات
const itServices = ["app", "web", "uiux", "data"];

const FormTech = () => {
  const [serviceType, setServiceType] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [notes, setNotes] = useState<string>("");
  const t = useTranslations("Tech.it");
  const locale = useLocale();

  // التعامل مع رفع الملف
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // التعامل مع إزالة الملف
  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  // التعامل مع إرسال الفورم
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // تحقق بسيط: نوع الخدمة مطلوب
    if (!serviceType) {
      toast.error("من فضلك اختر الخدمة المطلوبة.");
      return;
    }

    // إذا كل شيء صحيح، بنكوّن رسالة واتساب
    const message = `
طلب خدمة تقنية معلومات جديد:
- نوع الخدمة: ${serviceType}
${selectedFile ? `- ملف مرفق: ${selectedFile.name}` : ""}
${notes ? `- الملاحظات: ${notes}` : ""}
    `.trim();

    // كوّن رابط واتساب
    const whatsappNumber = "201064689587"; // ضع رقم واتساب هنا مع كود الدولة بدون +
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // افتح رابط واتساب في نافذة جديدة
    window.open(whatsappUrl, "_blank");

    // عرض رسالة نجاح
    toast.success("تم تجهيز الرسالة بنجاح! سيتم فتح واتساب الآن.");

    // إعادة تعيين الفورم بعد الإرسال
    setServiceType("");
    setSelectedFile(null);
    setNotes("");
  };

  return (
    <div
      className="relative bg-white/90 backdrop-blur-md border p-8 rounded-xl shadow-xl shadow-primary/30 w-full max-w-4xl
      mx-auto mt-10 animate-slideIn"
      id="it-services"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* نوع الخدمة */}
        <div className="animate-slideIn delay-100">
          <label
            className="flex items-center gap-2 font-semibold mb-1"
            htmlFor="serviceType"
          >
            نوع الخدمة
          </label>
          <Select
            onValueChange={(value) => setServiceType(value)}
            value={serviceType}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <SelectTrigger id="serviceType" className="w-full rounded-lg">
              <SelectValue placeholder="اختر نوع الخدمة" />
            </SelectTrigger>
            <SelectContent>
              {itServices.map((service) => (
                <SelectItem key={service} value={service}>
                  {t(service)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* رفع ملف (اختياري) */}
        <div className="animate-slideIn delay-300">
          <label className="flex items-center gap-2 font-semibold mb-1">
            رفع ملف (اختياري)
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

        {/* الملاحظات (اختياري) */}
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

        {/* الزرار */}
        <div className="animate-slideIn delay-500">
          <Button
            type="submit"
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

export default FormTech;
