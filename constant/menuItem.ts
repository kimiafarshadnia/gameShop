import { MenuItem } from "@/types";


// مثال دسته‌بندی‌های سایت PSPro
export const menuItems: MenuItem[] = [
  {
    title: "کنسول‌های بازی",
    image: "/assets/images/menu/consoles.jpg",
    sub: [
      { title: "PS5", href: "/consoles/ps5" },
      { title: "Xbox Series X", href: "/consoles/xbox-series-x" },
      { title: "Nintendo Switch", href: "/consoles/switch" },
    ],
  },
  {
    title: "لوازم جانبی",
    image: "/assets/images/menu/janebi.jpg",
    sub: [
      {
        title: "دسته‌ها و کنترلرها",
        sub: [
          { title: "PS5 Controller", href: "/accessories/ps5-controller" },
          { title: "Xbox Controller", href: "/accessories/xbox-controller" },
        ],
      },
      {
        title: "هدفون و هدست",
        sub: [
          { title: "PS5 Headset", href: "/accessories/ps5-headset" },
          { title: "Xbox Headset", href: "/accessories/xbox-headset" },
        ],
      },
      {
        title: "کابل‌ها و شارژرها",
        href: "/accessories/cables-chargers",
      },
    ],
  },
  {
    title: "دیگر کالاها",
    image: "/assets/images/menu/other-product.webp",
    sub: [
      { title: "بازی‌ها", href: "/others/games" },
      { title: "کارت هدیه", href: "/others/gift-cards" },
      {
        title: "محصولات آموزشی",
        sub: [
          { title: "کتاب و راهنما", href: "/others/education/books" },
          { title: "ویدیو آموزشی", href: "/others/education/videos" },
        ],
      },
    ],
  },
];