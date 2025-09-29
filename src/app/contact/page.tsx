'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  Mail, 
  MessageCircle, 
  Heart, 
  Coffee, 
  Twitter, 
  Github, 
  CheckCircle,
  Sparkles
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際の送信処理を行う（例：API呼び出し）
    console.log('フォーム送信:', formData)
    setIsSubmitted(true)
    
    // 5秒後にリセット（デモ用）
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 5000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "メール",
      description: "お仕事のご相談やプロジェクトについて",
      action: "フォームから送信",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "カジュアル面談",
      description: "キャリアや技術の雑談など",
      action: "気軽にお声がけを",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Coffee,
      title: "コーヒーチャット",
      description: "対面でのんびりお話ししませんか",
      action: "東京都内で調整可能",
      color: "from-orange-500 to-red-500"
    }
  ]

  const subjectOptions = [
    "お仕事のご相談",
    "プロジェクトのご依頼",
    "カジュアル面談",
    "技術的な質問",
    "その他"
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-accent-blue/5 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-md mx-auto px-4"
        >
          <motion.div
            className="w-24 h-24 bg-gradient-to-r from-accent-green to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-fun-green"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">送信完了！</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              メッセージありがとうございます！<br />
              24時間以内にお返事させていただきますね 😊
            </p>
          </div>

          <motion.div
            className="inline-flex items-center space-x-2 text-accent-blue"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-5 h-5" />
            <span className="font-medium">お楽しみに！</span>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-accent-blue/5">
      {/* ヒーローセクション */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                className="relative"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-accent-blue to-accent-green rounded-full flex items-center justify-center shadow-fun">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                <span className="gradient-text">お話ししましょう！</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                新しいプロジェクトのご相談から、ただの雑談まで<br />
                どんなことでも気軽にお声がけください 🙌
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 連絡方法 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">こんな感じでお話しできます</h2>
            <p className="text-lg text-gray-600">お好みの方法でお気軽にどうぞ</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="fun-card p-8 text-center hover:scale-105"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                  <div className="text-sm font-medium text-accent-blue bg-accent-blue/10 px-3 py-2 rounded-full">
                    {method.action}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせフォーム</h2>
            <p className="text-lg text-gray-600">下記フォームからお気軽にご連絡ください</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-soft"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-colors duration-200"
                  placeholder="山田太郎"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* 件名 */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  件名 <span className="text-accent-orange">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-colors duration-200"
                >
                  <option value="">選択してください</option>
                  {subjectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* メッセージ */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  メッセージ <span className="text-accent-orange">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-colors duration-200 resize-none"
                  placeholder="お気軽にメッセージをどうぞ！&#10;&#10;・プロジェクトの概要&#10;・ご相談内容&#10;・希望する開始時期&#10;&#10;など、どんなことでも大丈夫です 😊"
                />
              </div>

              {/* 送信ボタン */}
              <motion.button
                type="submit"
                className="w-full fun-button flex items-center justify-center space-x-2 group py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                <span>メッセージを送信</span>
              </motion.button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500 mb-4">
                SNSからでもお気軽にご連絡ください
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-gray-300 rounded-full text-gray-700 hover:border-accent-blue hover:text-accent-blue transition-colors duration-200 group"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-gray-300 rounded-full text-gray-700 hover:border-accent-blue hover:text-accent-blue transition-colors duration-200 group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* フレンドリーCTA */}
      <section className="py-16 bg-gradient-to-r from-accent-blue via-accent-green to-accent-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              まずは気軽にお話ししませんか？
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              「こんなこと聞いていいのかな？」と思わず、<br />
              どんな小さなことでもお気軽にご相談ください。<br />
              お返事は24時間以内を心がけています ⚡
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <Coffee className="w-6 h-6" />
              <span>コーヒーでも飲みながら、のんびりお話ししましょう</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
