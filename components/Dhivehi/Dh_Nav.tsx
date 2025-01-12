"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { TiLocationArrow } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";

// import { signOutUser } from "@/lib/actions/user.actions";
import { navItems } from "@/constants";

import Button from "../Button";
import MobileNavigation from "../MobileNavigation";
import { Separator } from "../ui/separator";

const Dh_Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const audioElementRef = useRef<HTMLAudioElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 bg-darkBlue/30 bg-opacity-50 backdrop-blur-lg rounded-full max-w-7xl mx-auto"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-8 ">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Link href="/complaints">
              <Button
                id="product-button"
                title="ޝަކުވާ ހުށަހެޅުމަށް"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 flex items-center justify-center gap-1"
                textSize="text-lg"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex h-full items-center">
            <div className="hidden lg:flex space-x-2 items-center">
              {navItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Link href={item.url} className="nav-hover-btn font-dhivehi">
                    {item.name}
                  </Link>
                  {/* Separator */}
                  {/* {index < navItems.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="h-6 mx-0"
                    />
                  )} */}
                </div>
              ))}
            </div>

            <Link href="/" className="ml-8">
              <Image src="/images/logo.png" alt="logo" width={70} height={70} />
            </Link>

            <MobileNavigation />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Dh_Nav;
