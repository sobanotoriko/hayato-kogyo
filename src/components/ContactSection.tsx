'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '../utils/path';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ここに実際のフォーム送信処理を実装
    // 現状はモックの成功レスポンス
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="water-section content-centered relative overflow-hidden">
        <div className="wave-animation absolute -left-20 -bottom-20 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
        <div className="wave-animation absolute right-0 top-10 w-60 h-60 bg-blue-100 rounded-full opacity-20" style={{ animationDelay: '2s' }}></div>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">お問い合わせ</h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto font-medium">水道工事・設備工事のお悩みはお気軽にご相談ください</p>
        <div className="water-divider"></div>
        
        <div className="max-w-5xl mx-auto mt-10 water-card bg-white rounded-xl shadow-xl overflow-hidden backdrop-blur-sm">
          <div className="md:flex relative overflow-hidden">
            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-primary-700 text-white p-10 relative">
              <div className="wave-animation"></div>
              <div className="wave-animation"></div>
              <h3 className="text-2xl font-semibold mb-6 relative z-10 text-gray-100">お気軽にご連絡ください</h3>
              <p className="mb-8 relative z-10 text-gray-200">
                水道工事・設備工事のことなら何でもご相談ください。
                経験豊富な専門スタッフが丁寧にお答えいたします。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-md">
                    <Image src={getImagePath('/images/contact/phone-icon.png')} alt="電話アイコン" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">お電話でのお問い合わせ</h4>
                    <p className="text-lg font-bold text-white">09048597375</p>
                    <p className="text-sm text-gray-200">受付時間: 平日 9:00〜18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-md">
                    <Image src={getImagePath('/images/contact/mail-icon.png')} alt="メールアイコン" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">メールでのお問い合わせ</h4>
                    <p className="text-lg font-bold text-white">hiroshi3164@hotmail.com</p>
                    <p className="text-sm text-gray-200">24時間受付中</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex space-x-4">
                <a href="tel:09048597375" className="bg-blue-100 text-blue-700 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center hover:shadow-lg hover:scale-105 group">
                  <div className="relative w-8 h-8 mr-2 flex items-center justify-center bg-white rounded-full transition-all duration-300">
                    <Image src={getImagePath('/images/phone.png')} alt="電話アイコン" width={24} height={24} />
                  </div>
                  <span className="text-blue-700 group-hover:text-white">電話で相談</span>
                </a>
                <a href="mailto:hiroshi3164@hotmail.com" className="bg-blue-100 text-blue-700 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center hover:shadow-lg hover:scale-105 group">
                  <div className="relative w-8 h-8 mr-2 flex items-center justify-center bg-white rounded-full transition-all duration-300">
                    <Image src={getImagePath('/images/mail.png')} alt="メールアイコン" width={24} height={24} />
                  </div>
                  <span className="text-blue-700 group-hover:text-white">メールで相談</span>
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 p-10 bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">お問い合わせフォーム</h3>
              <div className="water-divider mb-6 w-32"></div>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 mb-6 shadow-inner">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>お問い合わせありがとうございます。担当者より折り返しご連絡いたします。</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">お名前 <span className="text-blue-500">*</span></label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-blue-200 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-blue-50 bg-opacity-50 placeholder-blue-300"
                        placeholder="例: 隼仁 太郎"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400">
                        <Image src={getImagePath('/images/contact/phone-icon.png')} alt="電話アイコン" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">メールアドレス <span className="text-blue-500">*</span></label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-blue-200 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-blue-50 bg-opacity-50 placeholder-blue-300"
                        placeholder="example@email.com"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400">
                        <Image src={getImagePath('/images/contact/mail-icon.png')} alt="メールアイコン" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">電話番号（任意）</label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-blue-200 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-blue-50 bg-opacity-50 placeholder-blue-300"
                        placeholder="例: 090-1234-5678"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400">
                        <Image src={getImagePath('/images/contact/phone-icon.png')} alt="電話アイコン" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">お問い合わせ内容 <span className="text-blue-500">*</span></label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-blue-200 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-blue-50 bg-opacity-50 placeholder-blue-300"
                        placeholder="お問い合わせの内容を入力してください"
                      ></textarea>
                      <div className="absolute top-3 left-3 text-blue-400">
                        <Image src={getImagePath('/images/contact/mail-icon.png')} alt="メッセージアイコン" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-gradient-to-r from-blue-500 to-primary-700 text-white font-medium py-4 px-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed w-full group disabled:hover:scale-100 disabled:hover:shadow-none relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 water-shimmer"></div>
                    <span className="flex items-center justify-center relative z-10">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="text-lg">送信中...</span>
                        </>
                      ) : (
                        <>
                          <Image src={getImagePath('/images/contact/mail-icon.png')} alt="送信アイコン" width={24} height={24} className="mr-2 group-hover:animate-pulse" />
                          <span className="text-lg font-semibold">お問い合わせを送信</span>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
