'use client'

import { motion } from 'framer-motion'
import { WordData } from '@/hooks/useAntAnimation'

interface AntWordProps {
  word: WordData
  delay: number
}

/**
 * アリのように動く単語コンポーネント
 */
export function AntWord({ word, delay }: AntWordProps) {
  // ランダムな揺れを生成（アリの動き）
  const generateWigglePath = () => {
    const steps = 20
    const path = []
    
    for (let i = 0; i <= steps; i++) {
      const progress = i / steps
      const baseX = word.originalX + (word.targetX - word.originalX) * progress
      const baseY = word.originalY + (word.targetY - word.originalY) * progress
      
      // ランダムな揺れを追加
      const wiggleX = Math.sin(progress * Math.PI * 4) * 10 * Math.random()
      const wiggleY = Math.cos(progress * Math.PI * 3) * 10 * Math.random()
      
      path.push({
        x: baseX + wiggleX,
        y: baseY + wiggleY,
      })
    }
    
    return path
  }

  const path = generateWigglePath()

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: 0,
        top: 0,
      }}
      initial={{
        x: word.originalX,
        y: word.originalY,
        opacity: 1,
        scale: 1,
      }}
      animate={{
        x: path.map(p => p.x),
        y: path.map(p => p.y),
        opacity: [1, 0.7, 0.5, 0.3, 0],
        scale: [1, 0.9, 0.7, 0.5, 0.3],
      }}
      transition={{
        duration: 3,
        delay: delay,
        ease: 'easeInOut',
      }}
    >
      <span className="text-gray-800 font-medium text-sm">
        {word.text}
      </span>
    </motion.div>
  )
}


