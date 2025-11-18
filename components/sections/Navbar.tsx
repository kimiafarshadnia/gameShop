"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { menuItems } from "@/constant";
import { MenuItem } from "@/types";
import { Input } from "../ui/input";

import Link from "next/link";
import Image from "next/image";
import BasketCard from "../cards/BasketCard";

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
      <ul className="space-y-2 px-4">
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
          <Link href={item.href || ""}>{item.title}</Link>
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

const NavBar = () => {
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
          <VisuallyHidden>
            <SheetTitle>عنوان مخفی برای screen reader</SheetTitle>
          </VisuallyHidden>
          <SheetContent side="left" className="">
            <div className="flex justify-center py-6">
              <Link href="/">
                <Image
                  src="/assets/images/menu/header-logo.svg"
                  alt="logo"
                  width={200}
                  height={80}
                />
              </Link>
            </div>

            <SubMenu items={menuItems} mobile onClose={() => {}} />
          </SheetContent>
        </Sheet>
      </div>

      <div>
        <Input
          placeholder="جست و جو ..."
          className="bg-gray-100 outline-0 border-0"
        />
      </div>

      {/* 💻 دسکتاپ */}
      <nav className="hidden md:flex items-center justify-center relative">
        <ul className="flex gap-10 relative text-sm">
          {menuItems.map((item) => (
            <li
              key={item.title}
              className="relative group flex flex-col items-center"
            >
              {/* آیتم اصلی با خط قرمز انیمیشنی */}
              <div className="flex items-center gap-1 font-medium cursor-pointer relative">
                <Link href={item.href || ""}>{item.title}</Link>

                {/* خط قرمز زیر آیتم */}
                <span
                  className="
              absolute left-0 -bottom-1 h-0.5 bg-red-600 
              w-0 group-hover:w-full 
              transition-all duration-300 ease-out
            "
                />
              </div>

              {/* مگا منو ثابت وسط صفحه */}
              {item.sub && (
                <div
                  className="
              absolute left-1/2 -translate-x-1/2 top-10 z-50
              hidden group-hover:flex 
              bg-white shadow-xl rounded-xl 
              p-6 w-[850px] 
              items-center justify-between
              transition-all duration-300
            "
                >
                  {/* محتوا */}
                  <div className="flex justify-between w-full">
                    {/* ستون‌ها */}
                    <div className="grid grid-cols-3 gap-10 w-2/3">
                      {item.sub.map((subItem) => (
                        <div
                          key={subItem.title}
                          className="flex flex-col gap-2"
                        >
                          <h4 className="font-semibold text-red-600">
                            {subItem.title}
                          </h4>

                          {subItem.sub && (
                            <ul className="flex flex-col gap-1 text-sm leading-6">
                              {subItem.sub.map((child) => (
                                <li key={child.title}>
                                  <Link
                                    href={child.href || ""}
                                    className="text-black/80 hover:text-black transition"
                                  >
                                    {child.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* تصویر سمت راست */}
                    <div className="w-64 h-64 relative hidden lg:block">
                      <Image
                        src={item.image || ""}
                        alt="preview"
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <BasketCard />
    </header>
  );
};
export default NavBar;
