'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Rocket, Heart } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                Product Manager Portfolio
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-8 text-balance">
                遊び心と仕組みづくりで<br />
                <span className="text-primary">サービスを形にする</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
                企画から実装まで一貫して担当し、ユーザーに愛されるプロダクトを作り続けています。
                データと直感の両輪で、価値ある体験を届けます。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/works"
                  className="btn-primary group"
                >
                  <span>作品を見る</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/profile"
                  className="btn-secondary"
                >
                  プロフィール
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-70" />
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              大切にしている価値観
            </h2>
            <p className="text-lg text-gray-600">
              機能を作るだけでなく、体験そのものをデザインします
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "遊び心",
                description: "堅苦しくない、使っていて楽しいUI/UXを心がけています。ちょっとした驚きや発見があるプロダクトが好きです。",
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
              {
                icon: Rocket,
                title: "仕組みづくり",
                description: "単発の改善ではなく、継続的に価値を生み出せる仕組みを作ることを重視しています。",
                color: "text-teal-600",
                bg: "bg-teal-50",
              },
              {
                icon: Heart,
                title: "ユーザー視点",
                description: "データも大切ですが、実際にユーザーの声を聞いて、本当に求められているものを作りたいと思っています。",
                color: "text-rose-600",
                bg: "bg-rose-50",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            一緒に新しい価値を作りませんか？
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            新しいアイデアや相談事があれば、お気軽にお声がけください。
          </p>
          <Link
            href="/contact"
            className="btn-primary text-lg px-8 py-4"
          >
            お話ししましょう
          </Link>
        </div>
      </section>
    </div>
  )
}
