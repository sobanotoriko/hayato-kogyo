'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import { getImagePath } from '../../utils/path';

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
                    <th className="text-left py-3 pr-6 w-1/3 font-semibold text-gray-700">社名</th>
                    <td className="py-3 text-gray-800 font-medium">隼仁工業株式会社</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-700">代表者</th>
                    <td className="py-3 text-gray-800 font-medium">水野仁志</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-700">所在地</th>
                    <td className="py-3 text-gray-800 font-medium">長野県白馬村</td>
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
                    <th className="text-left py-3 pr-6 font-semibold text-gray-700">設立</th>
                    <td className="py-3 text-gray-800 font-medium">2005年</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-700">事業内容</th>
                    <td className="py-3 text-gray-800 font-medium">水道工事、空調設備工事、給排水工事</td>
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
                株式会社隼仁工業は、白馬村を拠点に全国対応で、給排水設備・業務用空調・ボイラー交換など建築設備の工事を手がけています。<br />
                「地域と共に、水と共に」という理念のもと、確かな技術と責任感で、お客様に信頼される施工を追求しています。<br />
                住宅・施設・工場など、規模を問わず対応可能です。水回りのトラブルから機械室の改修まで、私たちにお任せください。
              </p>
              <div className="mt-4 w-full h-48 relative">
                <Image
                  src={getImagePath('/images/company/mission.jpg')}
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
                  src={getImagePath('/images/company/president.jpg')}
                  alt="代表取締役 水野仁志"
                  width={192}
                  height={192}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="mb-4 text-gray-700">
                隼仁工業は、「安心・安全な水環境の提供」を企業理念に、長野県を中心に給排水設備や業務用設備工事を手がけております。<br />
                私たちの目標は、ただの施工業者ではなく、生活や事業を支える「水のコンシェルジュ」として、皆様に信頼される存在であることです。<br /><br />

                創業以来、現場の技術力はもちろんのこと、誠実な対応ときめ細やかなサービスを大切にしてまいりました。<br />
                おかげさまで多くのお客様と長年にわたり信頼関係を築くことができ、社員一同、心より感謝しております。<br /><br />
                これからも白馬村から全国へ、高品質な設備工事を通じて安心できる暮らしを支えてまいります。今後とも隼仁工業をどうぞよろしくお願いいたします。<br /><br />

                ちなみに趣味はゴルフと釣りです。
              </p>
              <p className="font-semibold text-right text-gray-800">
                代表取締役 水野仁志
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
              〒399-9301<br />
              長野県北安曇郡白馬村北城829-17<br />
              TEL: 090-4859-7375<br />
              FAX: 0261-85-8050<br />
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
        <Link 
          href="/" 
          className="inline-block py-3 px-6 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
              window.location.href = '/';
            }, 500); // スムーススクロール後に遷移
          }}
        >
          トップページへ戻る
        </Link>
      </div>
    </main>
  );
}
