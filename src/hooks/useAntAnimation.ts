'use client'

import { useState, useCallback } from 'react'

export interface WordData {
  id: string
  text: string
  originalX: number
  originalY: number
  targetX: number
  targetY: number
  isAnimating: boolean
}

/**
 * アリのように単語を動かすアニメーションを管理するフック
 */
export function useAntAnimation() {
  const [animatingWords, setAnimatingWords] = useState<WordData[]>([])
  const [reconstructedText, setReconstructedText] = useState<string>('')

  /**
   * 単語のアニメーションを開始
   */
  const startAnimation = useCallback((words: { id: string; text: string; element: HTMLElement }[]) => {
    const targetElement = document.getElementById('reconstruction-area')
    if (!targetElement) return

    const targetRect = targetElement.getBoundingClientRect()
    const targetCenterX = targetRect.left + targetRect.width / 2
    const targetCenterY = targetRect.top + targetRect.height / 2

    const wordDataList: WordData[] = words.map((word, index) => {
      const rect = word.element.getBoundingClientRect()
      
      // ターゲット位置にランダムな散らばりを追加（アリの動き）
      const randomOffsetX = (Math.random() - 0.5) * 200
      const randomOffsetY = (Math.random() - 0.5) * 100

      return {
        id: word.id,
        text: word.text,
        originalX: rect.left,
        originalY: rect.top,
        targetX: targetCenterX + randomOffsetX + (index % 10) * 20,
        targetY: targetCenterY + randomOffsetY,
        isAnimating: true,
      }
    })

    setAnimatingWords(wordDataList)

    // アニメーション完了後、再構築エリアにテキストを表示
    setTimeout(() => {
      // ランダムな順序で単語を並び替え
      const shuffledWords = [...words].sort(() => Math.random() - 0.5)
      const newText = shuffledWords.map(w => w.text).join('')
      setReconstructedText(newText)
      
      // アニメーション状態をクリア
      setAnimatingWords([])
    }, 3000) // アニメーション時間
  }, [])

  /**
   * リセット
   */
  const reset = useCallback(() => {
    setAnimatingWords([])
    setReconstructedText('')
  }, [])

  return {
    animatingWords,
    reconstructedText,
    startAnimation,
    reset,
  }
}


