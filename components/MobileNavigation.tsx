"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Separator } from "@radix-ui/react-separator";
import { navItems } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { signOutUser } from "@/lib/actions/user.actions";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="mobile-header overflow-x-hidden z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src="/icons/menu.svg"
            alt="Search"
            width={30}
            height={30}
            className="invert"
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetTitle>
            <div className="w-full flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="avatar"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <Separator className="mb-4 bg-light-200/20" />
          </SheetTitle>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map(({ url, name, icon }) => (
                <Link
                  key={name}
                  href={url}
                  className="lg:w-full font-dhivehi"
                  onClick={handleLinkClick}
                >
                  <li
                    className={cn(
                      "mobile-nav-item",
                      pathname === url && "shad-active"
                    )}
                  >
                    {/* <Image
                      src={icon}
                      alt={name}
                      width={24}
                      height={24}
                      className={cn(
                        "nav-icon",
                        pathname === url && "nav-icon-active"
                      )}
                    /> */}
                    <p>{name}</p>
                  </li>
                  <Separator className="mb-4 bg-light-200/20" />
                </Link>
              ))}
            </ul>
          </nav>

          <Separator className="my-5 bg-light-200/20" />
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
