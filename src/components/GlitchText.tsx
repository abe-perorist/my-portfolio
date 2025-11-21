'use client'

import { useState, useEffect, useRef } from 'react'
import { useGlitchEffect } from '@/hooks/useGlitchEffect'

interface GlitchTextProps {
  children: string
  className?: string
  glitchConfig?: {
    delay?: number
    interval?: { min: number; max: number }
    duration?: number
    intensity?: number
  }
}

/**
 * グリッチエフェクト付きテキストコンポーネント
 */
export function GlitchText({ 
  children, 
  className = '',
  glitchConfig = {}
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(children)
  const [isGlitching, setIsGlitching] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // グリッチ文字セット
  const glitchChars = '@#$%&*+?=<>[]{}|\\/~`'

  const config = {
    delay: 5000,
    interval: { min: 2000, max: 5000 },
    duration: 50,
    intensity: 0.3,
    ...glitchConfig
  }

  /**
   * ランダムなグリッチ文字を生成
   */
  const generateGlitchText = (originalText: string) => {
    return originalText.split('').map(char => {
      if (char === ' ' || Math.random() > config.intensity) {
        return char
      }
      return glitchChars[Math.floor(Math.random() * glitchChars.length)]
    }).join('')
  }

  /**
   * グリッチエフェクトを実行
   */
  const triggerGlitch = () => {
    setIsGlitching(true)
    setDisplayText(generateGlitchText(children))

    timeoutRef.current = setTimeout(() => {
      setIsGlitching(false)
      setDisplayText(children)
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
          triggerGlitch()
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
  }, [children, config])

  return (
    <span 
      className={`${className} ${isGlitching ? 'text-red-500' : ''}`}
      style={{
        fontFamily: isGlitching ? 'monospace' : 'inherit',
        transition: isGlitching ? 'none' : 'color 0.1s ease'
      }}
    >
      {displayText}
    </span>
  )
}
