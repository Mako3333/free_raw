"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function DualPath() {
  const [activePath, setActivePath] = useState<'individual' | 'corporate'>('individual');

  return (
    <section className="py-12 bg-white">
      <div className="container-wide">
        <div className="flex flex-col items-center mb-8">
          <div className="flex space-x-4 bg-[#f5f7f9] p-1 rounded-full mb-8">
            <button
              className={`py-2 px-8 rounded-full transition-colors ${
                activePath === 'individual'
                  ? 'bg-white text-[#3f4858] shadow-sm'
                  : 'bg-transparent text-[#9ba5b6]'
              }`}
              onClick={() => setActivePath('individual')}
            >
              個人事業主の方へ
            </button>
            <button
              className={`py-2 px-8 rounded-full transition-colors ${
                activePath === 'corporate'
                  ? 'bg-white text-[#3f4858] shadow-sm'
                  : 'bg-transparent text-[#9ba5b6]'
              }`}
              onClick={() => setActivePath('corporate')}
            >
              法人の方へ
            </button>
          </div>

          {activePath === 'individual' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="bg-[#f5f7f9] p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M14 10H10V14H14V10Z" fill="#49B1D1"/>
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" fill="#49B1D1"/>
                  </svg>
                  <h3 className="font-bold text-lg text-[#3f4858]">会計</h3>
                </div>
                <p className="text-sm text-[#3f4858] mb-4">
                  帳簿作成から確定申告までをスムーズに。自動仕訳機能で簿記知識がなくても安心。
                </p>
                <Link href="/accounting/individual/" className="text-[#49b1d1] text-sm flex items-center">
                  詳しく見る
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>

              <div className="bg-[#f5f7f9] p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5ZM19 17H5V7H19V17Z" fill="#49B1D1"/>
                    <path d="M7 9.5H9V12.5H7V9.5Z" fill="#49B1D1"/>
                    <path d="M11 9.5H17V10.5H11V9.5Z" fill="#49B1D1"/>
                    <path d="M11 11.5H14V12.5H11V11.5Z" fill="#49B1D1"/>
                    <path d="M7 14H17V15H7V14Z" fill="#49B1D1"/>
                  </svg>
                  <h3 className="font-bold text-lg text-[#3f4858]">確定申告</h3>
                </div>
                <p className="text-sm text-[#3f4858] mb-4">
                  青色申告65万円控除対応。簡単操作で初めての方も安心して確定申告ができます。
                </p>
                <Link href="/tax-filing/" className="text-[#49b1d1] text-sm flex items-center">
                  詳しく見る
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>

              <div className="bg-[#f5f7f9] p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H19V19H5Z" fill="#49B1D1"/>
                    <path d="M7 12H9V17H7V12Z" fill="#49B1D1"/>
                    <path d="M11 7H13V17H11V7Z" fill="#49B1D1"/>
                    <path d="M15 9H17V17H15V9Z" fill="#49B1D1"/>
                  </svg>
                  <h3 className="font-bold text-lg text-[#3f4858]">請求書</h3>
                </div>
                <p className="text-sm text-[#3f4858] mb-4">
                  インボイス制度対応の適格請求書を簡単作成。プロフェッショナルな請求書が作れます。
                </p>
                <Link href="/invoice/" className="text-[#49b1d1] text-sm flex items-center">
                  詳しく見る
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="bg-[#f5f7f9] p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M14 10H10V14H14V10Z" fill="#49B1D1"/>
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" fill="#49B1D1"/>
                  </svg>
                  <h3 className="font-bold text-lg text-[#3f4858]">会計</h3>
                </div>
                <p className="text-sm text-[#3f4858] mb-4">
                  自動仕訳で会計業務を効率化。法人決算書の作成も簡単にできます。
                </p>
                <Link href="/accounting/" className="text-[#49b1d1] text-sm flex items-center">
                  詳しく見る
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>

              <div className="bg-[#f5f7f9] p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6Z" fill="#49B1D1"/>
                    <path d="M12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13ZM18 18H6V17.01C6.2 16.29 9.3 15 12 15C14.7 15 17.8 16.29 18 17V18Z" fill="#49B1D1"/>
                  </svg>
                  <h3 className="font-bold text-lg text-[#3f4858]">人事労務</h3>
                </div>
                <p className="text-sm text-[#3f4858] mb-4">
                  給与計算から年末調整、社会保険手続きまで人事労務業務をデジタル化。
                </p>
                <Link href="/hr/" className="text-[#49b1d1] text-sm flex items-center">
                  詳しく見る
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>

              <div className="bg-[#f5f7f9] p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M16 11V3H8V9H2V21H22V11H16ZM10 5H14V19H10V5ZM4 11H8V19H4V11ZM20 19H16V13H20V19Z" fill="#49B1D1"/>
                  </svg>
                  <h3 className="font-bold text-lg text-[#3f4858]">経費精算</h3>
                </div>
                <p className="text-sm text-[#3f4858] mb-4">
                  AIがレシートを自動読み取り。経費精算業務を大幅に効率化します。
                </p>
                <Link href="/expenses/" className="text-[#49b1d1] text-sm flex items-center">
                  詳しく見る
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          )}

          <div className="mt-8">
            <Link
              href="/products/"
              className="flex items-center justify-center text-[#49b1d1] font-medium"
            >
              すべての製品を見る
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
