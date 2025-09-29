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
  MapPin,
  Calendar,
  Mail,
  Github,
  Twitter,
  ArrowRight,
  Heart,
  Smile,
  Zap
} from 'lucide-react'

export default function ProfilePage() {
  const hobbies = [
    { icon: Coffee, name: "コーヒー", description: "サードウェーブコーヒーを巡るのが趣味。最近はエアロプレスにハマってます ☕" },
    { icon: Gamepad2, name: "ゲーム", description: "インディーゲームが大好き。特にナラティブ系とパズルゲームを好みます 🎮" },
    { icon: Camera, name: "写真", description: "街歩きしながらスナップ撮影。日常の「いい感じ」を切り取るのが楽しい 📷" },
    { icon: Music, name: "音楽", description: "ジャンル問わず聴きますが、最近はローファイヒップホップで作業してます 🎵" },
    { icon: BookOpen, name: "読書", description: "ビジネス書とSFが中心。最近は認知科学系の本にも興味津々 📚" },
    { icon: Code, name: "プログラミング", description: "趣味でも個人開発。新しい技術を試すのが楽しくて仕方ない 💻" },
  ]

  const skills = [
    { category: "プロダクト企画", items: ["ユーザーリサーチ", "競合分析", "ジョブ理論", "行動設計"], color: "from-blue-500 to-cyan-500" },
    { category: "UI/UX", items: ["Figma", "プロトタイピング", "ユーザビリティテスト", "デザインシステム"], color: "from-purple-500 to-pink-500" },
    { category: "開発", items: ["React/Next.js", "TypeScript", "Node.js", "Firebase"], color: "from-green-500 to-emerald-500" },
    { category: "データ分析", items: ["Google Analytics", "A/Bテスト", "SQL", "データビジュアライゼーション"], color: "from-orange-500 to-red-500" },
  ]

  const timeline = [
    {
      year: "2024",
      title: "フリーランスPdMとして独立",
      description: "複数のスタートアップでプロダクト開発を支援。企画から実装まで一貫してサポート中 🚀",
      highlight: true
    },
    {
      year: "2022-2023",
      title: "EdTechスタートアップでPdM",
      description: "学習プラットフォームの企画・開発をリード。ユーザー数3倍、継続率40%向上を達成 📈"
    },
    {
      year: "2020-2022",
      title: "Web制作会社でディレクター",
      description: "クライアントワークを通じてビジネス視点を習得。要件定義からリリースまで20案件以上を担当 💼"
    },
    {
      year: "2018-2020",
      title: "エンジニアとしてキャリアスタート",
      description: "フロントエンド開発からスタート。技術の楽しさとものづくりの奥深さに目覚める ⚡"
    },
    {
      year: "2018",
      title: "文系大学卒業",
      description: "心理学専攻。人の行動や思考に興味を持ち、それが今のプロダクト設計に活かされています 🧠"
    }
  ]

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
            {/* プロフィール画像 */}
            <motion.div
              className="relative w-32 h-32 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-gradient-to-r from-accent-blue to-accent-green rounded-full flex items-center justify-center shadow-fun">
                <Smile className="w-16 h-16 text-white" />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-orange rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                <span className="gradient-text">こんにちは！</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                プロダクトを通じて人の生活をちょっと豊かにするのが好きなPdMです 😊<br />
                技術も、デザインも、ビジネスも全部ちょっとずつかじってます
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>東京都</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>フリーランス PdM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="w-4 h-4" />
                <span>コーヒー好き</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 自己紹介 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">ざっくり自己紹介</h2>
            <div className="bg-gray-50 rounded-2xl p-8 text-left max-w-3xl mx-auto">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  文系出身でプログラミングは完全に独学からスタート。最初は「Hello World」すら理解できませんでした 😅<br />
                  でも作ったものが動く瞬間の感動が忘れられず、気づいたらエンジニアになっていました。
                </p>
                <p>
                  開発経験を積む中で「技術って手段だよね」と気づき、ユーザーが本当に欲しいものを作りたくてPdMに転向。<br />
                  心理学専攻だった背景もあって、ユーザー心理を考えるのがめちゃくちゃ楽しいです。
                </p>
                <p>
                  最近は「技術×デザイン×ビジネス」の交差点でアウトプットすることに夢中。<br />
                  一つの専門分野を極めるより、複数の分野をつなげて価値を生み出すのが自分らしい働き方だと思ってます ✨
                </p>
                <p className="text-accent-blue font-medium">
                  「この人と一緒に働いたら楽しそう」と思ってもらえるような人でありたいです！
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 趣味・興味 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">趣味・好きなこと</h2>
            <p className="text-lg text-gray-600">仕事以外の時間はこんなことをして過ごしています</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon
              return (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="fun-card p-6 text-center hover:scale-105"
                >
                  <IconComponent className="w-8 h-8 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{hobby.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{hobby.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* スキル */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">できること</h2>
            <p className="text-lg text-gray-600">幅広くやってますが、特に得意な分野です</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-3 h-3 bg-gradient-to-r ${skill.color} rounded-full`} />
                  <h3 className="text-xl font-bold text-gray-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white text-gray-700 text-sm rounded-lg border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 経歴タイムライン */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">これまでの歩み</h2>
            <p className="text-lg text-gray-600">いろいろ寄り道しながらここまで来ました</p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    item.highlight 
                      ? 'bg-gradient-to-r from-accent-blue to-accent-green shadow-fun' 
                      : 'bg-gray-400'
                  }`}>
                    {item.highlight ? <Zap className="w-6 h-6" /> : item.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-soft">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-medium text-accent-blue">{item.year}</span>
                    {item.highlight && (
                      <span className="px-2 py-1 bg-accent-blue/10 text-accent-blue text-xs font-medium rounded-full">
                        現在
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 連絡先・SNS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">つながりましょう！</h2>
            <p className="text-lg text-gray-600 mb-8">
              お仕事のご相談やカジュアルな雑談、どちらも大歓迎です 🙌
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/contact"
                className="fun-button flex items-center space-x-2 group"
              >
                <Mail className="w-5 h-5" />
                <span>お問い合わせフォーム</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <div className="flex space-x-4">
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

            <p className="text-sm text-gray-500">
              気軽にDMください！レスポンスは早めを心がけています ⚡
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
