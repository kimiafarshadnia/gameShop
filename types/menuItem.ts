export interface MenuItem {
  title: string;
  href?: string; // اگر خودش لینک باشه
  image?: string; // عکس کنار آیتم اصلی (دسکتاپ)
  sub?: MenuItem[]; // subItems
}