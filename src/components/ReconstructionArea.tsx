'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useMemo } from 'react'

interface ReconstructionAreaProps {
  text: string
  isAnimating?: boolean
}

/**
 * 単語が集まって新しい文章を再構築するエリア
 */
export function ReconstructionArea({ text, isAnimating = false }: ReconstructionAreaProps) {
  // 絵文字を含むテキストを正しく分割
  const splitText = useMemo(() => {
    if (!text) return []
    
    if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
      const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' })
      return Array.from(segmenter.segment(text), s => s.segment)
    } else {
      // フォールバック: 絵文字などを考慮した正規表現
      return text.match(/[\s\S]/gu) || []
    }
  }, [text])
  return (
    <div
      id="reconstruction-area"
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-accent-blue/20 via-accent-green/10 to-transparent backdrop-blur-sm border-t-2 border-accent-blue/30 z-40"
      style={{ minHeight: '120px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AnimatePresence mode="wait">
          {isAnimating ? (
            <motion.div
              key="animating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-accent-blue"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 mx-auto mb-2"
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
              <p className="text-sm font-medium">
                アリが文字を運んでいます...
              </p>
            </motion.div>
          ) : text ? (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Sparkles className="w-5 h-5 text-accent-blue" />
                <h3 className="text-lg font-bold text-gray-900">
                  再構築された文章
                </h3>
                <Sparkles className="w-5 h-5 text-accent-green" />
              </div>
              <motion.p
                className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                {splitText.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.02 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500"
            >
              <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">
                段落を読み終えると、アリのように文字が動いてここに集まります...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}


