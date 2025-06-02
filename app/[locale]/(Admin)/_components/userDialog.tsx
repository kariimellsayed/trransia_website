"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { addUser, updateUser } from "@/services/userService";
import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";
import { Eye, EyeOff } from "lucide-react";
// import { toast } from "react-hot-toast";

export interface User {
  _id: string;
  phoneNumber: string;
  role: "admin" | "user";
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fetchUsers: () => void;
  editingUser: User | null;
}

export const UserDialog = ({
  open,
  onOpenChange,
  fetchUsers,
  editingUser,
}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "user">("user");
  const [showPassword, setShowPassword] = useState(false);

  const locale = useLocale();
  const t = useTranslations("Dashboard");

  useEffect(() => {
    if (editingUser) {
      setPhoneNumber(editingUser.phoneNumber);
      setRole(editingUser.role);
    } else {
      setPhoneNumber("");
      setPassword("");
      setRole("user");
    }
  }, [editingUser]);

  const handleSubmit = async () => {
    try {
      if (editingUser) {
        await updateUser(editingUser._id, { phoneNumber, password, role });
        toast.success("تم التحديث بنجاح");
      } else {
        await addUser({ phoneNumber, password, role });
        toast.success("تمت الإضافة بنجاح");
      }

      fetchUsers();
      onOpenChange(false);
    } catch (err) {
      toast.error("فشل في العملية");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{editingUser ? t("up") : t("add")}</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input
            placeholder="رقم الهاتف"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {!editingUser && (
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          )}
          <select
            className="w-full border rounded-md p-2"
            value={role}
            onChange={(e) => setRole(e.target.value as "admin" | "user")}
          >
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>

          <Button className="w-full" onClick={handleSubmit}>
            {editingUser ? t("up2") : t("ad2")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
