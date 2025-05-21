"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-[#49b1d1] font-bold text-2xl">
              <span className="sr-only">freee</span>
              <svg width="112" height="32" viewBox="0 0 112 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.8668 20.5203H39.0913V9.58203H35.8668V20.5203ZM41.3529 20.5203H44.5774V9.58203H41.3529V20.5203ZM20.1546 12.7948H27.3786V9.58203H16.9297V20.5203H20.1546V16.0073H26.8002V12.7948H20.1546ZM30.1824 20.5203H33.4064V9.58203H30.1824V20.5203ZM10.2002 12.7948V9.58203H0V20.5203H10.2002V17.3073H3.22487V16.0073H9.33262V12.7948H3.22487V12.7948H10.2002Z" fill="#49B1D1"/>
                <path d="M99.5293 12.7954H103.033C103.033 12.7954 103.033 16.8711 103.033 17.309C103.033 19.1848 101.987 20.5214 99.1935 20.5214C96.4005 20.5214 95.4665 19.1848 95.4665 17.309V9.58268H92.2422V17.309C92.2422 21.3841 95.1737 23.7335 99.1935 23.7335C103.213 23.7335 106.257 21.3845 106.257 17.309C106.257 16.8714 106.257 9.58268 106.257 9.58268H99.5293V12.7954Z" fill="#49B1D1"/>
                <path d="M67.4733 9.58209H64.248V16.5951L58.4604 9.58209H54.7637V20.5204H57.9885V13.5073L63.7758 20.5204H67.4733V9.58209Z" fill="#49B1D1"/>
                <path d="M80.5365 9.58209L83.8041 16.3451L87.0718 9.58209H90.5884L85.3844 20.5204H82.2248L77.0205 9.58209H80.5365Z" fill="#49B1D1"/>
                <path d="M72.3934 9.58209H69.168V20.5204H77.0199V17.3073H72.3934V9.58209Z" fill="#49B1D1"/>
                <path d="M109.504 9.58209H106.279V20.5204H109.504V9.58209Z" fill="#49B1D1"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M112 4.38806C112 5.29161 111.271 6.0204 110.369 6.0204C109.467 6.0204 108.738 5.29161 108.738 4.38806C108.738 3.48452 109.467 2.75573 110.369 2.75573C111.271 2.75573 112 3.48452 112 4.38806Z" fill="#49B1D1"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M36.8174 4.38806C36.8174 5.29161 36.0887 6.0204 35.1869 6.0204C34.2849 6.0204 33.5563 5.29161 33.5563 4.38806C33.5563 3.48452 34.2849 2.75573 35.1869 2.75573C36.0887 2.75573 36.8174 3.48452 36.8174 4.38806Z" fill="#49B1D1"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M42.3096 4.38806C42.3096 5.29161 41.581 6.0204 40.6792 6.0204C39.7772 6.0204 39.0486 5.29161 39.0486 4.38806C39.0486 3.48452 39.7772 2.75573 40.6792 2.75573C41.581 2.75573 42.3096 3.48452 42.3096 4.38806Z" fill="#49B1D1"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M31.134 4.38806C31.134 5.29161 30.4053 6.0204 29.5035 6.0204C28.6015 6.0204 27.8729 5.29161 27.8729 4.38806C27.8729 3.48452 28.6015 2.75573 29.5035 2.75573C30.4053 2.75573 31.134 3.48452 31.134 4.38806Z" fill="#49B1D1"/>
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/products/" className="text-[#3f4858] hover:text-[#49b1d1] font-medium">
              製品一覧
            </Link>
            <Link href="/personal-business/" className="text-[#3f4858] hover:text-[#49b1d1] font-medium">
              個人事業主の方へ
            </Link>
            <Link href="https://adv.freee.co.jp/" className="text-[#3f4858] hover:text-[#49b1d1] font-medium">
              法人の方へ
            </Link>
          </nav>

          {/* Login / Signup Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://accounts.secure.freee.co.jp/sign_up" className="btn-primary">
              無料で開始
            </Link>
            <Link href="https://secure.freee.co.jp/" className="btn-secondary">
              ログイン
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-[#49b1d1]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-2 pb-4 px-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/products/"
              className="text-[#3f4858] hover:text-[#49b1d1] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              製品一覧
            </Link>
            <Link
              href="/personal-business/"
              className="text-[#3f4858] hover:text-[#49b1d1] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              個人事業主の方へ
            </Link>
            <Link
              href="https://adv.freee.co.jp/"
              className="text-[#3f4858] hover:text-[#49b1d1] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              法人の方へ
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <Link
                href="https://accounts.secure.freee.co.jp/sign_up"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                無料で開始
              </Link>
              <Link
                href="https://secure.freee.co.jp/"
                className="btn-secondary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                ログイン
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
