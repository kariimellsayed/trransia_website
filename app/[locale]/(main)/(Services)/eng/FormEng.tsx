"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

const FormEng = () => {
  const [paperSize, setPaperSize] = useState("");
  const [paperColor, setPaperColor] = useState("");
  const [layout, setLayout] = useState("");
  const [file, setFile] = useState<File | null>(null); // State لتخزين الملف
  const locale = useLocale();

  const shapes = [
    { id: 1, img: "/shap1.png" },
    { id: 2, img: "/shap2.png" },
    { id: 3, img: "/shap3.png" },
    { id: 4, img: "/shap4.png" },
    { id: 5, img: "/shap5.png" },
  ];

  const cover = [
    { id: 1, img: "/cover1.png", title: "بدون تغليف", paper: "غير محدود" },
    { id: 2, img: "/cover2.png", title: "تغليف شفاف", paper: "1 إلى 50" },
  ];

  // التحقق من صحة الفورم (حقل الملف اختياري، مش هيأثر على التحقق)
  const isFormValid = paperSize && paperColor && layout;

  // التعامل مع رفع الملف
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // تكوين نص الرسالة
    const message = `📝 طلب جديد - قسم الهندسي:
  
📏 حجم الورق: ${paperSize}
🎨 لون الورق: ${paperColor}
📦 نوع التغليف: ${layout}
${file ? `📎 تم إرفاق ملف: ${file.name}` : "📎 لا يوجد ملف مرفق"}

الرجاء التأكيد على الطلب.`;

    // ترميز النص ليناسب رابط واتساب
    const encodedMessage = encodeURIComponent(message);

    // رقم الواتساب (تأكد من استخدام رمز الدولة بدون +)
    const whatsappNumber = "966544214748";

    // فتح رابط واتساب
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="padding min-h-screen">
      <div
        id="eng"
        className="relative bg-white/90 backdrop-blur-md border p-8 rounded-xl shadow-xl shadow-primary/30 w-full max-w-4xl mx-auto animate-slideIn"
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* حجم الورق */}
          <div className="flex flex-col items-start gap-3 w-full">
            <h3 className="text-lg font-semibold mb-2 text-primary">
              حجم الورق :
            </h3>
            <ToggleGroup
              type="single"
              value={paperSize}
              onValueChange={(value) => value && setPaperSize(value)}
              className="flex flex-wrap gap-2 w-full"
            >
              {["A0", "A1", "A2"].map((size) => (
                <ToggleGroupItem
                  key={size}
                  value={size}
                  className="py-2 px-8 border border-gray-300 rounded-sm transition-all duration-200
                  hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
                >
                  {size}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* لون الورق */}
          <div className="flex flex-col items-start gap-3 w-full">
            <h3 className="text-lg font-semibold mb-2 text-primary">
              لون الورق :
            </h3>
            <ToggleGroup
              dir={locale === "ar" ? "rtl" : "ltr"}
              type="single"
              value={paperColor}
              onValueChange={(value) => value && setPaperColor(value)}
              className="flex flex-wrap gap-2 w-full"
            >
              {["اسود", "ملون"].map((color) => (
                <ToggleGroupItem
                  key={color}
                  value={color}
                  className="py-2 px-8 border border-gray-300 rounded-sm transition-all duration-200
                  hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
                >
                  {color}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* التغليف */}
          <div className="flex flex-col items-start gap-3 w-full">
            <h3 className="text-lg font-semibold mb-2 text-primary">
              التغليف :
            </h3>
            <ToggleGroup
              dir={locale === "ar" ? "rtl" : "ltr"}
              type="single"
              value={layout}
              onValueChange={(value) => value && setLayout(value)}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full"
            >
              {cover.map((item) => (
                <ToggleGroupItem
                  key={item.id}
                  value={item.title}
                  className="flex flex-col rounded-xl overflow-hidden border border-gray-300 h-full
                   bg-white shadow-sm transition-all duration-200 hover:shadow-md data-[state=on]:border-primary data-[state=on]:shadow-lg"
                >
                  <div className="w-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-base font-semibold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {locale === "ar" ? "عدد الورق: " : "Paper Count: "}{" "}
                      {item.paper}
                    </p>
                  </div>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* رفع ملف (اختياري) */}
          <div className="flex flex-col items-start gap-3 w-full">
            <label htmlFor="file">رفع ملف التصميم (اختياري) ؟</label>
            <div className="flex items-center gap-2 w-full">
              <Input
                id="file"
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={handleFileChange}
                className="cursor-pointer"
              />
              <Upload className="w-5 h-5 text-gray-500" />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              "الرجاء رفع ملف بصيغة PDF أو JPG أو PNG"
            </p>
          </div>

          {/* زر إرسال الطلب */}
          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-8 py-3 w-full rounded-md font-bold text-white transition-all duration-200
                ${
                  isFormValid
                    ? "bg-primary hover:bg-primary/90 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              تنفيذ الطلب
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormEng;
