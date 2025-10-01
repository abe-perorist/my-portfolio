'use client'

import { motion } from 'framer-motion'
import { GlitchCard } from './GlitchCard'
import { GlitchText } from './GlitchText'

interface DegradationCardProps {
  children: React.ReactNode
  className?: string
  degradationConfig?: {
    delay?: number
    intensity?: number
    duration?: number
  }
}

/**
 * 摩耗・劣化アニメーション付きカードコンポーネント
 * 時間とともに物理的な歪みが発生する
 */
export function DegradationCard({ 
  children, 
  className = '',
  degradationConfig = {}
}: DegradationCardProps) {
  const config = {
    delay: 3000, // 3秒後に劣化開始
    intensity: 0.8, // 歪みの強度
    duration: 3, // 歪みの周期（秒）
    ...degradationConfig
  }

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 1,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      }}
      animate={{
        // 緩やかな揺らぎ（熱で溶けているような歪み）
        rotateX: [0, 0.5, -0.3, 0.8, -0.2, 0],
        rotateY: [0, -0.3, 0.6, -0.4, 0.2, 0],
        rotateZ: [0, 0.2, -0.1, 0.3, -0.2, 0],
        // わずかなスケール変化
        scale: [1, 1.001, 0.999, 1.002, 0.998, 1],
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: config.delay
      }}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      <GlitchCard
        glitchConfig={{
          delay: 5000,
          interval: { min: 3000, max: 6000 },
          duration: 100
        }}
      >
        {children}
      </GlitchCard>
    </motion.div>
  )
}

/**
 * 劣化アニメーション用のCSS（パフォーマンス最適化）
 */
export const degradationStyles = `
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
`
