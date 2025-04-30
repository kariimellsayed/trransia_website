"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";
import { useLocale } from "next-intl";

const Print = () => {
  const [paperSize, setPaperSize] = useState("");
  const [paperType, setPaperType] = useState("");
  const [paperColor, setPaperColor] = useState("");
  const [coverType, setCoverType] = useState("");
  const [layout, setLayout] = useState("");
  const [paperSide, setPaperSide] = useState("");
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
    { id: 2, img: "/cover2.png", title: "كيس شفاف", paper: "1 إلى 50" },
    { id: 3, img: "/cover3.png", title: "تدبيس ركن", paper: "2 إلى 100" },
    { id: 4, img: "/cover4.png", title: "تدبيس جانبي", paper: "2 إلى 100" },
    { id: 5, img: "/cover5.png", title: "سلك", paper: "2 إلى 300" },
    { id: 6, img: "/cover6.png", title: "بلاستيك حلزوني", paper: "10 إلى 200" },
    { id: 7, img: "/cover7.png", title: "تخييط", paper: "100 إلى 600" },
    { id: 8, img: "/cover8.png", title: "كعب مسمار", paper: "15 إلى 200" },
    { id: 9, img: "/cover9.png", title: "كعب حراري", paper: "10 إلى 100" },
    { id: 10, img: "/cover10.png", title: "ملف خرمين", paper: "1 إلى 500" },
    { id: 11, img: "/cover11.png", title: "ملف 3 اخرام", paper: "1 إلى 600" },
    { id: 12, img: "/cover12.png", title: "حافظ انبوبي", paper: "1 إلى 5" },
  ];

  const isFormValid =
    paperSize && paperType && paperColor && coverType && layout && paperSide;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      paperSize,
      paperType,
      paperColor,
      paperShape: coverType,
      paperSide,
      coverType: layout,
    };

    //
    //
    // Logic
    //
    //
  };

  return (
    <section className="padding min-h-screen">
      <div
        id="print"
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
              {["A0", "A1", "A2", "A3", "A4", "A5"].map((size) => (
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

          {/* نوع الورق */}
          <div className="flex flex-col items-start gap-3 w-full">
            <h3 className="text-lg font-semibold mb-2 text-primary">
              نوع الورق :
            </h3>
            <ToggleGroup
              dir={locale === "ar" ? "rtl" : "ltr"}
              type="single"
              value={paperType}
              onValueChange={(value) => value && setPaperType(value)}
              className="flex flex-wrap gap-2 w-full"
            >
              {["عادي", "لماع", "لاصق", "مقوى", "فلم أبيض"].map((type) => (
                <ToggleGroupItem
                  key={type}
                  value={type}
                  className="py-2 px-8 border border-gray-300 rounded-sm transition-all duration-200
                  hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
                >
                  {type}
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

          {/* تخطيط الورق */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-4 text-primary">
              تخطيط الورق:
            </h3>

            <ToggleGroup
              dir={locale === "ar" ? "rtl" : "ltr"}
              type="single"
              value={coverType}
              onValueChange={(value) => value && setCoverType(value)}
              className="flex flex-wrap gap-4 justify-start sm:justify-center"
            >
              {shapes.map((shape) => (
                <ToggleGroupItem
                  key={shape.id}
                  value={String(shape.id)}
                  className="flex flex-col items-center justify-center w-32 h-36 sm:w-28 sm:h-32
                  border border-gray-300 rounded-xl shadow-sm transition-all duration-200
                  hover:bg-primary/10 hover:border-primary focus:outline-none
                  data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:border-primary"
                >
                  <Image
                    src={shape.img}
                    alt="شكل التخطيط"
                    width={70}
                    height={70}
                    className="object-contain w-full h-full mb-2"
                  />
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* جوانب الطباعة */}
          <div className="flex flex-col items-start gap-3 w-full">
            <h3 className="text-lg font-semibold mb-2 text-primary">
              جوانب الطباعة :
            </h3>
            <ToggleGroup
              dir={locale === "ar" ? "rtl" : "ltr"}
              type="single"
              value={paperSide}
              onValueChange={(value) => value && setPaperSide(value)}
              className="flex flex-wrap gap-2 w-full"
            >
              {["وجهين", "وجه"].map((side) => (
                <ToggleGroupItem
                  key={side}
                  value={side}
                  className="py-2 px-8 border border-gray-300 rounded-sm transition-all duration-200
                  hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
                >
                  {side}
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
                      عدد الورق: {item.paper}
                    </p>
                  </div>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
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

export default Print;
