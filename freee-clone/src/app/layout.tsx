import "./globals.css";

import type { Metadata } from "next";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "クラウド会計ソフト | freee",
  description:
    "freeeはすべてのスモールビジネスを支える統合型経営プラットフォームです。従来バラバラに存在していた業務やデータをフロントオフィスからバックオフィスまで一気通貫させ、誰もが自由に経営を行えること目指します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
