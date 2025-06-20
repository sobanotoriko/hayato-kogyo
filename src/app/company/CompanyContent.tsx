'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

export default function CompanyContent() {
  // フェードインアニメーション設定
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* ヘッダーナビゲーション */}
      <Header />
      
      {/* ページヘッダー */}
      <div className="w-full bg-primary-900 text-white py-40 px-4 text-center pt-40">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          会社概要
        </motion.h1>
        <motion.p 
          className="text-xl max-w-3xl mx-auto mt-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          隼仁工業は長野県を中心に高品質な水道工事・設備工事を提供しています
        </motion.p>
      </div>

      {/* 会社概要セクション */}
      <section className="w-full max-w-5xl mx-auto py-0 px-4 -mt-8">
        <motion.div 
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          {...fadeIn}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">企業情報</h2>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-6 w-1/3 font-semibold text-gray-700">会社名</th>
                    <td className="py-3 text-gray-800 font-medium">隼仁工業</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-700">代表者</th>
                    <td className="py-3 text-gray-800 font-medium">水野仁志</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-700">所在地</th>
                    <td className="py-3 text-gray-800 font-medium">長野県北安曇郡白馬村北城829-17</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-700">電話番号</th>
                    <td className="py-3 text-gray-800 font-medium">090-4859-7375</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-700">メールアドレス</th>
                    <td className="py-3 text-gray-800 font-medium">hiroshi3164@hotmail.com</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-700">設立年</th>
                    <td className="py-3 text-gray-800 font-medium">2005年4月</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-700">事業内容</th>
                    <td className="py-3 text-gray-800 font-medium">給排水設備工事、各種配管工事、業務用エアコン及び一般家庭用ルームエアコン工事</td>
                  </tr>
                  <tr>
                    <th className="text-left py-3 pr-6 font-semibold text-gray-700">許可・資格</th>
                    <td className="py-3 text-gray-800 font-medium">給水装置主任技術者、一級配管技能士、電気工事士2種</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-primary-50 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">私たちの使命</h3>
              <p className="text-gray-700 mb-4">
                隼仁工業は、「地域と共に、水と共に」をモットーに、高品質な給排水設備工事を提供しています。
                常にお客様の視点に立ち、高品質な工事と丁寧なサービスを提供することで、
                地域の皆様の暮らしを支えています。水道トラブルから大規模な設備工事まで、
                幅広いニーズにお応えします。
              </p>
              <div className="mt-4 w-full h-48 relative">
                <Image
                  src="/images/company/mission.jpg"
                  alt="私たちの使命 - 隼仁工業の工事風景"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 代表メッセージ */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4">
        <motion.div 
          className="bg-blue-50 p-8 rounded-lg shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">代表メッセージ</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/4">
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/images/company/president.jpg"
                  alt="代表取締役社長 山田隼人"
                  width={192}
                  height={192}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="mb-4 text-gray-700">
                隼仁工業は、「安心・安全な水環境の提供」を企業理念に掲げ、長野県を中心に給排水設備工事を行っております。
                私たちの目標は、単なる工事会社ではなく、お客様の生活を支える「水のコンシェルジュ」となることです。
              </p>
              <p className="mb-4 text-gray-700">
                設立以来、技術力の向上と誠実な対応を心がけ、多くのお客様からご信頼をいただいてまいりました。
                これからも地域の皆様の快適な暮らしを実現するパートナーとして、社員一同、誠心誠意努めてまいります。
              </p>
              <p className="font-semibold text-right text-gray-800">
                代表取締役社長 山田 隼人
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* アクセスマップ */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4">
        <motion.div 
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 p-8 pb-4">アクセス</h2>
          <div className="p-8 pt-0">
            <p className="mb-4 text-gray-700">
              〒380-0000<br />
              長野県北安曇郡白馬村北城829-17<br />
              TEL: 090-4859-7375<br />
              FAX: 026-123-4568<br />
              E-mail: hiroshi3164@hotmail.com
            </p>
            <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden mt-4">
              <iframe
                src="https://www.google.com/maps?q=長野県北安曇郡白馬村北城829-17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="会社所在地地図"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>

      {/* トップページへ戻るリンク */}
      <div className="w-full text-center py-8">
        <Link href="/" className="inline-block py-3 px-6 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
          トップページへ戻る
        </Link>
      </div>
    </main>
  );
}
