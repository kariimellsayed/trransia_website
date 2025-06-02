"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { deleteUser, getUsers } from "@/services/userService";
import { UserDialog } from "../_components/userDialog";
import { Loader2 } from "lucide-react";

export interface User {
  _id: string;
  phoneNumber: string;
  role: "admin" | "user";
}

export default function Dashboard() {
  const locale = useLocale();
  const [users, setUsers] = useState<User[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [deleteLoadingId, setDeleteLoadingId] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();
  const t = useTranslations("Dashboard");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.users);
    } catch (error) {
      toast.error("حدث خطأ أثناء جلب المستخدمين");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    const accessToken = localStorage.getItem("accessToken-transia");

    // ✅ التحقق من الصلاحيات
    if (!accessToken || role !== "admin") {
      router.push("/");
      return;
    }

    fetchUsers();
    setAuthChecked(true);
  }, []);

  const handleDelete = async (id: string) => {
    setDeleteLoadingId(id);
    try {
      await deleteUser(id);
      toast.success("تم حذف المستخدم بنجاح");
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
      toast.error("فشل في حذف المستخدم");
    } finally {
      setDeleteLoadingId(null);
    }
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setOpenDialog(true);
  };

  // ✅ أثناء التحقق من الصلاحيات
  if (!authChecked) {
    return (
      <div className="text-center py-20">
        <Loader2 className="animate-spin w-10 h-10 text-primary mx-auto" />
        <p className="mt-2 text-primary">جارٍ التحقق من الصلاحيات...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center padding">
      <div className="w-full">
        <div className="flex items-center justify-between flex-wrap">
          <h1 className="text-primary text-3xl font-semibold text-start mb-4">
            {t("title")}
          </h1>

          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href={"/"}
              className="bg-primary text-white px-4 py-1 rounded-md hover:bg-red-600"
            >
              {t("back")}
            </Link>

            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1"
              onClick={() => {
                setEditingUser(null);
                setOpenDialog(true);
              }}
            >
              {t("add")}
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-10">
            <Loader2 className="animate-spin w-8 h-8 text-primary mx-auto" />
            <p className="mt-2 text-primary">{t("load")}</p>
          </div>
        ) : (
          <Table dir={locale === "ar" ? "rtl" : "ltr"}>
            <TableHeader>
              <TableRow>
                <TableHead className="text-start">{t("phone")}</TableHead>
                <TableHead className="w-[100px]">{t("role")}</TableHead>
                <TableHead className="text-right">{t("set")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell className="font-medium">
                    {user.phoneNumber}
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(user)}
                    >
                      {t("up")}
                    </Button>

                    <Button
                      variant="destructive"
                      size="sm"
                      disabled={deleteLoadingId === user._id}
                      onClick={() => handleDelete(user._id)}
                    >
                      {deleteLoadingId === user._id ? (
                        <Loader2 className="animate-spin w-4 h-4" />
                      ) : (
                        t("del")
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        {/* ✅ Dialog للإضافة والتعديل */}
        <UserDialog
          open={openDialog}
          onOpenChange={setOpenDialog}
          fetchUsers={fetchUsers}
          editingUser={editingUser}
        />
      </div>
    </div>
  );
}
