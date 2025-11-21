'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Coffee,
  Gamepad2,
  Camera,
  Music,
  BookOpen,
  Code,
  Mail,
  Github,
  Twitter,
  ArrowRight,
  User,
  Briefcase,
  GraduationCap
} from 'lucide-react'
import { AnimatedParagraph } from '@/components/AnimatedParagraph'
import { ReconstructionArea } from '@/components/ReconstructionArea'
import { AntWord } from '@/components/AntWord'
import { useAntAnimation } from '@/hooks/useAntAnimation'

export default function ProfilePage() {
  const { animatingWords, reconstructedText, startAnimation, isAnimating } = useAntAnimation()

  const hobbies = [
    { icon: Coffee, name: "コーヒー", description: "サードウェーブコーヒーを巡るのが趣味。最近はエアロプレスにハマってます" },
    { icon: Gamepad2, name: "ゲーム", description: "インディーゲームが大好き。特にナラティブ系とパズルゲームを好みます" },
    { icon: Camera, name: "写真", description: "街歩きしながらスナップ撮影。日常の「いい感じ」を切り取るのが楽しい" },
    { icon: Music, name: "音楽", description: "ジャンル問わず聴きますが、最近はローファイヒップホップで作業してます" },
    { icon: BookOpen, name: "読書", description: "ビジネス書とSFが中心。最近は認知科学系の本にも興味津々" },
    { icon: Code, name: "プログラミング", description: "趣味でも個人開発。新しい技術を試すのが楽しくて仕方ない" },
  ]

  const skills = [
    {
      category: "プロダクト企画",
      items: [
        { name: "ユーザーリサーチ", level: 90 },
        { name: "競合分析", level: 85 },
        { name: "ジョブ理論", level: 80 },
        { name: "行動設計", level: 75 }
      ],
      color: "bg-blue-500",
    },
    {
      category: "UI/UX",
      items: [
        { name: "Figma", level: 85 },
        { name: "プロトタイピング", level: 80 },
        { name: "ユーザビリティテスト", level: 75 },
        { name: "デザインシステム", level: 70 }
      ],
      color: "bg-pink-500",
    },
    {
      category: "開発",
      items: [
        { name: "React/Next.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Node.js", level: 65 },
        { name: "Firebase", level: 70 }
      ],
      color: "bg-emerald-500",
    },
    {
      category: "データ分析",
      items: [
        { name: "Google Analytics", level: 85 },
        { name: "A/Bテスト", level: 80 },
        { name: "SQL", level: 70 },
        { name: "データビジュアライゼーション", level: 65 }
      ],
      color: "bg-orange-500",
    },
  ]

  const timeline = [
    {
      year: "2024",
      title: "フリーランスPdMとして独立",
      description: "複数のスタートアップでプロダクト開発を支援。企画から実装まで一貫してサポート中。",
      highlight: true
    },
    {
      year: "2022-2023",
      title: "EdTechスタートアップでPdM",
      description: "学習プラットフォームの企画・開発をリード。ユーザー数3倍、継続率40%向上を達成。"
    },
    {
      year: "2020-2022",
      title: "Web制作会社でディレクター",
      description: "クライアントワークを通じてビジネス視点を習得。要件定義からリリースまで20案件以上を担当。"
    },
    {
      year: "2018-2020",
      title: "エンジニアとしてキャリアスタート",
      description: "フロントエンド開発からスタート。技術の楽しさとものづくりの奥深さに目覚める。"
    },
    {
      year: "2018",
      title: "文系大学卒業",
      description: "心理学専攻。人の行動や思考に興味を持ち、それが今のプロダクト設計に活かされています。"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* アリのアニメーション用 */}
      {animatingWords.map((word, index) => (
        <AntWord key={word.id} word={word} delay={index * 0.02} />
      ))}

      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-8">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Profile
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              「役に立たない」が実は一番役に立つ瞬間がある。<br />
              遊び心と仕組みづくりで、ちょっとした驚きをプロダクトに込めています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card relative">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed pb-20">
              <AnimatedParagraph
                className="mb-4"
                onRead={startAnimation}
              >
                文系出身でプログラミングは完全に独学からスタート。最初は「Hello World」すら理解できませんでした。でも作ったものが動く瞬間の感動が忘れられず、気づいたらエンジニアになっていました。
              </AnimatedParagraph>
              <AnimatedParagraph
                className="mb-4"
                onRead={startAnimation}
              >
                開発経験を積む中で「技術って手段だよね」と気づき、ユーザーが本当に欲しいものを作りたくてPdMに転向。心理学専攻だった背景もあって、ユーザー心理を考えるのがとても楽しいです。
              </AnimatedParagraph>
              <AnimatedParagraph
                className="mb-4"
                onRead={startAnimation}
              >
                最近は「技術×デザイン×ビジネス」の交差点でアウトプットすることに夢中。一つの専門分野を極めるより、複数の分野をつなげて価値を生み出すのが自分らしい働き方だと思ってます。
              </AnimatedParagraph>
              <p className="font-medium text-primary">
                「この人と一緒に働いたら楽しそう」と思ってもらえるような人でありたいです！
              </p>
            </div>

            {/* 蟻が運んだ文字で再構築されるエリア */}
            <ReconstructionArea text={reconstructedText} isAnimating={isAnimating} />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-gray-600">幅広くやってますが、特に得意な分野です</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6">{skill.category}</h3>
                <div className="space-y-4">
                  {skill.items.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${skill.color}`}
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline</h2>
            <p className="text-gray-600">これまでの歩み</p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right pt-1">
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-1 pb-8 border-l border-gray-200 pl-8 relative">
                  <div className={`absolute left-0 top-2 w-3 h-3 -translate-x-1.5 rounded-full border-2 border-white ${item.highlight ? 'bg-primary' : 'bg-gray-300'}`} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    {item.title}
                    {item.highlight && (
                      <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full">Current</span>
                    )}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hobbies</h2>
            <p className="text-gray-600">仕事以外の時間はこんなことをして過ごしています</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon
              return (
                <div key={hobby.name} className="card text-center">
                  <IconComponent className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{hobby.name}</h3>
                  <p className="text-sm text-gray-600">{hobby.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">つながりましょう！</h2>
          <p className="text-gray-600 mb-8">
            お仕事のご相談やカジュアルな雑談、どちらも大歓迎です。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              <Mail className="w-4 h-4 mr-2" />
              お問い合わせフォーム
            </Link>

            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
