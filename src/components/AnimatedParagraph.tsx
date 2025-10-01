'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface AnimatedParagraphProps {
  children: string
  onRead?: (words: { id: string; text: string; element: HTMLElement }[]) => void
  threshold?: number
  className?: string
}

/**
 * 読み終わりを検出し、単語を分割してアニメーション可能にするコンポーネント
 */
export function AnimatedParagraph({
  children,
  onRead,
  threshold = 0.8,
  className = '',
}: AnimatedParagraphProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const [hasBeenRead, setHasBeenRead] = useState(false)
  const [words, setWords] = useState<{ id: string; text: string; ref: React.RefObject<HTMLSpanElement | null> }[]>([])

  // テキストを単語に分割
  useEffect(() => {
    if (!children) return

    // 絵文字を含むテキストを正しく分割するために、Intl.Segmenterを使用
    // フォールバック: Segmenterが使えない場合は、簡易的な正規表現を使用
    let splitText: string[]
    
    if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
      const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' })
      splitText = Array.from(segmenter.segment(children), s => s.segment)
    } else {
      // フォールバック: 絵文字などを考慮した正規表現
      splitText = children.match(/[\s\S]/gu) || []
    }
    
    const wordList = splitText.map((char, index) => ({
      id: `word-${Math.random().toString(36).substr(2, 9)}-${index}`,
      text: char,
      ref: React.createRef<HTMLSpanElement>(),
    }))

    setWords(wordList)
  }, [children])

  // Intersection Observerで読み終わりを検出
  useEffect(() => {
    if (!paragraphRef.current || hasBeenRead || words.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setHasBeenRead(true)
            
            // 親コンポーネントに通知（少し遅延させてrefが確実に設定されるようにする）
            if (onRead) {
              setTimeout(() => {
                const wordElements = words
                  .map(word => ({
                    id: word.id,
                    text: word.text,
                    element: word.ref.current,
                  }))
                  .filter((w): w is { id: string; text: string; element: HTMLElement } => w.element !== null)
                
                if (wordElements.length > 0) {
                  onRead(wordElements)
                }
              }, 100)
            }
          }
        })
      },
      {
        threshold,
        rootMargin: '0px',
      }
    )

    observer.observe(paragraphRef.current)

    return () => {
      observer.disconnect()
    }
  }, [hasBeenRead, onRead, threshold, words])

  return (
    <p ref={paragraphRef} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={word.id}
          ref={word.ref}
          data-word-id={word.id}
          className="inline-block"
          style={{
            display: 'inline-block',
          }}
          animate={
            hasBeenRead
              ? {
                  opacity: 0,
                  transition: {
                    delay: index * 0.05,
                    duration: 0.3,
                  },
                }
              : {}
          }
        >
          {word.text}
        </motion.span>
      ))}
    </p>
  )
}


