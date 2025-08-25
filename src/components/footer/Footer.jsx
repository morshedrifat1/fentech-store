import Link from "next/link";
import { Facebook, TwitterIcon, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t-1">
      <div className="py-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0 max-w-350 mx-auto">
        {/* Copyright */}
        <span className="text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" target="_blank">
            FanTech
          </Link>
          . All rights reserved.
        </span>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="https://twitter.com" target="_blank">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Youtube className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
