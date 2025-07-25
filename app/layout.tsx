import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "【公式】プロ仕様無添加背脂｜国産豚100％・常温1年保存・送料無料",
  description:
    "国産豚100％使用の完全無添加背脂。レトルト殺菌済みで常温1年保存可能。カップ麺やインスタントラーメンが劇的に美味しく変身。個人向け・業務用をご用意。",
  openGraph: {
    title: "プロ仕様の無添加背脂｜あなたのラーメンを店の味に",
    description:
      "国産豚100％使用。レトルト殺菌済みで常温1年保存可能。ご家庭でも、業務用でも。こってり派が待ち望んだ、本物の背脂をお届けします。",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "プロ仕様無添加背脂",
      },
    ],
    locale: "ja_JP",
    type: "website",
    siteName: "会津ブランド館",
  },
  twitter: {
    card: "summary_large_image",
    title: "プロ仕様の無添加背脂｜あなたのラーメンを店の味に",
    description:
      "国産豚100％使用。レトルト殺菌済みで常温1年保存可能。ご家庭でも、業務用でも。こってり派が待ち望んだ、本物の背脂をお届けします。",
  },
  keywords: "背脂,無添加,国産豚,ラーメン,レトルト,常温保存,業務用,個人向け,カップ麺,インスタント",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JPP8PYH31W" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JPP8PYH31W');
        `}
      </Script>
      <body>{children}</body>
    </html>
  )
}


import './globals.css'