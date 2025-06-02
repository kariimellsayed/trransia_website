"use client";

import { FileText, X, StickyNote } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FormStudent = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [notes, setNotes] = useState<string>("");

  // const WHATSAPP_NUMBER = "966569366161";

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
      toast.error("الرجاء إرفاق ملف.");
      return;
    }

    // تجهيز الرسالة
    const message =
      `📚 *طلب خدمة الطالب*\n\n` +
      `📎 اسم الملف: ${selectedFile.name}\n` +
      (notes ? `📝 ملاحظات: ${notes}` : "");

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "966544214748"; // بدون +
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // فتح واتساب
    window.open(whatsappLink, "_blank");

    toast.success("تم تجهيز الرسالة! سيتم فتح واتساب الآن.");

    // تفريغ الحقول
    setSelectedFile(null);
    setNotes("");
  };

  return (
    <div
      id="student"
      className="relative bg-white/90 backdrop-blur-md border p-8 rounded-xl shadow-xl shadow-primary/30 w-full max-w-4xl
      mx-auto animate-slideIn"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* رفع ملف */}
        <div className="animate-slideIn delay-300">
          <label className="flex items-center gap-2 font-semibold mb-1">
            ارفع ملف
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

export default FormStudent;
