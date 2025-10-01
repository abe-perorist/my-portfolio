'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface GlitchWarningProps {
  onComplete?: () => void
  delay?: number
}

/**
 * 劣化開始前の「ビリビリ！」警告エフェクト
 */
export function GlitchWarning({ onComplete, delay = 3000 }: GlitchWarningProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      
      // 0.5秒後にテキストを表示
      setTimeout(() => {
        setShowText(true)
      }, 500)
      
      // 2秒後に警告を終了
      setTimeout(() => {
        setIsVisible(false)
        onComplete?.()
      }, 2000)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 pointer-events-none"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(2px)'
          }}
        >
          {/* 画面全体のグリッチエフェクト */}
          <motion.div
            className="absolute inset-0"
            animate={{
              filter: [
                'hue-rotate(0deg) contrast(1) brightness(1)',
                'hue-rotate(90deg) contrast(1.5) brightness(1.2)',
                'hue-rotate(180deg) contrast(2) brightness(1.5)',
                'hue-rotate(270deg) contrast(1.5) brightness(1.2)',
                'hue-rotate(360deg) contrast(1) brightness(1)',
              ]
            }}
            transition={{
              duration: 0.1,
              repeat: 20,
              ease: "linear"
            }}
          />

          {/* 画面全体のノイズ */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(255, 0, 0, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(255, 255, 0, 0.3) 0%, transparent 50%)
              `,
              backgroundSize: '200px 200px, 300px 300px, 150px 150px'
            }}
            animate={{
              backgroundPosition: [
                '0px 0px, 0px 0px, 0px 0px',
                '50px 50px, -50px -50px, 25px 25px',
                '100px 100px, -100px -100px, 50px 50px',
                '150px 150px, -150px -150px, 75px 75px',
                '200px 200px, -200px -200px, 100px 100px'
              ]
            }}
            transition={{
              duration: 0.2,
              repeat: 10,
              ease: "linear"
            }}
          />

          {/* 中央の警告テキスト */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.5
              }}
              className="text-center"
            >
              <AnimatePresence>
                {showText && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <motion.h1
                      className="text-6xl sm:text-8xl font-bold text-red-500"
                      animate={{
                        textShadow: [
                          '0 0 10px #ff0000',
                          '0 0 20px #ff0000, 0 0 30px #ff0000',
                          '0 0 10px #ff0000',
                          '0 0 20px #ff0000, 0 0 30px #ff0000',
                          '0 0 10px #ff0000'
                        ]
                      }}
                      transition={{
                        duration: 0.3,
                        repeat: 6,
                        ease: "easeInOut"
                      }}
                    >
                      ビリビリ！
                    </motion.h1>
                    
                    <motion.p
                      className="text-xl sm:text-2xl text-white font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      何かが起きています...
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* 画面端のフラッシュエフェクト */}
          <motion.div
            className="absolute inset-0 border-4 border-red-500"
            animate={{
              opacity: [0, 1, 0, 1, 0],
              scale: [1, 1.02, 1, 1.02, 1]
            }}
            transition={{
              duration: 0.2,
              repeat: 10,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
