'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Lock, FileText, Mail, ArrowLeft, Database, Key, AlertTriangle, ExternalLink } from 'lucide-react'

// =========================================================
// 💡 【拡張機能定義】新しい拡張機能を追加する際は、この配列にオブジェクトを追加するだけ
// 
// 各拡張機能オブジェクトの構造:
// - name: 拡張機能の正式名称（プライバシーポリシーに表示される）
// - id: 拡張機能の内部ID（将来的に固有データを識別する際に使用）
// - permissions: この拡張機能が要求する権限の配列
//   - permission: Chrome拡張機能の権限名（例: "activeTab", "storage"）
//   - purpose: その権限を使用する目的の説明
// 
// 💡 将来的な拡張性:
// - uniqueData: 拡張機能固有のデータ収集項目（オプション）
// - uniqueExternalServices: 拡張機能固有の外部サービス（オプション）
// =========================================================
const allExtensions = [
  {
    name: "PraisePost AI - ポジティブツイートジェネレーター",
    id: "PraisePost",
    permissions: [
      { permission: "activeTab", purpose: "ユーザーがボタンをクリックした際に、現在表示中のタブのURLやタイトルを取得するため。" },
      { permission: "scripting", purpose: "ページコンテンツの本文テキストを正確に抽出するため。" },
      { permission: "storage", purpose: "ユーザーの設定（プラン情報、使用回数）や、分析・生成結果、ログデータを保存するため。" },
      { permission: "notifications", purpose: "バックグラウンドでのツイート生成完了をユーザーに通知するため。" }, // 固有の権限
    ],
    // 💡 固有のデータ処理があればここに追記 (例: 固有の外部API利用など)
    // uniqueData: []
  },
  {
    name: "IntentAnalyzer - コンテンツ戦略分析ツール",
    id: "IntentAnalyzer",
    permissions: [
      { permission: "activeTab", purpose: "ユーザーがボタンをクリックした際に、現在表示中のタブのURLやタイトルを取得するため。" },
      { permission: "scripting", purpose: "ページコンテンツの本文テキストを正確に抽出するため。" },
      { permission: "storage", purpose: "ユーザーの設定（プラン情報、使用回数）や、分析・生成結果、ログデータを保存するため。" },
    ],
  },
  // 💡 【追加例】新しい拡張機能はここにオブジェクトを追加する
  // {
  //   name: "NewGen AI - 画像生成アシスタント",
  //   id: "NewGen",
  //   permissions: [
  //     { permission: "activeTab", purpose: "プロンプト入力欄へのアクセス" },
  //     { permission: "storage", purpose: "設定と履歴の保存" },
  //     { permission: "clipboardWrite", purpose: "生成された画像をクリップボードにコピーするため。" }, // 💡 固有の権限
  //   ],
  //   // 💡 固有の外部サービス (例: OpenAI DALL-E) の定義
  //   // uniqueExternalServices: [
  //   //   { service: "OpenAI DALL-E API", role: "画像生成処理", data: "...", retention: "...", link: "..." }
  //   // ]
  // },
]

// 💡 権限テーブルを動的に生成するヘルパー関数
const generatePermissionsTable = (extensions: typeof allExtensions) => {
  const permissionMap = new Map<string, {
    permission: string
    purpose: string
    extensions: Set<string>
  }>()

  extensions.forEach(ext => {
    ext.permissions.forEach(p => {
      const key = p.permission
      if (!permissionMap.has(key)) {
        permissionMap.set(key, {
          permission: key,
          purpose: p.purpose,
          extensions: new Set(),
        })
      }
      permissionMap.get(key)!.extensions.add(ext.name)
    })
  })

  return Array.from(permissionMap.values()).map(item => {
    // すべての拡張機能で使用される場合は「すべての拡張機能」と表示
    // それ以外の場合は該当する拡張機能名を列挙（3つ以上の場合も対応）
    const extensionDisplay = item.extensions.size === extensions.length 
      ? "すべての拡張機能" 
      : Array.from(item.extensions).join(' / ')
    
    return {
      permission: item.permission,
      purpose: item.purpose,
      extension: extensionDisplay
    }
  })
}

