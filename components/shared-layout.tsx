import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

interface SharedLayoutProps {
  children: React.ReactNode
}

export default function SharedLayout({ children }: SharedLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ヘッダー */}
      <header className="bg-white py-6">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%80%90%E9%AB%98%E8%A7%A3%E5%83%8F%E5%BA%A6%E3%80%91%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E6%96%B0%E3%83%AD%E3%82%B4%E3%80%90%E9%BB%92%E3%80%91.jpg-jGJwCa3HfNXU3pXG4DdPG8tGgUUWid.jpeg"
            alt="AIZU BRAND HALL"
            width={200}
            height={200}
            className="h-20 w-auto"
            priority
          />
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow">{children}</main>

      {/* 店舗情報セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-2 md:px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8 px-4">
            この商品は「会津ブランド館」が製造・販売・発送を行っています。
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%EF%BC%88%E3%83%AC%E3%82%BF%E3%83%83%E3%83%81%EF%BC%89_R.jpg-DdghFZHiPvLCbYlDmYAYk1ty5CB0Pn.jpeg"
                alt="会津ブランド館 店舗外観"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-2">店舗案内</h3>
              <div className="space-y-2">
                <p className="font-bold">会津ブランド館</p>
                <p>〒965-0044</p>
                <p>福島県会津若松市七日町6−15</p>
                <p>TEL: 0242-25-4141</p>
                <p>営業時間: 11時〜16時</p>
                <p>定休日: 12月31日・1月1日</p>
                <p className="text-sm text-gray-600">（発送もお休みさせて頂きます）</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="aspect-[16/9] w-[70%] mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.744914857655!2d139.9291543!3d37.4977777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8aaa5961ea738b%3A0x4a6c5d39e7d27eb!2z44CSOTYzLTAwNDQg56aP5bO255yM5Lya5rSl6IyF5p2-5biC5LiD5pel55S677yW4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1709697431099!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* SNSリンク */}
          <div className="flex justify-center space-x-6 mt-8">
            <Link
              href="https://www.facebook.com/aizubrandkan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <Facebook size={32} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://x.com/Aizu_Brand_Kan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <span className="sr-only">X (formerly Twitter)</span>
            </Link>
            <Link
              href="https://www.instagram.com/aizubrandhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600"
            >
              <Instagram size={32} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCpusPn2NlWyrgkIMbacH4-w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600"
            >
              <Youtube size={32} />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 AIZU BRAND HALL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
