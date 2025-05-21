"use client";

import Image from "next/image";
import Link from "next/link";

export function FeaturesSection() {
  return (
    <section className="py-16 bg-[#f5f7f9]">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3f4858] mb-12">
          だれもが自由に、<br className="md:hidden" />
          自然体で経営できる環境を。
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#49b1d1]"
                >
                  <path
                    d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H19V19H5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.5 11.25L15.08 9.83L12 12.91L9.91 10.83L8.5 12.24L12 15.74L16.5 11.25Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className="text-xl font-bold text-[#3f4858] ml-2">
                  バックオフィス業務を、<br />
                  <span className="text-[#49b1d1]">「経営を加速させるチカラ」</span>へ
                </h3>
              </div>
              <p className="text-[#3f4858] mb-6">
                freeeは単なる会計ソフトではありません。日々のバックオフィス業務を「経営判断」や「事業成長」につなげる統合プラットフォームです。自動で業務を効率化し、経営者やチームに集中すべき本質的な仕事の時間を作ります。
              </p>
              <div className="rounded-lg overflow-hidden relative h-48 md:h-64">
                <Image
                  src="https://ext.same-assets.com/1039271917/602737959.png"
                  alt="バックオフィス業務効率化"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#49b1d1]"
                >
                  <path
                    d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className="text-xl font-bold text-[#3f4858] ml-2">
                  一番使われる理由は、<br />
                  <span className="text-[#49b1d1]">「とにかく簡単」</span>だから
                </h3>
              </div>
              <p className="text-[#3f4858] mb-6">
                freeeは直感的な操作性と自動化機能により、会計や人事の専門知識がなくても簡単に使えます。APIによる外部サービスとの連携も充実。銀行やクレジットカードの明細を自動取得し、仕訳作業を大幅に削減します。
              </p>
              <div className="rounded-lg overflow-hidden relative h-48 md:h-64">
                <Image
                  src="https://ext.same-assets.com/1039271917/3972246995.png"
                  alt="簡単な操作性"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://accounts.secure.freee.co.jp/sign_up"
            className="btn-primary inline-block"
          >
            無料で試してみる
          </Link>
        </div>
      </div>
    </section>
  );
}
