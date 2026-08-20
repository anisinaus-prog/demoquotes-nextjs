'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const imagex ="/demoquotes-logo.svg";
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm min-h-[80px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-orange-600"
        >
         {imagex ? (
            <img src={imagex} alt="DemoQuotes.com.au" width={330} height={110} className="h-auto w-[230px] sm:w-[260px] lg:w-[300px]" />
          ) : (
            <div>
              <p>DemolitionQuotes</p>
              <p className="text-sm text-gray-600">Get demolition quotes fast</p>
            </div>
          )}
          
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-4 md:flex">
         <Link
            href="/"
            className="font-semibold text-slate-700 transition hover:text-orange-600"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 font-semibold text-slate-700 transition hover:text-orange-600">
              Services
              <svg
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {servicesOpen && (
              <div className="dropdown absolute left-0 top-10 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                <div className="flex flex-col">
                  <Link
                    href="/services/house-demolition"
                    className="rounded-xl px-4 py-3 text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                  >
                    House Demolition
                  </Link>

                  <Link
                    href="/services/commercial"
                    className="rounded-xl px-4 py-3 text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                  >
                    Commercial Demolition
                  </Link>

                  <Link
                    href="/services/asbestos-removal"
                    className="rounded-xl px-4 py-3 text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                  >
                    Asbestos Removal
                  </Link>

                  <Link
                    href="/services/excavation-works"
                    className="rounded-xl px-4 py-3 text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                  >
                    Excavation Works
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="#how"
            className="font-semibold text-slate-700 transition hover:text-orange-600"
          >
            How It Works
          </Link>

          <Link
            href="/faq"
            className="font-semibold text-slate-700 transition hover:text-orange-600"
          >
            FAQ
          </Link>

          <Link
            href="#contact"
            className="font-semibold text-slate-700 transition hover:text-orange-600"
          >
            Contact
          </Link>

          <Link
            href="/get-a-quote"
            className="rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-700"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle Menu"
        >
          <span className="h-0.5 w-6 rounded bg-slate-900"></span>
          <span className="h-0.5 w-6 rounded bg-slate-900"></span>
          <span className="h-0.5 w-6 rounded bg-slate-900"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col gap-2 px-6 py-5">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-slate-700 hover:text-orange-600"
            >
              Home
            </Link>
            {/* Mobile Services */}
            <div className="mb-2">
              
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-400">
                Services
              </p>

              <div className="flex flex-col gap-1 pl-2">
                <Link
                  href="/services/house-demolition"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  House Demolition
                </Link>

                <Link
                  href="/services/commercial"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  Commercial Demolition
                </Link>

                <Link
                  href="/services/asbestos-removal"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  Asbestos Removal
                </Link>

                <Link
                  href="/services/excavation-works"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  Excavation Works
                </Link>
              </div>
            </div>

            <Link
              href="#how"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-slate-700 hover:text-orange-600"
            >
              How It Works
            </Link>

            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-slate-700 hover:text-orange-600"
            >
              FAQ
            </Link>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-slate-700 hover:text-orange-600"
            >
              Contact
            </Link>

            <Link
              href="#quote"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-xl bg-orange-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-700"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
