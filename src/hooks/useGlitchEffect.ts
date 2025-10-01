'use client'

import { useState, useEffect, useCallback } from 'react'

interface GlitchConfig {
  delay: number // ページロード後の遅延時間（ms）
  interval: { min: number; max: number } // グリッチ発生間隔（ms）
  duration: number // グリッチ持続時間（ms）
  intensity: number // グリッチ強度（0-1）
}

/**
 * デジタルグリッチエフェクトを管理するフック
 */
export function useGlitchEffect(config: GlitchConfig = {
  delay: 5000,
  interval: { min: 2000, max: 5000 },
  duration: 50,
  intensity: 0.3
}) {
  const [isGlitching, setIsGlitching] = useState(false)
  const [glitchText, setGlitchText] = useState<string>('')

  // グリッチ文字セット
  const glitchChars = '@#$%&*+?=<>[]{}|\\/~`'

  /**
   * ランダムなグリッチ文字を生成
   */
  const generateGlitchText = useCallback((originalText: string) => {
    if (!originalText) return ''
    
    return originalText.split('').map(char => {
      if (char === ' ' || Math.random() > config.intensity) {
        return char
      }
      return glitchChars[Math.floor(Math.random() * glitchChars.length)]
    }).join('')
  }, [config.intensity])

  /**
   * グリッチエフェクトを開始
   */
  const startGlitch = useCallback((originalText: string) => {
    if (!originalText) return

    setIsGlitching(true)
    setGlitchText(generateGlitchText(originalText))

    setTimeout(() => {
      setIsGlitching(false)
      setGlitchText('')
    }, config.duration)
  }, [config.duration, generateGlitchText])

  /**
   * グリッチタイマーを設定
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = Math.random() * (config.interval.max - config.interval.min) + config.interval.min
      
      const glitchTimer = setInterval(() => {
        // グリッチは外部からトリガーされる
      }, interval)

      return () => clearInterval(glitchTimer)
    }, config.delay)

    return () => clearTimeout(timer)
  }, [config.delay, config.interval])

  return {
    isGlitching,
    glitchText,
    startGlitch
  }
}

/**
 * 色ずれグリッチエフェクト用のCSSクラス
 */
export const glitchStyles = {
  colorShift: `
    .glitch-color-shift {
      position: relative;
      overflow: hidden;
    }
    
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
    }
    
    .glitch-color-shift::before {
      background: linear-gradient(90deg, transparent 0%, rgba(255, 0, 0, 0.3) 50%, transparent 100%);
      transform: translateX(-100%);
    }
    
    .glitch-color-shift::after {
      background: linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.3) 50%, transparent 100%);
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
  `
}
