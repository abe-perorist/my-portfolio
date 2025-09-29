'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Lightbulb, Cog, Zap, Star, Target, CheckCircle } from 'lucide-react'

// サンプル作品詳細データ
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const workDetails: Record<string, any> = {
  "1": {
    title: "タスク管理アプリ「Focus Flow」",
    subtitle: "ポモドーロテクニックとカンバンボードを組み合わせた集中力向上アプリ",
    image: "/placeholder-work1.jpg",
    demoUrl: "#",
    githubUrl: "#",
    period: "2023年4月 - 2023年8月（4ヶ月）",
    role: "PdM（企画・設計・開発・運用）",
    stats: {
      users: "500+",
      rating: "4.8",
      retention: "65%",
      efficiency: "30%向上"
    },
    
    // PdMアピール3要素
    inspiration: {
      title: "着想のきっかけ（課題発見）",
      content: "リモートワークが増える中で、「集中できない」「タスクが散らかる」という声を友人や同僚からよく聞いていました。既存のタスク管理アプリは機能が多すぎて複雑、ポモドーロアプリは単調で飽きやすいという課題を発見。「シンプルだけど飽きない、集中を習慣化できるツール」が必要だと感じました。",
      insights: [
        "ユーザーインタビュー20人実施 → 74%が「既存ツールは複雑すぎる」",
        "行動分析により、集中の阻害要因TOP3を特定",
        "競合分析で機能過多による離脱率の高さを確認"
      ]
    },
    
    planning: {
      title: "企画・設計での工夫と論理",
      content: "「習慣化」をコアバリューに設定し、シンプル×継続性を重視した設計を行いました。ゲーミフィケーション要素を適度に取り入れつつ、本来の目的（集中）を阻害しないバランスを追求。MVPから段階的にリリースし、ユーザーフィードバックを基に改善を重ねました。",
      strategies: [
        "ジョブ理論を活用した機能優先度の決定",
        "認知負荷を下げるシングルタスクフォーカス設計",
        "習慣化心理学を基にした報酬システム設計",
        "A/Bテストによるオンボーディング最適化"
      ]
    },
    
    technology: {
      title: "技術選定の理由",
      content: "スピード重視でNext.js + Supabaseを選択。PWA対応でアプリライクな体験を実現し、リアルタイム同期でマルチデバイス対応を図りました。小さく始めて大きく育てる思想で、スケーラブルな構成を意識しました。",
      decisions: [
        "Next.js → SSGによる高速化とSEO対策を両立",
        "Supabase → 開発速度重視、リアルタイム機能が必須",
        "PWA → ネイティブアプリ並みのUXをWebで実現",
        "Vercel → CI/CDとホスティングの一元化"
      ]
    },

    features: [
      {
        title: "シンプルポモドーロ",
        description: "25分集中 + 5分休憩のサイクルをガイド",
        impact: "集中セッション完了率85%達成"
      },
      {
        title: "ビジュアルカンバン",
        description: "進捗が一目でわかるビジュアル重視の設計",
        impact: "タスク完了率40%向上"
      },
      {
        title: "成長実感システム",
        description: "集中時間の可視化と達成感の演出",
        impact: "継続利用率65%を維持"
      }
    ],

    learnings: [
      "ユーザーインタビューの重要性：想定していない使い方や課題を発見",
      "シンプルさの価値：機能を削ることで使いやすさが向上",
      "習慣化設計：報酬タイミングが継続率に大きく影響",
      "データドリブン：定量データと定性フィードバックの両輪が重要"
    ]
  },
  // 他の作品も同様の構造...
}

export default function WorkDetailPage() {
  const params = useParams()
  const workId = Array.isArray(params.id) ? params.id[0] : params.id
  const work = workId ? workDetails[workId] : null

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">作品が見つかりません</h1>
          <Link href="/works" className="text-accent-blue hover:underline">
            作品一覧に戻る
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-accent-blue/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 戻るボタン */}
            <Link
              href="/works"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-accent-blue transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>作品一覧に戻る</span>
            </Link>

            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {work.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {work.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue text-sm font-medium rounded-full border border-accent-blue/20">
                  {work.period}
                </span>
                <span className="px-3 py-1 bg-accent-green/10 text-accent-green text-sm font-medium rounded-full border border-accent-green/20">
                  {work.role}
                </span>
              </div>

              <div className="flex space-x-4">
                <a
                  href={work.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fun-button inline-flex items-center space-x-2 group"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>デモを見る</span>
                </a>
                <a
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-600 rounded-full text-gray-800 hover:border-accent-blue hover:text-accent-blue hover:bg-accent-blue/5 transition-all duration-200 inline-flex items-center space-x-2 group"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 成果指標 */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">成果・インパクト</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(work.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 rounded-2xl"
                >
                  <div className="text-2xl font-bold text-accent-blue mb-2">{String(value)}</div>
                  <div className="text-sm text-gray-600 capitalize">{key}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PdMアピール3要素 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PdMとしての取り組み</h2>
            <p className="text-lg text-gray-600">企画・設計・実装の各フェーズでの工夫と学びをご紹介します</p>
          </motion.div>

          <div className="space-y-12">
            {/* 着想・課題発見 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{work.inspiration.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{work.inspiration.content}</p>
                  <div className="space-y-2">
                    {work.inspiration.insights.map((insight: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 企画・設計 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{work.planning.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{work.planning.content}</p>
                  <div className="space-y-2">
                    {work.planning.strategies.map((strategy: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 技術選定 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cog className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{work.technology.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{work.technology.content}</p>
                  <div className="space-y-2">
                    {work.technology.decisions.map((decision: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{decision}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 機能・特徴 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">主要機能・特徴</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {work.features.map((feature: any, index: number) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="text-sm font-medium text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
                  {feature.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 学び・改善点 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">学びと次への改善</h2>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="space-y-4">
                {work.learnings.map((learning: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <Star className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{learning}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ナビゲーション */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              href="/works"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-accent-blue transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>作品一覧に戻る</span>
            </Link>
            <Link
              href="/contact"
              className="fun-button inline-flex items-center space-x-2 group"
            >
              <span>この作品について話す</span>
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
