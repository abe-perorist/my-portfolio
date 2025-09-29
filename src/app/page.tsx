'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Rocket, Heart } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-accent-blue/5">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* メインキャッチコピー */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex justify-center mb-8">
                <motion.div
                  className="relative"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-accent-blue to-accent-green rounded-full flex items-center justify-center shadow-fun">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                </motion.div>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
                <span className="block">遊び心と仕組みづくりで</span>
                <span className="block gradient-text mt-2">サービスを形にする</span>
                <span className="block text-3xl sm:text-5xl mt-4">PdM</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                企画から実装まで一貫して担当し、<br className="sm:hidden" />
                ユーザーに愛されるプロダクトを作り続けています 🚀
              </p>
            </motion.div>

            {/* CTAボタン */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/works"
                className="fun-button flex items-center space-x-2 group"
              >
                <span>作品を見る</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                href="/profile"
                className="px-8 py-3 border-2 border-gray-300 rounded-full text-gray-700 font-medium hover:border-accent-blue hover:text-accent-blue transition-colors duration-200 flex items-center space-x-2 group"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>プロフィール</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 背景装飾 */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              こんなことを大切にしています
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ただ機能を作るだけじゃなく、ユーザーの心に響くサービスを目指しています
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "遊び心",
                description: "堅苦しくない、使っていて楽しいUIUXを心がけています。ちょっとした驚きや発見があるプロダクトが好きです。",
                color: "from-accent-blue to-blue-400",
              },
              {
                icon: Rocket,
                title: "仕組みづくり",
                description: "単発の改善ではなく、継続的に価値を生み出せる仕組みを作ることを重視しています。",
                color: "from-accent-green to-green-400",
              },
              {
                icon: Heart,
                title: "ユーザー視点",
                description: "データも大切ですが、実際にユーザーの声を聞いて、本当に求められているものを作りたいと思っています。",
                color: "from-accent-orange to-red-400",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="fun-card p-8 text-center group hover:scale-105"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-gradient-to-r from-accent-blue via-accent-green to-accent-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              一緒に何か面白いことしませんか？
            </h2>
            <p className="text-xl mb-8 opacity-90">
              新しいアイデアや相談事があれば、気軽にお声がけください！
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-accent-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200 group"
            >
              <span>お話ししましょう</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
