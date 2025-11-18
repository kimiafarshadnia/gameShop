import Image from "next/image";
import NavBar from "./Navbar";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center pt-5 shadow-md bg-white">
      <div className="w-full flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="secondary"
            className="hover:scale-105 transition"
          >
            <Link
              href="https://wa.me/989035234156"
              target="_blank"
              rel="noopener noreferrer"
            >
              ثبت‌نام
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="hover:scale-105 transition"
          >
            <Link
              href="https://instagram.com/ronak.majdi"
              target="_blank"
              rel="noopener noreferrer"
            >
              ورود
            </Link>
          </Button>
        </div>
        <Image
          src="/assets/images/menu/header-logo.svg"
          alt="logo"
          width={200}
          height={80}
        />
        <Link
          href="https://wa.me/989035234156"
          target="_blank"
          rel="noopener noreferrer"
        >
          989035234156
        </Link>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
