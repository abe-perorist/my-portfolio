'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface GlitchCardProps {
  children: React.ReactNode
  className?: string
  glitchConfig?: {
    delay?: number
    interval?: { min: number; max: number }
    duration?: number }
}

/**
 * グリッチエフェクト付きカードコンポーネント
 */
export function GlitchCard({ 
  children, 
  className = '',
  glitchConfig = {}
}: GlitchCardProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const config = {
    delay: 5000,
    interval: { min: 3000, max: 6000 },
    duration: 100,
    ...glitchConfig
  }

  /**
   * 色ずれグリッチエフェクトを実行
   */
  const triggerColorGlitch = () => {
    setIsGlitching(true)

    timeoutRef.current = setTimeout(() => {
      setIsGlitching(false)
    }, config.duration)
  }

  /**
   * グリッチタイマーを設定
   */
  useEffect(() => {
    const startTimer = setTimeout(() => {
      const scheduleNextGlitch = () => {
        const interval = Math.random() * (config.interval.max - config.interval.min) + config.interval.min
        intervalRef.current = setTimeout(() => {
          triggerColorGlitch()
          scheduleNextGlitch()
        }, interval)
      }
      scheduleNextGlitch()
    }, config.delay)

    return () => {
      clearTimeout(startTimer)
      if (intervalRef.current) clearTimeout(intervalRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [config])

  return (
    <motion.div
      className={`${className} glitch-color-shift ${isGlitching ? 'active' : ''}`}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
      animate={{
        skewX: isGlitching ? [0, 0.5, -0.5, 0] : 0,
        skewY: isGlitching ? [0, 0.2, -0.2, 0] : 0,
      }}
      transition={{
        duration: config.duration / 1000,
        ease: "easeInOut"
      }}
    >
      {/* 色ずれエフェクト用の疑似要素 */}
      <style jsx>{`
        .glitch-color-shift::before,
        .glitch-color-shift::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.05s ease;
          z-index: 1;
        }
        
        .glitch-color-shift::before {
          background: linear-gradient(90deg, transparent 0%, rgba(255, 0, 0, 0.2) 50%, transparent 100%);
          transform: translateX(-100%);
        }
        
        .glitch-color-shift::after {
          background: linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.2) 50%, transparent 100%);
          transform: translateX(100%);
        }
        
        .glitch-color-shift.active::before {
          opacity: 1;
          transform: translateX(0);
          animation: glitch-slide-left 0.1s ease-out;
        }
        
        .glitch-color-shift.active::after {
          opacity: 1;
          transform: translateX(0);
          animation: glitch-slide-right 0.1s ease-out;
        }
        
        @keyframes glitch-slide-left {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes glitch-slide-right {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      {children}
    </motion.div>
  )
}
