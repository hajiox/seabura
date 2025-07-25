"use client"

import Image from "next/image"
import { useEffect } from "react"
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import SharedLayout from "@/components/shared-layout"
import Link from "next/link"
import Section from "@/components/section"

export default function PorkBackfatLanding() {
  useEffect(() => {
    // Google Analytics page view tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-JPP8PYH31W", {
        page_title: "プロ仕様無添加背脂 - 会津ブランド館",
        page_location: window.location.href,
      })
    }
  }, [])

  const handlePurchaseClick = (size: string, marketplace: string) => {
    console.log(`Purchase clicked: ${size} - ${marketplace}`)

    // Google Analytics event tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "purchase_click", {
        event_category: "ecommerce",
        event_label: `${size}_${marketplace}`,
        value: size === "backfat" ? 1250 : 0,
      })
    }
  }

  return (
    <SharedLayout>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-WNpkIVsmaKvjy54WoU1HqGC7CJARsP.jpeg"
          alt="背脂入りラーメン - プロ仕様の無添加背脂"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Title Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 text-base font-semibold bg-amber-800 text-white hover:bg-amber-900">
            プロ仕様の品質
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            プロ仕様の"無添加背脂"を、
            <br />
            あなたのラーメンに。
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            国産豚100％使用。レトルト殺菌済みで常温1年保存可能。ご家庭でも、業務用でも。こってり派が待ち望んだ、"本物の背脂"をお届けします。
          </p>
        </div>
      </section>

      {/* Features Section (New Design) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">選ばれる6つの理由</h2>
            <div className="w-24 h-1 bg-amber-800 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                image: "/images/pig-shield-transparent.png",
                title: "国産豚100％・完全無添加",
                description: "安心・安全な国産豚のみを使用。添加物は一切不使用で、豚本来の旨味を純粋に味わえます。",
              },
              {
                image: "/images/clock-storage-transparent.png",
                title: "常温保存で賞味期限1年",
                description: "レトルト殺菌済みで、未開封なら1年間常温保存可能。冷蔵庫のスペースを取りません。",
              },
              {
                image: "/images/steam-pouch-transparent.png",
                title: "調理不要で衛生的",
                description: "レトルトパウチなので衛生的。温めるだけですぐに使え、調理の手間を大幅に削減します。",
              },
              {
                image: "/images/ramen-bowl-transparent.png",
                title: "すべてのスープに相性抜群",
                description: "醤油・塩・味噌・豚骨など、どんなスープにも深みとコクを与え、味のレベルを引き上げます。",
              },
              {
                image: "/images/microwave-transparent.png",
                title: "湯煎・レンジで簡単調理",
                description: "湯煎3分、または容器に移してレンジで1分。いつでも手軽に本格的な背脂を楽しめます。",
              },
              {
                image: "/images/camping-tent-transparent.png",
                title: "備蓄・キャンプにも最適",
                description: "常温で長期保存できるため、非常食やアウトドアシーンでも本格ラーメンを再現できます。",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-stone-100"
              >
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section (New Design) */}
      <section className="py-24 bg-stone-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%83%8C%E8%84%82%EF%BC%88%E3%83%AC%E3%83%B3%E3%82%B2%EF%BC%89-01.jpg-zztRQhTCoOQm0yoPLHRycri0yBgYLc.jpeg"
                alt="レンゲに乗った背脂"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                この一さじで、
                <br />
                スープが店の味になる。
              </h2>
              <p className="text-lg text-stone-300 leading-relaxed">
                業務用にも使われる国産豚の無添加背脂を、使いやすい個包装でご提供。カップ麺はもちろん、飲食店のスープや炒め物にも"ひと手間以上の味"を。常温保存・時短調理で、家庭でも厨房でも活躍します。
              </p>
              <div className="flex gap-3 pt-4">
                <Badge variant="outline" className="text-sm border-stone-500 text-stone-200">
                  簡単調理
                </Badge>
                <Badge variant="outline" className="text-sm border-stone-500 text-stone-200">
                  プロの味
                </Badge>
                <Badge variant="outline" className="text-sm border-stone-500 text-stone-200">
                  個包装
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Backfat Section (New Design) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">豚背脂とは？</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
              <strong>豚の背中の脂肪部分（皮の下）</strong>を指します。ラード（精製脂）と違って、
              <strong>あらごしの脂身（塊や粒が残った状態）</strong>をそのまま使用するのが特徴です。
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              スープに溶け出すことで、深いコクとまろやかな口当たり、そして豊かな風味を生み出します。
            </p>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden max-w-5xl mx-auto mt-12 shadow-lg">
            <Image
              src="/images/ramen-with-backfat-closeup.png"
              alt="背脂がたっぷり入ったラーメンのクローズアップ"
              fill
              className="object-contain bg-white"
            />
          </div>

          <div className="max-w-4xl mx-auto mt-24">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-16">背脂がラーメンを美味しくする理由</h3>
            <div className="space-y-8">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4">コク (旨味の層) を増す</h4>
                <p className="text-gray-700 leading-relaxed">
                  背脂は「アミノ酸」「脂肪酸」「コラーゲン分解物」を含み、スープの旨味を物理的にも化学的にも"厚く"します。
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4">スープの熱を逃さず、口当たりがまろやかに</h4>
                <p className="text-gray-700 leading-relaxed">
                  脂の膜がスープ表面を覆い冷めにくくし、口に入れた瞬間、トロッとした"まろみ"が舌に残ります。
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4">味の一体感とパンチを出す</h4>
                <p className="text-gray-700 leading-relaxed">
                  背脂がタレ・出汁・香味油を"まとめる"潤滑剤のように働き、スープに粘度と深みが生まれます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lineup Section (Updated to 3 products) */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            商品ラインナップ
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {/* Individual Product - 8 pieces */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <div className="relative aspect-square w-full bg-gray-100">
                <Image
                  src="/images/product-individual-8pack.jpg"
                  alt="ラーメン用背脂 8個パック"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-800">【個人向け】ラーメン用 国産豚背脂</h3>
                <p className="text-gray-500 mb-4">80g×8個</p>
                <div className="text-2xl sm:text-3xl font-bold text-amber-900 mb-1">1,250円</div>
                <p className="text-gray-600 mb-6">（税込・送料込）</p>
                <div className="space-y-2 mb-6 flex-grow text-sm">
                  {[
                    "内容量：640g（80g×8個）",
                    "保存：常温保存OK（製造より1年）",
                    "用途：カップ麺、家ラーメンに",
                    "原材料：国産豚背脂のみ（完全無添加）",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-amber-800 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Family Product - 24 pieces */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <div className="relative aspect-square w-full bg-gray-100">
                <Image
                  src="/images/product-24pack.jpg"
                  alt="ラーメン用背脂 24個パック"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-800">【ファミリー向け】ラーメン用 国産豚背脂</h3>
                <p className="text-gray-500 mb-4">80g×24個</p>
                <div className="text-2xl sm:text-3xl font-bold text-amber-900 mb-1">3,200円</div>
                <p className="text-gray-600 mb-6">（税込・送料込）</p>
                <div className="space-y-2 mb-6 flex-grow text-sm">
                  {[
                    "内容量：1,920g（80g×24個）",
                    "保存：常温保存OK（製造より1年）",
                    "用途：まとめ買い、備蓄に最適",
                    "お得：8個入りより約20%お得",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-amber-800 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Product - 10kg */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <div className="relative aspect-square w-full bg-gray-100">
                <Image
                  src="/images/product-business-10kg.jpg"
                  alt="業務用ラーメン用背脂 10kg"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-800">【業務用】ラーメン用 背脂パック</h3>
                <p className="text-gray-500 mb-4">1kg×10袋</p>
                <div className="text-2xl sm:text-3xl font-bold text-amber-900 mb-1">6,500円</div>
                <p className="text-gray-600 mb-6">（税込・送料込）</p>
                <div className="space-y-2 mb-6 flex-grow text-sm">
                  {[
                    "内容量：10kg（1kgパック×10袋）",
                    "コスト：1食あたり約52円（80cc使用時）",
                    "特徴：レトルト殺菌済み・常温保存OK",
                    "効率：冷蔵スペース不要で厨房効率アップ",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-amber-800 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping and delivery banners */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="relative aspect-[3/1]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-01.jpg-Cu0IOjGEKEB51dDMBnsffDMmo59Bx6.jpeg"
                alt="送料無料 沖縄・離島地域除く"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[3/1]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-01.jpg-wOKkqTWzDlls8YLUgTUIE8RN6gCKB0.jpeg"
                alt="14時までのご注文で即日発送"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション (Reverted to original) */}
      <Section id="reviews" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">お客様の声</h2>
          <div className="space-y-6">
            {[
              {
                source: "Amazon",
                comment:
                  '二郎系の再現度が高い！にんにく＋この背脂で、家ラーメンが二郎になった（笑）ただ、個人的にはもう少し"味付き"タイプも選べると嬉しい。',
                rating: 4,
              },
              {
                source: "Amazon",
                comment: "防災用品として購入しましたが、普段使いでも重宝しています。レトルトなので安心ですね。",
                rating: 4,
              },
              {
                source: "Amazon",
                comment:
                  "白ごはんにのせても美味しかった。試しに背脂をご飯にのせて醤油を垂らしたら…ヤバい旨さ。罪の味だけどまたやると思う（笑）",
                rating: 4,
              },
              {
                source: "Amazon",
                comment: "キャンプで使いました。お湯で温めるだけで本格的な背脂ラーメンが作れて感動しました。",
                rating: 4,
              },
            ].map((review, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/images/customer-avatar.jpg"
                        alt={`お客様 ${i + 1} のアバター`}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <span>お客様 {i + 1}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="italic">&quot;{review.comment}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section (Reverted to original) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">よくあるご質問</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3 text-gray-900">本当に常温保存できますか？</h3>
              <p className="text-gray-700">
                はい。レトルト殺菌済みのため、未開封であれば常温で1年間保存できます（発送時点で9ヶ月以上のものをお届け）。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3 text-gray-900">開封後はどうすればいいですか？</h3>
              <p className="text-gray-700">
                開封後は冷蔵庫で保管し、できるだけ当日中にご使用ください。使いきれない場合は、小分け冷凍も可能です（特に1kgパックは業務用冷凍がおすすめです）。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3 text-gray-900">個包装1袋で何人分ですか？</h3>
              <p className="text-gray-700">
                80gで約1〜2人分。こってり系が好きな方なら1人前、控えめにしたい場合は2人で分けて使えます。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3 text-gray-900">どんな料理に使えますか？</h3>
              <p className="text-gray-700">
                ラーメンはもちろん、チャーハン、もやし炒め、鍋料理、白ご飯のトッピングにも活用できます。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3 text-gray-900">背脂が固まっているけど正常？</h3>
              <p className="text-gray-700">
                はい、常温でも白く固まるのは脂の特性です。品質には問題ありません。温めるとすぐに元のとろみが戻ります。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3 text-gray-900">加熱方法は？</h3>
              <p className="text-gray-700">
                湯煎で3〜5分、または耐熱容器に移して電子レンジで軽く加熱してください。※ぐつぐつ沸騰させないのがポイントです。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3 text-gray-900">アレルギーや添加物は？</h3>
              <p className="text-gray-700">
                原材料は国産豚の背脂のみ。無添加・無香料・無保存料なので、安心してご使用いただけます。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3 text-gray-900">飲食店向けの使い方は？</h3>
              <p className="text-gray-700">
                1kgパックはスープのベースや背脂増し用に便利。仕込みの手間を省けるうえ、常温保存でスペースも節約できます。小分け冷凍しておくとロスも防げます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section (Bottom) (Reverted to original) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-6">ご購入はこちらから</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Yahoo!ショッピング */}
            <div className="bg-[#ffdddd] p-6">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("backfat", "yahoo")}
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-MEP8aX6vdnhkm0MalTPsgcj8jbQqA0.png"
                    alt="Yahoo!ショッピング"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mt-4 mb-2 text-center">Yahoo!ショッピング</h4>
              <p className="text-sm text-center">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
            </div>

            {/* 楽天市場 */}
            <div className="bg-[#deeeff] p-6">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("backfat", "rakuten")}
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-991Pc669KycdDKQBzO5S93EuS2I3kg.png"
                    alt="楽天市場"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mt-4 mb-2 text-center">楽天市場</h4>
              <p className="text-sm text-center">楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
            </div>

            {/* Amazon */}
            <div className="bg-[#e8ffdd] p-6">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("backfat", "amazon")}
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-mAXYlXivqE7kA5DfbJhHMDX5hkPVNJ.png"
                    alt="Amazon"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mt-4 mb-2 text-center">Amazon</h4>
              <p className="text-sm text-center">世界最大のショッピングモールでのお買い物はこちら</p>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}
