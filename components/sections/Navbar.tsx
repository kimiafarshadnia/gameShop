"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { menuItems } from "@/constant";
import { MenuItem } from "@/types";
import Image from "next/image";

function SubMenu({
  items,
  mobile = false,
  onClose,
}: {
  items: MenuItem[];
  mobile?: boolean;
  onClose?: () => void;
}) {
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // 📱 موبایل
  if (mobile) {
    return (
      <ul className="space-y-2 pr-3">
        {items.map((item) => (
          <li key={item.title}>
            <div className="flex justify-between items-center">
              <Link
                href={item.href || ""}
                onClick={onClose}
                className="/70 hover: transition-colors"
              >
                {item.title}
              </Link>
              {item.sub && (
                <button
                  onClick={() => toggleSubMenu(item.title)}
                  aria-label="Toggle submenu"
                  className="ml-2"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openSubMenus[item.title] ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
            <AnimatePresence>
              {openSubMenus[item.title] && item.sub && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pl-3"
                >
                  <SubMenu items={item.sub} mobile onClose={onClose} />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }

  // 💻 دسکتاپ
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href || ""}
            className="font-semibold"
          >
            {item.title}
          </Link>
          {item.sub && (
            <div className="flex flex-col gap-4">
              <SubMenu items={item.sub} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

const NavBar=()=> {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="w-full flex items-center justify-between px-4 py-3">
      {/* 📱 موبایل */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="">
            <div className="flex justify-center mb-6">
              <Link href="/" onClick={() => window.location.assign("/")}>
                <Image
                  src="/images/completeLogo.svg"
                  alt="Logo"
                  className="object-contain"
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            <SubMenu items={menuItems} mobile onClose={() => {}} />
          </SheetContent>
        </Sheet>
      </div>

      {/* 💻 دسکتاپ */}
<nav className="hidden md:flex items-start justify-end gap-8 relative">
  <ul className="flex gap-10">
    {menuItems.map((item) => {
      const isActive =
        pathname === item.href ||
        (item.sub && item.sub.some((s) => pathname.startsWith(s.href || "")));

      return (
        <li key={item.title} className="relative">
          {/* آیتم اصلی */}
          <div
            className={`flex items-center gap-1 font-medium cursor-pointer ${
              isActive ? "" : "text-black/70 hover:transition"
            }`}
          >
            <Link href={item.href || ""}>{item.title}</Link>
            {item.sub && <ChevronDown className="h-4 w-4" />}
          </div>

          {/* زیرمنو همیشه نمایش داده می‌شود */}
          {item.sub && (
            <div className="absolute top-full right-0 z-50 mt-1">
              <SubMenu items={item.sub} />
            </div>
          )}
        </li>
      );
    })}
  </ul>
</nav>

      {/* دکمه‌ها */}
      <div className="flex items-center gap-3">
        <Button asChild variant="secondary" className="hover:scale-105 transition">
          <Link
            href="https://wa.me/989035234156"
            target="_blank"
            rel="noopener noreferrer"
          >
            ثبت‌نام
          </Link>
        </Button>
        <Button asChild variant="outline" className="hover:scale-105 transition">
          <Link
            href="https://instagram.com/ronak.majdi"
            target="_blank"
            rel="noopener noreferrer"
          >
            ورود
          </Link>
        </Button>
      </div>
    </header>
  );
}
export default NavBar;