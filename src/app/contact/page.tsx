'use client'

import { useState } from 'react'
import Link from 'next/link'
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
    console.log('Form submitted:', formData)
    setIsSubmitted(true)

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
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: MessageCircle,
      title: "カジュアル面談",
      description: "キャリアや技術の雑談など",
      action: "気軽にお声がけを",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      icon: Coffee,
      title: "コーヒーチャット",
      description: "対面でのんびりお話ししませんか",
      action: "東京都内で調整可能",
      color: "text-orange-600",
      bg: "bg-orange-50"
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">送信完了！</h2>
            <p className="text-gray-600">
              メッセージありがとうございます！<br />
              24時間以内にお返事させていただきます。
            </p>
          </div>

          <Link href="/" className="btn-secondary inline-flex">
            トップに戻る
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              お話ししましょう
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              新しいプロジェクトのご相談から、ただの雑談まで。<br />
              どんなことでも気軽にお声がけください。
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">連絡方法</h2>
            {contactMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <div key={method.title} className="card">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${method.bg} ${method.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                  <span className="text-xs font-medium text-primary bg-primary-light px-2 py-1 rounded">
                    {method.action}
                  </span>
                </div>
              )
            })}

            <div className="card text-center">
              <h3 className="font-bold text-gray-900 mb-4">SNS</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-full transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-full transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="山田太郎"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="">選択してください</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary justify-center"
                  disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                >
                  <Send className="w-4 h-4 mr-2" />
                  メッセージを送信
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
