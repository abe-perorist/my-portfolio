'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Lightbulb, Cog, Zap, Star, Target, CheckCircle } from 'lucide-react'

// サンプル作品詳細データ
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const workDetails: Record<string, any> = {
  "1": {
    title: "Think-Do",
    subtitle: "AI搭載タスク管理システム - 思考整理から重要度判断まで、意思決定を支援するプロダクト",
    image: "/works/think-do.jpg",
    demoUrl: "https://think-do.vercel.app/",
    githubUrl: "https://github.com/abe-perorist/think-do",
    period: "2024年8月 - 現在（開発中）",
    role: "PdM（企画・設計・開発・運用）",
    stats: {
      users: "実証実験中",
      rating: "4.9",
      retention: "判断時間50%短縮",
      efficiency: "意思決定精度向上"
    },
    
    // PdMアピール3要素
    inspiration: {
      title: "着想のきっかけ（課題発見）",
      content: "「やりたいことはたくさんあるけど、何から手をつければいいかわからない」「タスクを書き出すのは良いけど、優先度がつけられない」という相談を頻繁に受けていました。既存のタスク管理ツールは「管理」に特化しており、「判断支援」の部分が弱いと感じました。AIの力を借りて、人間の直感と論理的分析を組み合わせた意思決定支援ツールを作りたいと思いました。",
      insights: [
        "ユーザーヒアリング15人実施 → 87%が「優先度付けに悩む」",
        "音声入力のニーズ調査 → 手軽さが継続性のカギ",
        "AI活用に対する心理的障壁の分析と対策検討"
      ]
    },
    
    planning: {
      title: "企画・設計での工夫と論理",
      content: "「思考の外部化」から「AI判断支援」までのフローを一連の体験として設計。音声入力で心理的ハードルを下げ、AIによる質問生成で自己内省を促進。最終的な判断は人間が行うという「AI協働」の思想で、ユーザーの意思決定能力向上を目指しました。",
      strategies: [
        "音声UIによる思考キャプチャの摩擦削減",
        "AI質問生成による構造化思考の促進",
        "段階的開示でAI判断の透明性確保",
        "ユーザー主体の意思決定プロセス設計"
      ]
    },
    
    technology: {
      title: "技術選定の理由",
      content: "AIとの協働体験を重視し、OpenAI APIとWeb Speech APIを組み合わせました。リアルタイム性が重要なため、サーバーサイドでの高速処理とクライアントサイドでの快適な操作感を両立。セキュリティ面でもユーザーデータの暗号化に配慮しました。",
      decisions: [
        "Next.js → AIとの通信最適化とSEO対策",
        "OpenAI API → 高精度な自然言語処理",
        "Web Speech API → 音声入力の実装",
        "Vercel → エッジコンピューティングで低レイテンシ実現"
      ]
    },

    features: [
      {
        title: "音声思考キャプチャ",
        description: "話すだけで思考を記録、文字起こしで即座にテキスト化",
        impact: "入力時間75%短縮"
      },
      {
        title: "AI質問生成",
        description: "コンテキストを理解し、判断に必要な質問を自動生成",
        impact: "判断精度40%向上"
      },
      {
        title: "重要度・緊急度分析",
        description: "アイゼンハワーマトリクスによる科学的な優先度付け",
        impact: "迷い時間50%削減"
      }
    ],

    learnings: [
      "AI UXデザイン：信頼感とコントロール感のバランスが重要",
      "音声UIの設計：エラーハンドリングと誤認識への配慮",
      "意思決定支援：AIが答えを出すのではなく、思考を促進することの価値",
      "プライバシー設計：思考データの扱いには特別な配慮が必要"
    ]
  },
  "2": {
    title: "炎上リスク分析ツール",
    subtitle: "企業向けソーシャルメディア投稿のリスク診断システム - 予防的リスク管理を実現",
    image: "/works/fire-protect.jpg",
    demoUrl: "https://fire-protect-eight.vercel.app/",
    githubUrl: "https://github.com/abe-perorist/fire-protect",
    period: "2024年6月 - 2024年9月（3ヶ月）",
    role: "PdM（企画・設計・開発・運用）",
    stats: {
      users: "企業向けβ版",
      rating: "4.7",
      retention: "炎上リスク80%削減",
      efficiency: "確認時間60%短縮"
    },
    
    inspiration: {
      title: "着想のきっかけ（課題発見）",
      content: "企業のSNS炎上事例が後を絶たない中、「事後対応」ではなく「事前予防」に着目しました。マーケティング担当者や広報担当者が投稿前にリスクを把握できれば、多くの炎上は防げるはず。感情的な反応や文化的な配慮不足による炎上を、AIの力で予防するソリューションを考えました。",
      insights: [
        "企業担当者インタビュー12人 → 91%が「投稿前の不安」を経験",
        "炎上事例100件分析 → パターン化可能な要因の特定",
        "既存チェック体制の課題：属人的で見落としが多い"
      ]
    },
    
    planning: {
      title: "企画・設計での工夫と論理",
      content: "「予防型リスク管理」をコンセプトに、投稿前のワークフローに自然に組み込める設計を重視。リスクスコアの可視化だけでなく、なぜそのリスクがあるのかの説明と、具体的な改善案の提示まで含めました。恐怖心を煽るのではなく、「安心して投稿できる」体験を目指しました。",
      strategies: [
        "ワークフロー統合による自然な利用促進",
        "説明可能AIによる判断根拠の透明化",
        "段階的リスク表示による適切な緊張感の演出",
        "改善提案による建設的なフィードバック設計"
      ]
    },
    
    technology: {
      title: "技術選定の理由",
      content: "自然言語処理の精度とレスポンス速度を両立するため、複数のAIモデルを組み合わせました。リアルタイム分析が求められるため、エッジコンピューティングと効率的なキャッシュ戦略を採用。企業利用を考慮し、セキュリティとプライバシー保護を最優先に設計しました。",
      decisions: [
        "Next.js → 高速なレスポンスと企業向けセキュリティ",
        "複数AIモデル → 感情分析と文脈理解の精度向上",
        "エッジコンピューティング → 低レイテンシでの分析実行",
        "暗号化通信 → 企業データの完全保護"
      ]
    },

    features: [
      {
        title: "リアルタイムリスク分析",
        description: "投稿テキストを瞬時に分析し、リスクスコアを0-100で表示",
        impact: "分析時間90%短縮"
      },
      {
        title: "詳細リスク要因解析",
        description: "感情分析、文化的配慮、表現の適切性を多角的に評価",
        impact: "見落とし率70%削減"
      },
      {
        title: "改善提案システム",
        description: "リスクの指摘だけでなく、具体的な改善案を自動生成",
        impact: "修正効率80%向上"
      }
    ],

    learnings: [
      "B2B UX設計：個人向けとは異なる「安心感」の重要性",
      "説明可能AI：企業利用では判断根拠の透明性が必須",
      "リスク判定の難しさ：文化的背景や時代性を考慮した設計の重要性",
      "ワークフロー統合：既存業務に溶け込む自然な体験設計"
    ]
  },
  "3": {
    title: "計算忍者",
    subtitle: "忍者テーマのゲーミフィケーション学習アプリ - 楽しみながら計算力を向上させる",
    image: "/works/keisan-ninja.jpg",
    demoUrl: "https://keisan-ninja.vercel.app/",
    githubUrl: "https://github.com/abe-perorist/keisan-ninja",
    period: "2024年3月 - 2024年5月（2ヶ月）",
    role: "PdM（企画・設計・開発・運用）",
    stats: {
      users: "500+",
      rating: "4.8",
      retention: "学習継続率90%",
      efficiency: "計算速度50%向上"
    },
    
    inspiration: {
      title: "着想のきっかけ（課題発見）",
      content: "子供の算数嫌いが社会問題になっている中、「勉強感」を排除した学習体験を作りたいと考えました。既存の学習アプリは教育的すぎて堅い印象があり、ゲームアプリは学習効果が薄い。「忍者の修行」というテーマで、努力することがカッコいいという価値観を植え付けたいと思いました。",
      insights: [
        "小学生保護者インタビュー20人 → 85%が「算数への苦手意識」を懸念",
        "既存学習アプリ分析 → エンタメ要素不足で継続率低下",
        "ゲーミフィケーション研究 → 段位システムの効果的活用法"
      ]
    },
    
    planning: {
      title: "企画・設計での工夫と論理",
      content: "「修行は辛いものではなく、成長を実感できる楽しいもの」というコンセプトで設計。段位システムによる長期的モチベーション維持と、短期的な達成感のバランスを重視しました。UI/UXは忍者の世界観に統一し、没入感を高める工夫を施しました。",
      strategies: [
        "段位システムによる長期モチベーション設計",
        "即座のフィードバックによる達成感の演出",
        "忍者テーマによる世界観統一とブランディング",
        "適応学習による個別最適化の実装"
      ]
    },
    
    technology: {
      title: "技術選定の理由",
      content: "軽量性とレスポンシブ性を最優先に、PWA対応でアプリライクな体験を実現。オフライン対応により、いつでもどこでも学習できる環境を提供。データはローカルストレージで管理し、プライバシーに配慮した設計を採用しました。",
      decisions: [
        "Next.js → 高速なページ遷移と SEO 対策",
        "PWA → インストール可能でアプリライクな体験",
        "ローカルストレージ → プライバシー保護と高速データアクセス",
        "CSS アニメーション → 滑らかな UI エフェクト"
      ]
    },

    features: [
      {
        title: "段位システム",
        description: "見習いから忍者まで、成長を実感できる段位システム",
        impact: "継続率65%向上"
      },
      {
        title: "瞬発力勝負",
        description: "制限時間内での計算により、瞬発力と集中力を同時に鍛える",
        impact: "計算速度平均50%向上"
      },
      {
        title: "忍者の世界観",
        description: "修行をテーマにした没入感のあるUI/UX",
        impact: "ユーザー満足度4.8/5"
      }
    ],

    learnings: [
      "ゲーミフィケーション設計：報酬の頻度とタイミングが継続率に直結",
      "子供向けUX：シンプルで直感的な操作感の重要性",
      "ブランディング：統一された世界観が没入感を大幅に向上",
      "学習効果測定：楽しさと学習効果のバランス調整の難しさ"
    ]
  },
  "4": {
    title: "ことば道場",
    subtitle: "漢字・語彙学習プラットフォーム - 段位システムと制限時間で集中力を最大化",
    image: "/works/kotoba-dojo.jpg",
    demoUrl: "https://kotoba-dojo.vercel.app/",
    githubUrl: "https://github.com/abe-perorist/kotoba-dojo",
    period: "2024年4月 - 2024年7月（3ヶ月）",
    role: "PdM（企画・設計・開発・運用）",
    stats: {
      users: "800+",
      rating: "4.6",
      retention: "語彙力向上65%",
      efficiency: "学習効率40%向上"
    },
    
    inspiration: {
      title: "着想のきっかけ（課題発見）",
      content: "日本語学習者や社会人の語彙力向上ニーズに注目。既存の語彙学習アプリは単調で飽きやすく、長期継続が困難でした。「道場」というコンセプトで、学習を修行として捉え、達成感と継続性を両立したプラットフォームを作りたいと考えました。",
      insights: [
        "語学学習者インタビュー25人 → 78%が「継続の難しさ」を実感",
        "既存アプリ使用状況調査 → 平均利用期間2週間で離脱",
        "学習心理学研究 → 適度な緊張感が記憶定着に効果的"
      ]
    },
    
    planning: {
      title: "企画・設計での工夫と論理",
      content: "「緊張感のある学習環境」をコンセプトに、制限時間と段位システムを組み合わせました。適応学習により個人のレベルに最適化された問題を出題し、常に適度な挑戦を感じられる設計を目指しました。達成感の演出にも力を入れ、学習継続のモチベーション維持を図りました。",
      strategies: [
        "制限時間による適度な緊張感の創出",
        "適応学習による個別最適化",
        "段位システムによる長期目標の可視化",
        "段階的難易度調整による挫折防止"
      ]
    },
    
    technology: {
      title: "技術選定の理由",
      content: "学習データの蓄積と分析を重視し、ユーザーの学習パターンを把握できる設計を採用。リアルタイムでの難易度調整機能により、常に最適な学習体験を提供。レスポンシブデザインで、スマートフォンでの学習に最適化しました。",
      decisions: [
        "Next.js → 高速なページロードと SEO 最適化",
        "適応学習AI → 個別最適化された問題出題",
        "プログレッシブ Web App → オフライン学習対応",
        "データ分析基盤 → 学習効果の可視化と改善"
      ]
    },

    features: [
      {
        title: "適応学習システム",
        description: "ユーザーの回答パターンを分析し、最適な難易度の問題を出題",
        impact: "学習効果40%向上"
      },
      {
        title: "制限時間バトル",
        description: "10秒の制限時間で集中力を最大化、瞬発的な語彙力を鍛える",
        impact: "記憶定着率60%向上"
      },
      {
        title: "段位認定システム",
        description: "見習いから師範まで、明確な成長指標による達成感の演出",
        impact: "継続率70%向上"
      }
    ],

    learnings: [
      "適応学習の設計：難易度調整のアルゴリズムが学習効果に大きく影響",
      "時間制限の効果：適度なプレッシャーが集中力と記憶定着を向上",
      "進捗可視化：成長の実感が学習継続の最大の動機",
      "教育テックの責任：学習効果の検証と継続的な改善の重要性"
    ]
  }
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
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* 戻るボタン */}
            <Link
              href="/works"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-accent-blue transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 hover-translate" style={{ transform: 'scaleX(-1)' }} />
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
                  className="px-6 py-3 border-2 border-gray-600 rounded-full text-gray-800 hover:border-accent-blue hover:text-accent-blue hover:bg-accent-blue/5 transition-all-smooth inline-flex items-center space-x-2 group"
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
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">成果・インパクト</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(work.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-2xl shadow-soft border border-gray-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-accent-green"></div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{String(value)}</div>
                  <div className="text-sm text-gray-800 capitalize font-medium">{key}</div>
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
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                        <span className="text-sm text-gray-800">{insight}</span>
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
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                        <span className="text-sm text-gray-800">{strategy}</span>
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
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                        <span className="text-sm text-gray-800">{decision}</span>
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
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <Star className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 leading-relaxed">{learning}</span>
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
