'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Star, Users, Zap, Target } from 'lucide-react'
import { DegradationCard } from '@/components/DegradationCard'
import { GlitchText } from '@/components/GlitchText'

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
    highlight: "🤖 AI × UX",
    stats: {
      users: "実証実験中",
      rating: "4.9",
      impact: "判断時間50%短縮"
    },
    color: "#0066FF"
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
    highlight: "🛡️ 予防型リスク管理",
    stats: {
      users: "企業向けβ版",
      rating: "4.7",
      impact: "炎上リスク80%削減"
    },
    color: "#FF4081"
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
    highlight: "🥷 学習×エンタメ",
    stats: {
      users: "500+",
      rating: "4.8",
      impact: "学習継続率90%"
    },
    color: "#00E676"
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
    highlight: "📚 教育×テクノロジー",
    stats: {
      users: "800+",
      rating: "4.6",
      impact: "語彙力向上65%"
    },
    color: "#FF9100"
  },
]

export default function WorksPage() {
  return (
    <>
      {/* パフォーマンス最適化用のCSS */}
      <style jsx global>{`
        .degradation-card {
          transform-style: preserve-3d;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .degradation-card * {
          transform-style: preserve-3d;
        }
        
        /* スマホでのパフォーマンス最適化 */
        @media (max-width: 768px) {
          .degradation-card {
            transform-style: flat;
            will-change: auto;
          }
        }
        
        /* 低電力モードでの最適化 */
        @media (prefers-reduced-motion: reduce) {
          .degradation-card {
            animation: none !important;
            transform: none !important;
          }
        }
        
        /* グリッチテキストの最適化 */
        .glitch-text {
          will-change: contents;
        }
        
        @media (max-width: 768px) {
          .glitch-text {
            will-change: auto;
          }
        }
      `}</style>
      <div className="min-h-screen pop-bg-light">
      {/* ヒーローセクション */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <GlitchText className="pop-text">
                作品一覧
              </GlitchText>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <GlitchText glitchConfig={{ intensity: 0.2, interval: { min: 4000, max: 8000 } }}>
                企画から実装まで一貫して携わったプロダクトたちです。
              </GlitchText><br />
              <GlitchText glitchConfig={{ intensity: 0.15, interval: { min: 5000, max: 9000 } }}>
                それぞれの工夫ポイントや学びも一緒にご紹介します 📝
              </GlitchText>
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
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group"
              >
                <DegradationCard
                  className="pop-card h-full"
                  degradationConfig={{
                    delay: 3000 + (index * 1000), // 作品ごとに遅延をずらす
                    intensity: 0.6 + (index * 0.1), // 作品ごとに強度を変える
                    duration: 3 + (index * 0.5) // 作品ごとに周期を変える
                  }}
                >
                  {/* ワークのヘッダー */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">
                          <GlitchText 
                            glitchConfig={{ 
                              intensity: 0.25, 
                              interval: { min: 3000, max: 7000 },
                              delay: 4000 + (index * 500)
                            }}
                          >
                            {work.title}
                          </GlitchText>
                        </h3>
                        <span className="pop-badge text-sm">
                          {work.highlight}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        <GlitchText 
                          glitchConfig={{ 
                            intensity: 0.15, 
                            interval: { min: 4000, max: 8000 },
                            delay: 5000 + (index * 300)
                          }}
                        >
                          {work.description}
                        </GlitchText>
                      </p>
                    </div>
                  </div>

                  {/* 統計情報 */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 pop-card-neutral">
                      <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">
                        <GlitchText 
                          glitchConfig={{ 
                            intensity: 0.2, 
                            interval: { min: 4000, max: 8000 },
                            delay: 5500 + (index * 100)
                          }}
                        >
                          {work.stats.users}
                        </GlitchText>
                      </div>
                      <div className="text-xs text-gray-500">
                        <GlitchText 
                          glitchConfig={{ 
                            intensity: 0.15, 
                            interval: { min: 5000, max: 9000 },
                            delay: 5600 + (index * 100)
                          }}
                        >
                          ユーザー
                        </GlitchText>
                      </div>
                    </div>
                    <div className="text-center p-3 pop-card-neutral">
                      <Star className="w-5 h-5 text-green-600 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">
                        <GlitchText 
                          glitchConfig={{ 
                            intensity: 0.2, 
                            interval: { min: 4000, max: 8000 },
                            delay: 5700 + (index * 100)
                          }}
                        >
                          {work.stats.rating}
                        </GlitchText>
                      </div>
                      <div className="text-xs text-gray-500">
                        <GlitchText 
                          glitchConfig={{ 
                            intensity: 0.15, 
                            interval: { min: 5000, max: 9000 },
                            delay: 5800 + (index * 100)
                          }}
                        >
                          評価
                        </GlitchText>
                      </div>
                    </div>
                    <div className="text-center p-3 pop-card-neutral">
                      <Zap className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900 text-xs">
                        <GlitchText 
                          glitchConfig={{ 
                            intensity: 0.2, 
                            interval: { min: 4000, max: 8000 },
                            delay: 5900 + (index * 100)
                          }}
                        >
                          {work.stats.impact}
                        </GlitchText>
                      </div>
                    </div>
                  </div>

                  {/* PdMスキルタグ */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-800 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      <GlitchText 
                        glitchConfig={{ 
                          intensity: 0.2, 
                          interval: { min: 5000, max: 10000 },
                          delay: 6000 + (index * 400)
                        }}
                      >
                        PdMとしての工夫ポイント
                      </GlitchText>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="pop-badge-neutral text-sm"
                        >
                          <GlitchText 
                            glitchConfig={{ 
                              intensity: 0.3, 
                              interval: { min: 4000, max: 9000 },
                              delay: 7000 + (index * 200) + (tagIndex * 100)
                            }}
                          >
                            {tag}
                          </GlitchText>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 技術スタック */}
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-800 mb-3">
                      <GlitchText 
                        glitchConfig={{ 
                          intensity: 0.2, 
                          interval: { min: 6000, max: 12000 },
                          delay: 8000 + (index * 300)
                        }}
                      >
                        技術スタック
                      </GlitchText>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {work.techStack.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="pop-badge-neutral text-sm"
                        >
                          <GlitchText 
                            glitchConfig={{ 
                              intensity: 0.25, 
                              interval: { min: 5000, max: 11000 },
                              delay: 9000 + (index * 150) + (techIndex * 80)
                            }}
                          >
                            {tech}
                          </GlitchText>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* アクションボタン */}
                  <div className="flex space-x-3">
                    <Link
                      href={`/works/${work.id}`}
                      className="flex-1 pop-button text-center flex items-center justify-center space-x-2 group"
                    >
                      <GlitchText 
                        glitchConfig={{ 
                          intensity: 0.3, 
                          interval: { min: 3000, max: 8000 },
                          delay: 10000 + (index * 200)
                        }}
                      >
                        詳細を見る
                      </GlitchText>
                      <ArrowRight className="w-4 h-4 hover-translate" />
                    </Link>
                    <a
                      href={work.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pop-button-white flex items-center justify-center group"
                      style={{ padding: '0.75rem' }}
                    >
                      <ExternalLink className="w-4 h-4 hover-scale" />
                    </a>
                    <a
                      href={work.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pop-button-white flex items-center justify-center group"
                      style={{ padding: '0.75rem' }}
                    >
                      <Github className="w-4 h-4 hover-scale" />
                    </a>
                  </div>
                </DegradationCard>
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
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              <GlitchText 
                glitchConfig={{ 
                  intensity: 0.2, 
                  interval: { min: 6000, max: 12000 },
                  delay: 12000
                }}
              >
                他にもお見せできる作品があります
              </GlitchText>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              <GlitchText 
                glitchConfig={{ 
                  intensity: 0.15, 
                  interval: { min: 7000, max: 13000 },
                  delay: 13000
                }}
              >
                NDAの関係で公開できない企業案件などもあります。
              </GlitchText><br />
              <GlitchText 
                glitchConfig={{ 
                  intensity: 0.15, 
                  interval: { min: 8000, max: 14000 },
                  delay: 14000
                }}
              >
                詳しくはお話しする機会があればお聞かせします！
              </GlitchText>
            </p>
            <Link
              href="/contact"
              className="pop-button inline-flex items-center space-x-2 group"
            >
              <GlitchText 
                glitchConfig={{ 
                  intensity: 0.25, 
                  interval: { min: 5000, max: 10000 },
                  delay: 15000
                }}
              >
                お問い合わせ
              </GlitchText>
              <ArrowRight className="w-5 h-5 hover-translate" />
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}
