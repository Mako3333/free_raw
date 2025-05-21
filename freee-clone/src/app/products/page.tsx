import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      category: "会計・確定申告",
      items: [
        {
          title: "freee会計",
          description: "自動で経理を効率化するクラウド会計ソフト",
          link: "/accounting/"
        },
        {
          title: "freee確定申告",
          description: "個人事業主向け確定申告ソフト。青色申告にも対応",
          link: "/tax-filing/"
        },
        {
          title: "freee請求・支払",
          description: "請求書発行から入金消込までを自動化",
          link: "/ar-and-ap-management/"
        },
      ]
    },
    {
      category: "人事・労務",
      items: [
        {
          title: "freee人事労務",
          description: "給与計算から年末調整までを自動化するクラウド人事労務ソフト",
          link: "/hr/"
        },
        {
          title: "freee勤怠管理 1DX",
          description: "多様な働き方に対応するクラウド勤怠管理システム",
          link: "/attendance/"
        },
        {
          title: "freee人事労務BPO",
          description: "人事労務業務の一部または全部をfreeeがお手伝い",
          link: "/hr/bpo/"
        },
        {
          title: "freePlus",
          description: "外出先でも簡単に勤怠打刻ができるクラウド勤怠管理システム",
          link: "/time-tracking-plus/"
        },
        {
          title: "freee福利厚生",
          description: "従業員満足度を高めるクラウド福利厚生サービス",
          link: "/benefit/"
        },
      ]
    },
    {
      category: "バックオフィス業務",
      items: [
        {
          title: "freee経費精算",
          description: "AIがレシートを自動読取。経費精算を効率化",
          link: "/expenses/"
        },
        {
          title: "freeeインボイス受取",
          description: "インボイス制度に対応した受取請求書の管理システム",
          link: "/invoice-receipt/"
        },
        {
          title: "freee会計記帳代行 BPO",
          description: "会計業務の一部または全部をfreeeがお手伝い",
          link: "/accounting-outsourcing/"
        },
      ]
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow py-12 bg-[#f7f9fc]">
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3f4858] mb-8 text-center">
            freee製品一覧
          </h1>
          <p className="text-center text-[#3f4858] mb-12 max-w-2xl mx-auto">
            バックオフィス業務を効率化する40以上のプロダクトを展開。あなたのビジネスに合った製品を見つけてください。
          </p>

          <div className="space-y-12">
            {products.map((category, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#3f4858] mb-6 pb-3 border-b">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((product, productIdx) => (
                    <div key={productIdx} className="bg-[#f5f7f9] rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-[#3f4858] mb-2">{product.title}</h3>
                      <p className="text-sm text-[#3f4858] mb-3">{product.description}</p>
                      <Link href={product.link} className="text-[#49b1d1] text-sm flex items-center">
                        詳しく見る
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="https://accounts.secure.freee.co.jp/sign_up" className="btn-primary inline-block">
              freeeを無料で試す
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
