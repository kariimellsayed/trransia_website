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
import { StickyNote } from "lucide-react";
import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";

// لستة خدمات تقنية المعلومات
const services = ["service1", "service2", "service3", "service4", "other"];

const FormAds = () => {
  const [serviceType, setServiceType] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const t = useTranslations("Ad");
  const locale = useLocale();

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
طلب خدمة دعاية واعلان جديد:
- نوع الخدمة: ${serviceType}
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
    setNotes("");
  };

  return (
    <div
      className="relative bg-white/90 backdrop-blur-md border p-8 rounded-xl shadow-xl shadow-primary/30 w-full max-w-4xl
      mx-auto mt-10 animate-slideIn"
      id="ad"
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
            <SelectTrigger
              id="serviceType"
              className="w-full rounded-lg transition-all duration-200 hover:shadow-sm
              hover:shadow-primary"
            >
              <SelectValue placeholder="اختر نوع الخدمة" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem
                  key={service}
                  value={service}
                  className="text-base font-semibold"
                >
                  {t(service)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

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

export default FormAds;
