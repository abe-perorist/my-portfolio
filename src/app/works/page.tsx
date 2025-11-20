'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Star, Users, Zap, Target, Layers } from 'lucide-react'

// サンプル作品データ（実際のプロジェクトでは外部ファイルやAPIから取得）
const works = [
  {
    id: 1,
    title: "Think-Do",
    description: "AI搭載タスク管理システム。思考整理から重要度判断まで、意思決定を支援するプロダクト",
    image: "/works/think-do.jpg",
    tags: ["AI活用", "UX設計", "音声UI", "意思決定支援"],
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Web Speech API"],
    demoUrl: "https://think-do.vercel.app/",
    githubUrl: "https://github.com/abe-perorist/think-do",
    highlight: "AI × UX",
    stats: {
      users: "実証実験中",
      rating: "4.9",
      impact: "判断時間50%短縮"
    },
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "炎上リスク分析ツール",
    description: "企業向けソーシャルメディア投稿のリスク診断システム。予防的リスク管理を実現",
    image: "/works/fire-protect.jpg",
    tags: ["リスク管理", "テキスト分析", "企業向けツール", "予防型ソリューション"],
    techStack: ["Next.js", "TypeScript", "AI分析", "リスクスコアリング"],
    demoUrl: "https://fire-protect-eight.vercel.app/",
    githubUrl: "https://github.com/abe-perorist/fire-protect",
    highlight: "予防型リスク管理",
    stats: {
      users: "企業向けβ版",
      rating: "4.7",
      impact: "炎上リスク80%削減"
    },
    color: "bg-pink-500"
  },
  {
    id: 3,
    title: "計算忍者",
    description: "忍者テーマのゲーミフィケーション学習アプリ。楽しみながら計算力を向上させる",
    image: "/works/keisan-ninja.jpg",
    tags: ["ゲーミフィケーション", "学習支援", "継続性設計", "エンタメ要素"],
    techStack: ["Next.js", "TypeScript", "PWA", "ローカルストレージ"],
    demoUrl: "https://keisan-ninja.vercel.app/",
    githubUrl: "https://github.com/abe-perorist/keisan-ninja",
    highlight: "学習×エンタメ",
    stats: {
      users: "500+",
      rating: "4.8",
      impact: "学習継続率90%"
    },
    color: "bg-emerald-500"
  },
  {
    id: 4,
    title: "ことば道場",
    description: "漢字・語彙学習プラットフォーム。段位システムと制限時間で集中力を最大化",
    image: "/works/kotoba-dojo.jpg",
    tags: ["教育テック", "適応学習", "UI/UX最適化", "成長実感設計"],
    techStack: ["Next.js", "TypeScript", "適応学習AI", "進捗管理"],
    demoUrl: "https://kotoba-dojo.vercel.app/",
    githubUrl: "https://github.com/abe-perorist/kotoba-dojo",
    highlight: "教育×テクノロジー",
    stats: {
      users: "800+",
      rating: "4.6",
      impact: "語彙力向上65%"
    },
    color: "bg-orange-500"
  },
]

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-8">
              <Layers className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              企画から実装まで一貫して携わったプロダクトたちです。<br />
              それぞれの工夫ポイントや学びも一緒にご紹介します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:shadow-md transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {work.title}
                      </h3>
                      <span className="text-xs font-medium bg-primary-light text-primary px-2 py-1 rounded-full">
                        {work.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {work.description}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Users className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                    <div className="text-sm font-bold text-gray-900">
                      {work.stats.users}
                    </div>
                    <div className="text-xs text-gray-500">
                      ユーザー
                    </div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                    <div className="text-sm font-bold text-gray-900">
                      {work.stats.rating}
                    </div>
                    <div className="text-xs text-gray-500">
                      評価
                    </div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Zap className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                    <div className="text-sm font-bold text-gray-900">
                      {work.stats.impact}
                    </div>
                    <div className="text-xs text-gray-500">
                      インパクト
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-gray-400" />
                    PdMとしての工夫ポイント
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">
                    技術スタック
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {work.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs border border-gray-200 text-gray-500 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <Link
                    href={`/works/${work.id}`}
                    className="flex-1 btn-primary justify-center"
                  >
                    詳細を見る
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a
                    href={work.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-500 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                    title="デモサイト"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-500 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            他にもお見せできる作品があります
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            NDAの関係で公開できない企業案件などもあります。<br />
            詳しくはお話しする機会があればお聞かせします！
          </p>
          <Link
            href="/contact"
            className="btn-secondary inline-flex"
          >
            お問い合わせ
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
