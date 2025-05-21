"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#3f4858] text-white pt-10 pb-6">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm mb-4">サービス</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/accounting/" className="hover:text-[#49b1d1]">freee会計</Link></li>
              <li><Link href="/hr/" className="hover:text-[#49b1d1]">freee人事労務</Link></li>
              <li><Link href="/tax-filing/" className="hover:text-[#49b1d1]">freee確定申告</Link></li>
              <li><Link href="/expenses/" className="hover:text-[#49b1d1]">freee経費精算</Link></li>
              <li><Link href="/invoice/" className="hover:text-[#49b1d1]">freeeインボイス</Link></li>
              <li><Link href="/sign/" className="hover:text-[#49b1d1]">freeeサイン</Link></li>
              <li><Link href="/accounting/invoice-register/" className="hover:text-[#49b1d1]">freee請求書管理</Link></li>
              <li><Link href="/time-tracking-plus/" className="hover:text-[#49b1d1]">freee勤怠管理 Plus</Link></li>
              <li><Link href="/sales-management/" className="hover:text-[#49b1d1]">freee営業管理</Link></li>
              <li><Link href="https://navi.freee.co.jp/" className="hover:text-[#49b1d1]">freeeナビ</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm mb-4">法人向け</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/accounting/" className="hover:text-[#49b1d1]">法人向け会計</Link></li>
              <li><Link href="/hr/" className="hover:text-[#49b1d1]">人事労務</Link></li>
              <li><Link href="/expenses/" className="hover:text-[#49b1d1]">経費精算</Link></li>
              <li><Link href="/accounting-outsourcing/" className="hover:text-[#49b1d1]">会計記帳代行 BPO</Link></li>
              <li><Link href="/hr/bpo/" className="hover:text-[#49b1d1]">人事労務代行 BPO</Link></li>
              <li><Link href="/benefit/" className="hover:text-[#49b1d1]">福利厚生</Link></li>
              <li><Link href="/my-number/" className="hover:text-[#49b1d1]">マイナンバー管理</Link></li>
              <li><Link href="/payment/" className="hover:text-[#49b1d1]">支払代行</Link></li>
              <li><Link href="/attendance/" className="hover:text-[#49b1d1]">勤怠管理 1DX</Link></li>
              <li><Link href="/healthcare/" className="hover:text-[#49b1d1]">健康管理</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm mb-4">個人事業主向け</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/accounting/individual/" className="hover:text-[#49b1d1]">個人事業主向け会計</Link></li>
              <li><Link href="/tax-filing/" className="hover:text-[#49b1d1]">確定申告</Link></li>
              <li><Link href="/tax-filing/" className="hover:text-[#49b1d1]">青色申告</Link></li>
              <li><Link href="/opening/" className="hover:text-[#49b1d1]">開業届</Link></li>
              <li><Link href="/invoice/" className="hover:text-[#49b1d1]">インボイス制度</Link></li>
              <li><Link href="/accounting/individual/e-tax-start/" className="hover:text-[#49b1d1]">e-Tax対応</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm mb-4">会社情報</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="https://corp.freee.co.jp/" className="hover:text-[#49b1d1]">会社概要</Link></li>
              <li><Link href="https://jobs.freee.co.jp/" className="hover:text-[#49b1d1]">採用情報</Link></li>
              <li><Link href="/trade/" className="hover:text-[#49b1d1]">特定商取引法に基づく表記</Link></li>
              <li><Link href="/terms/" className="hover:text-[#49b1d1]">利用規約</Link></li>
              <li><Link href="/privacy_policy/" className="hover:text-[#49b1d1]">プライバシーポリシー</Link></li>
              <li><Link href="/accessibility/" className="hover:text-[#49b1d1]">アクセシビリティポリシー</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm mb-4">サポート</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="https://support.freee.co.jp/" className="hover:text-[#49b1d1]">ヘルプセンター</Link></li>
              <li><Link href="https://www.freee.co.jp/contact/" className="hover:text-[#49b1d1]">お問い合わせ</Link></li>
              <li><Link href="https://support.freee.co.jp/hc/ja/requests/new" className="hover:text-[#49b1d1]">サポートチケット</Link></li>
              <li><Link href="https://www.freee.co.jp/security/" className="hover:text-[#49b1d1]">セキュリティ</Link></li>
              <li><Link href="https://security.freee.co.jp/bounty/" className="hover:text-[#49b1d1]">脆弱性の報告</Link></li>
            </ul>
          </div>
        </div>

        {/* App Store Links */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 my-8">
          <p className="text-sm">会計ソフトはスマホアプリでも使えます</p>
          <div className="flex space-x-4">
            <Link href="https://itunes.apple.com/jp/app/quan-zi-dongnokuraudo-hui/id811207074">
              <div className="relative w-[120px] h-[40px]">
                <Image
                  src="https://ext.same-assets.com/1039271917/3271231940.svg"
                  alt="Download on the App Store"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=jp.co.freee.freee">
              <div className="relative w-[135px] h-[40px]">
                <Image
                  src="https://ext.same-assets.com/1039271917/1194827233.png"
                  alt="Get it on Google Play"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Company Info */}
        <div className="text-center text-xs mt-8 border-t border-gray-700 pt-6">
          <p className="mb-2">〒141-0031 東京都品川区西五反田2-8-1 五反田ファーストビル 8F</p>
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="/privacy_policy/" className="hover:text-[#49b1d1]">プライバシー</Link>
            <Link href="https://www.facebook.com/freee.co.jp/" className="hover:text-[#49b1d1]">Facebook</Link>
            <Link href="https://www.youtube.com/user/freeejp/" className="hover:text-[#49b1d1]">YouTube</Link>
            <Link href="https://twitter.com/freee_jp/" className="hover:text-[#49b1d1]">Twitter</Link>
          </div>
          <p>Copyright © 2012-2025 freee K.K.</p>
        </div>
      </div>
    </footer>
  );
}
