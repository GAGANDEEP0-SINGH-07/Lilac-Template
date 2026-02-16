"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[hsl(var(--white-hsl))] md:bg-transparent transition-colors duration-300">
      <Container className="py-5 md:py-3">
        <div className="flex items-center justify-between md:hidden relative z-50">
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center relative z-50"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-[hsl(var(--black-hsl))] transition-transform duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : "translate-y-[3px]"
                  }`}
              />
              <span
                className={`absolute left-0 top-0 h-px w-full bg-[hsl(var(--black-hsl))] transition-transform duration-300 ${isOpen ? "translate-y-[7px] -rotate-45" : "translate-y-[10px]"
                  }`}
              />
            </span>
          </button>

          <Link href="/" className="text-[1rem] font-medium leading-none" onClick={() => setIsOpen(false)}>
            Lilac Template
          </Link>

          {/* Placeholder for balance/cart if needed, or empty div to balance flex */}
          <div className="w-9" />
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-[hsl(var(--white-hsl))] px-[6vw] py-24 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-6 text-[1.5rem] font-medium">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li>
                <a href="/blog" onClick={() => setIsOpen(false)}>Blog</a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden items-center justify-between md:flex">
          <Link href="/" className="text-[2rem] font-medium leading-none">
            Lilac Template
          </Link>

          <nav aria-label="Main">
            <ul className="flex items-center gap-9 text-[1rem]">
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
