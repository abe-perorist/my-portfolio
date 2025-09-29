'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Star, Users, Zap, Target } from 'lucide-react'

// サンプル作品データ（実際のプロジェクトでは外部ファイルやAPIから取得）
const works = [
  {
    id: 1,
    title: "タスク管理アプリ「Focus Flow」",
    description: "ポモドーロテクニックとカンバンボードを組み合わせた、集中力向上のためのタスク管理アプリ",
    image: "/placeholder-work1.jpg", // 実際の画像パスに置き換え
    tags: ["企画から実装まで", "UI/UX設計", "ユーザーテスト実施"],
    techStack: ["Next.js", "TypeScript", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
    highlight: "🎯 企画力アピール",
    stats: {
      users: "500+",
      rating: "4.8",
      impact: "作業効率30%向上"
    },
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "地域コミュニティアプリ「Connect Local」",
    description: "近所の人々をつなぐ地域特化型のコミュニティプラットフォーム。イベント企画から運営まで",
    image: "/placeholder-work2.jpg",
    tags: ["ユーザーリサーチ", "コミュニティ設計", "グロース戦略"],
    techStack: ["React Native", "Firebase", "Google Maps API"],
    demoUrl: "#",
    githubUrl: "#",
    highlight: "🚀 仕組みづくり",
    stats: {
      users: "1,200+",
      rating: "4.6",
      impact: "地域活動参加率50%向上"
    },
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "学習習慣化アプリ「Study Buddy」",
    description: "友達と一緒に学習習慣を続けられるソーシャル学習アプリ。ゲーミフィケーション要素を活用",
    image: "/placeholder-work3.jpg",
    tags: ["行動設計", "ゲーミフィケーション", "データ分析"],
    techStack: ["Vue.js", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    highlight: "💡 ユーザー視点",
    stats: {
      users: "800+",
      rating: "4.7",
      impact: "継続率85%達成"
    },
    color: "from-purple-500 to-pink-500"
  },
]

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-accent-blue/5">
      {/* ヒーローセクション */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">作品一覧</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              企画から実装まで一貫して携わったプロダクトたちです。<br />
              それぞれの工夫ポイントや学びも一緒にご紹介します 📝
            </p>
          </motion.div>
        </div>
      </section>

      {/* 作品グリッド */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="fun-card p-8 h-full">
                  {/* ワークのヘッダー */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{work.title}</h3>
                        <span className="px-3 py-1 bg-gradient-to-r from-accent-blue to-accent-green text-white text-sm font-medium rounded-full">
                          {work.highlight}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{work.description}</p>
                    </div>
                  </div>

                  {/* 統計情報 */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 text-accent-blue mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">{work.stats.users}</div>
                      <div className="text-xs text-gray-500">ユーザー</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Star className="w-5 h-5 text-accent-green mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">{work.stats.rating}</div>
                      <div className="text-xs text-gray-500">評価</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Zap className="w-5 h-5 text-accent-orange mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900 text-xs">{work.stats.impact}</div>
                    </div>
                  </div>

                  {/* PdMスキルタグ */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      PdMとしての工夫ポイント
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-accent-blue/10 text-accent-blue text-sm font-medium rounded-full border border-accent-blue/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 技術スタック */}
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">技術スタック</h4>
                    <div className="flex flex-wrap gap-2">
                      {work.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* アクションボタン */}
                  <div className="flex space-x-3">
                    <Link
                      href={`/works/${work.id}`}
                      className="flex-1 fun-button text-center flex items-center justify-center space-x-2 group"
                    >
                      <span>詳細を見る</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    <a
                      href={work.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 border-2 border-gray-300 rounded-full text-gray-700 hover:border-accent-blue hover:text-accent-blue transition-colors duration-200 flex items-center justify-center group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    </a>
                    <a
                      href={work.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 border-2 border-gray-300 rounded-full text-gray-700 hover:border-accent-blue hover:text-accent-blue transition-colors duration-200 flex items-center justify-center group"
                    >
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              他にもお見せできる作品があります
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              NDAの関係で公開できない企業案件などもあります。<br />
              詳しくはお話しする機会があればお聞かせします！
            </p>
            <Link
              href="/contact"
              className="fun-button inline-flex items-center space-x-2 group"
            >
              <span>お問い合わせ</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