export default function PrivacyPage() {
  // 💡 拡張機能名のリストを動的に生成
  const extensionNames = allExtensions.map(e => e.name)

  // 💡 権限テーブルを動的に生成
  const permissionsTable = generatePermissionsTable(allExtensions)

  // 💡 ページ表示用のデータ（基本部分は共通データとして固定）
  // ---------------------------------------------------------
  const externalDataTable = [
    { data: "ページタイトル", method: "scripting APIを使用し、アクティブタブから抽出", extension: "すべての拡張機能", purpose: "AIに対するコンテキスト情報として利用" },
    { data: "ページURL", method: "scripting APIを使用し、アクティブタブから抽出", extension: "すべての拡張機能", purpose: "AIに対するコンテキスト情報として利用" },
    { data: "ページ本文テキスト", method: "scripting APIを使用し、アクティブタブから抽出（最大15,000文字）", extension: "すべての拡張機能", purpose: "AIによるコンテンツの分析・生成処理" },
    { data: "プランタイプ", method: "Chrome Storageから取得", extension: "すべての拡張機能", purpose: "APIの利用制限（レート制限）の管理" },
    { data: "システムプロンプト", method: "拡張機能内の固定文", extension: "すべての拡張機能", purpose: "AIの応答形式の指定" }
  ]

  const localDataTable = [
    { data: "生成/分析結果（ツイート文/分析レポート）", location: "Chrome Storage Local", extension: "すべての拡張機能", purpose: "ユーザーが過去の結果を参照できるようにするため", retention: "ユーザーが削除/アンインストールするまで" },
    { data: "プラン情報 (FREE/PRO)", location: "Chrome Storage Sync", extension: "すべての拡張機能", purpose: "複数デバイス間でのプラン状態の同期", retention: "ユーザーが削除/アンインストールするまで" },
    { data: "使用回数", location: "Chrome Storage Sync", extension: "すべての拡張機能", purpose: "無料プランの利用制限の管理", retention: "ユーザーが削除/アンインストールするまで" },
    { data: "アクティベーションコード (ハッシュ化済み)", location: "Chrome Storage Sync", extension: "すべての拡張機能", purpose: "有料プランの有効化確認、重複使用防止", retention: "ユーザーが削除/アンインストールするまで" },
    { data: "使用ログ (回数, タイムスタンプ)", location: "Chrome Storage Local", extension: "すべての拡張機能", purpose: "不正利用の検知、デバッグ、トラブルシューティング", retention: "最新500件のみ保持" },
    { data: "アクティベーションログ (コード部分, User Agent)", location: "Chrome Storage Local", extension: "すべての拡張機能", purpose: "監査、デバッグ、不正使用の追跡", retention: "最新100件のみ保持" }
  ]

  const externalServices = [
    { service: "Google Gemini API", role: "AI分析・生成処理の実行", data: "ページコンテンツ、プラン情報、プロンプト", retention: "APIリクエスト処理時のみ一時的に利用。永続的な保存なし。", link: "https://ai.google.dev/terms" },
    { service: "Cloudflare Workers", role: "API中継サーバー", data: "AIへの送信データ全般", retention: "データは一時的なメモリ上で処理され、保存なし。", link: "https://www.cloudflare.com/privacypolicy/" },
    { service: "Stripe", role: "決済処理", data: "決済情報（ユーザーがStripeに直接入力）", retention: "拡張機能は決済情報を一切取り扱いません。", link: "https://stripe.com/privacy" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Chrome拡張機能 プライバシーポリシー
            </h1>
            <div className="text-left max-w-2xl mx-auto mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-4">対象となる拡張機能:</p>
              <ul className="space-y-3 text-gray-800">
                {extensionNames.map((name, index) => (
                  <li key={index} className="flex items-start text-base leading-relaxed">
                    <span className="text-primary mr-3 font-semibold">{index + 1}.</span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-500">
              最終更新日: 2025年11月26日
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card mb-12"
          >
            <p className="text-gray-800 leading-loose mb-5 text-base">
              当開発者は、上記に記載された拡張機能（以下、「本拡張機能」といいます）のユーザーのプライバシーを尊重し、個人情報およびその他のユーザーデータを適切に取り扱うことをお約束します。
            </p>
            <p className="text-gray-800 leading-loose mb-5 text-base">
              本ポリシーは、本拡張機能がどのようにデータを収集、利用、保存し、第三者と共有するかを説明するものです。
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900 mb-2 text-lg">ご注意（重要）</p>
                  <p className="text-amber-800 text-base leading-relaxed">
                    本拡張機能は、<strong>個人を特定できる情報（PII：氏名、メールアドレス、住所、電話番号、クレジットカード情報など）を一切収集しません。</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Data Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card mb-8"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  2. 収集する情報とその利用目的
                </h2>
                <p className="text-gray-800 leading-loose mb-6 text-base">
                  本拡張機能は、ユーザーによる「分析開始」または「ツイート生成」ボタンのクリック時に、機能の提供に必要な情報のみを収集・処理します。
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">2.1 外部に送信され、処理されるデータ</h3>
                <p className="text-gray-800 leading-relaxed mb-5 text-base">
                  AI機能の提供のために、外部サービス（Google Gemini API）に<strong>一時的に</strong>送信され、処理されるデータです。
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-base">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">収集するデータ</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">収集方法</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">拡張機能</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">利用目的</th>
                      </tr>
                    </thead>
                    <tbody>
                      {externalDataTable.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-5 py-4 text-gray-800">{row.data}</td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-700 text-sm leading-relaxed">{row.method}</td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-800">{row.extension}</td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-700">{row.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-6">
                  <p className="text-blue-900 text-base mb-3 leading-relaxed"><strong>データの除外:</strong> ページコンテンツの収集にあたっては、ヘッダー、フッター、ナビゲーション、広告要素、スクリプト、スタイルシートなどは除外されます。</p>
                  <p className="text-blue-900 text-base leading-relaxed"><strong>データの保持:</strong> これらのデータは、APIリクエストの処理が完了次第、メモリ上から<strong>即座に破棄され、外部サーバーに永続的に保存されることはありません。</strong></p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">2.2 ローカルおよび同期ストレージに保存されるデータ</h3>
                <p className="text-gray-800 leading-relaxed mb-5 text-base">
                  以下のデータは、機能の提供、設定の保持、利用制限の管理のために、ユーザーのブラウザ内またはChromeアカウントに紐づくクラウドストレージに保存されます。
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-base">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">データの種類</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">保存場所</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">拡張機能</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">利用目的</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">保持期間/備考</th>
                      </tr>
                    </thead>
                    <tbody>
                      {localDataTable.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-5 py-4 text-gray-800">{row.data}</td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-700 text-sm">{row.location}</td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-800">{row.extension}</td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-700">{row.purpose}</td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-700 text-sm">{row.retention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 3: External Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card mb-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  3. 外部サービス（第三者）との通信
                </h2>
                <p className="text-gray-800 leading-loose mb-6 text-base">
                  本拡張機能は、以下の第三者サービスを利用しますが、ユーザーデータを<strong>広告目的で共有したり、販売したりすることはありません。</strong>
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-base">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">サービス名</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">役割</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">送信データ</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">データの保持</th>
                      </tr>
                    </thead>
                    <tbody>
                      {externalServices.map((service, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-5 py-4 text-gray-800 font-medium">
                            <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center">
                              {service.service}
                              <ExternalLink className="w-4 h-4 ml-1.5" />
                            </a>
                          </td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-700">{service.role}</td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-700">{service.data}</td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-700 text-sm leading-relaxed">{service.retention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                  <p><strong>通信の安全性:</strong> すべての通信はHTTPS（TLS 1.3）で暗号化されています。</p>
                  <p><strong>各サービスのプライバシーポリシー:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><a href="https://ai.google.dev/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google AI Terms of Service</a></li>
                    <li><a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cloudflare Privacy Policy</a></li>
                    <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card mb-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  4. セキュリティ対策
                </h2>
                <p className="text-gray-800 leading-loose mb-5 text-base">
                  当開発者は、ユーザーデータを保護するために以下のセキュリティ対策を講じています。
                </p>
                <ol className="list-decimal list-inside space-y-4 text-gray-800 ml-4 text-base leading-relaxed">
                  <li><strong>APIキーの隠蔽:</strong> Google Gemini APIキーは、クライアント側には一切露出せず、Cloudflare Workersの環境変数として安全に管理されています。</li>
                  <li><strong>暗号化通信:</strong> すべての外部通信（APIとのやり取り）はHTTPSで暗号化されています。</li>
                  <li><strong>XSS対策:</strong> すべてのAPIレスポンスとユーザー入力はHTMLエスケープ処理され、スクリプトインジェクション攻撃を防止しています。</li>
                  <li><strong>レート制限:</strong> 悪意のある大量リクエストを防ぐため、IPアドレスベースでのレート制限（1分間に10リクエストまで）を実装しています。</li>
                  <li><strong>CORS設定:</strong> 許可されたオリジンからのみAPIアクセスを可能にし、不正利用を防止しています。</li>
                </ol>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Permissions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card mb-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                <Key className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  5. 要求する権限と利用目的
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-base">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">権限</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">利用目的</th>
                        <th className="border border-gray-300 px-5 py-4 text-left font-semibold text-gray-900">拡張機能</th>
                      </tr>
                    </thead>
                    <tbody>
                      {permissionsTable.map((perm, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-5 py-4 text-gray-800 font-mono text-sm">{perm.permission}</td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-700 leading-relaxed">{perm.purpose}</td>
                          <td className="border border-gray-300 px-5 py-4 text-gray-800">{perm.extension}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 6: User Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="card mb-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  6. ユーザーの権利とデータの削除
                </h2>
                <p className="text-gray-800 leading-loose mb-6 text-base">
                  ユーザーは、いつでもご自身のデータを完全にコントロールし、削除する権利を有します。
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">6.1 拡張機能のアンインストールによる完全削除</h3>
                <p className="text-gray-800 leading-relaxed mb-4 text-base">
                  拡張機能をアンインストールすると、Chrome Storage LocalおよびSyncに保存されていた<strong>すべてのデータが直ちに削除されます。</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-800 ml-4 mb-6 text-base leading-relaxed">
                  <li><code className="bg-gray-100 px-3 py-1.5 rounded text-sm font-mono">chrome://extensions/</code> を開く。</li>
                  <li>対象の拡張機能を見つけ、「削除」をクリック。</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mb-4">6.2 手動でのデータクリア</h3>
                <p className="text-gray-800 leading-relaxed mb-4 text-base">
                  開発者ツールのコンソールから、手動でデータをクリアすることも可能です。
                </p>
                <div className="bg-gray-900 text-gray-100 p-5 rounded-lg mb-6 font-mono text-base overflow-x-auto leading-relaxed">
                  <div>chrome.storage.local.clear();</div>
                  <div>chrome.storage.sync.clear();</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">6.3 自動削除</h3>
                <p className="text-gray-800 leading-relaxed text-base">
                  使用ログおよびアクティベーションログは、最新のデータのみを保持し、古いデータは自動的に削除されます（使用ログは最新500件、アクティベーションログは最新100件）。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 7: Policy Changes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="card mb-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  7. プライバシーポリシーの変更
                </h2>
                <p className="text-gray-800 leading-loose mb-5 text-base">
                  当開発者は、本ポリシーを随時更新することがあります。重要な変更を行う際は、以下のいずれかの方法でユーザーに通知します。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-800 ml-4 mb-4 text-base leading-relaxed">
                  <li>Chrome Web Storeの拡張機能説明ページへの掲載。</li>
                  <li>重大な変更の場合は、拡張機能内の通知機能による告知。</li>
                </ol>
                <p className="text-gray-800 leading-relaxed mt-5 text-base">
                  ユーザーが変更後に本拡張機能の使用を継続した場合、変更後のポリシーに同意したものとみなされます。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="card mt-12 bg-primary-light border-primary/20"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  8. お問い合わせ
                </h2>
                <p className="text-gray-800 leading-loose mb-5 text-base">
                  本プライバシーポリシーまたはデータの取り扱いについてご不明な点がある場合は、以下の連絡先までお問い合わせください。
                </p>
                <div className="space-y-2 text-gray-800 text-base">
                  <p><strong>メール:</strong> <a href="mailto:ito.sanadamushi@gmail.com" className="text-primary hover:underline">ito.sanadamushi@gmail.com</a></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-12 text-center"
          >
            <Link
              href="/"
              className="btn-secondary inline-flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
