"use client";

import Image from "next/image";
import NADIMLOGO from "../public/nadimlogo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose as XMarkIcon } from "react-icons/ai";
import { FaBars as Bars3Icon } from "react-icons/fa";

const navigation = [
  { name: "About", href: "#about" },
  { name: "i-Rewards", href: "#prize-pool" },
  { name: "Timeline", href: "#timeline" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [blur, handleBlur] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleBlur(true);
      } else handleBlur(false);
    });
  }, []);

  return (
    <RevealWrapper
      className={`fixed inset-x-0 top-0 z-50 invisible ${
        blur && "backdrop-blur"
      }`}
      easing="ease-in-out"
      delay={100}
      duration={300}
      origin="top"
    >
      <nav
        className="flex items-center justify-between lg:px-8 h-14"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-2 p-1.5">
            <span className="sr-only">i-Hax Logo</span>
            <Image
              src={NADIMLOGO}
              alt="i-Hax Logo"
              width={50}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-bold text-lg text-white mx-4 cursor-pointer hover:text-orange-700"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.href.slice(1)); // Assuming item.href is a hash link (#example)
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" }); // You can customize scroll behavior here
                }
              }}
            >
              <div className="hover:bg-secondary  h-14 w-[100px] flex items-center justify-center">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">i-Hax Logo</span>
              <Image
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(
                        item.href.slice(1)
                      ); // Assuming item.href is a hash link (#example)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" }); // You can customize scroll behavior here
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="https://docs.google.com/forms/d/16ZA5iThK_zvYhGmuDSlzIDdwHAiLdmaQ_2bDil1ZsfU/viewform?edit_requested=true"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </RevealWrapper>
  );
};

export default Navbar;