import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "【公式】プロ仕様無添加背脂｜国産豚100％・常温1年保存・送料無料｜会津ブランド館",
  description:
    "国産豚100％使用の完全無添加背脂。レトルト殺菌済みで常温1年保存可能。カップ麺やインスタントラーメンが劇的に美味しく変身。個人向け8個入り1,250円、ファミリー向け24個入り3,200円、業務用10kg6,500円。全国送料無料でお届け。",
  keywords:
    "背脂,無添加,国産豚,ラーメン,レトルト,常温保存,業務用,個人向け,カップ麺,インスタント,送料無料,会津ブランド館,プロ仕様,こってり,二郎系",
  openGraph: {
    title: "プロ仕様の無添加背脂｜カップ麺が店の味に変身｜国産豚100％",
    description:
      "国産豚100％使用の完全無添加背脂。レトルト殺菌済みで常温1年保存可能。カップ麺やインスタントラーメンが劇的に美味しく変身。個人向け・業務用をご用意。全国送料無料。",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-i3llVClPOxeiThP3k17kdjeeTQ4ACV.jpeg",
        width: 1200,
        height: 630,
        alt: "プロ仕様無添加背脂 - 国産豚100％使用",
      },
    ],
    locale: "ja_JP",
    type: "website",
    siteName: "会津ブランド館",
    url: "https://aizubrandhall.com/backfat",
  },
  twitter: {
    card: "summary_large_image",
    title: "プロ仕様の無添加背脂｜カップ麺が店の味に変身",
    description:
      "国産豚100％使用の完全無添加背脂。レトルト殺菌済みで常温1年保存可能。カップ麺やインスタントラーメンが劇的に美味しく変身。個人向け・業務用をご用意。",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-i9Jm8bJf7s9YVgrsTxk0gQS1c6eFxp.jpeg",
    ],
    site: "@aizu_brand_kan",
    creator: "@aizu_brand_kan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aizubrandhall.com/backfat",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JPP8PYH31W" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JPP8PYH31W');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}


import './globals.css'