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

    // 日本語テキストを文字ごとに分割（英語の場合はスペースで分割）
    const splitText = children.split('')
    const wordList = splitText.map((char, index) => ({
      id: `word-${Math.random().toString(36).substr(2, 9)}-${index}`,
      text: char,
      ref: React.createRef<HTMLSpanElement>(),
    }))

    setWords(wordList)
  }, [children])

  // Intersection Observerで読み終わりを検出
  useEffect(() => {
    if (!paragraphRef.current || hasBeenRead) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setHasBeenRead(true)
            
            // 親コンポーネントに通知
            if (onRead) {
              const wordElements = words
                .map(word => ({
                  id: word.id,
                  text: word.text,
                  element: word.ref.current,
                }))
                .filter((w): w is { id: string; text: string; element: HTMLElement } => w.element !== null)
              
              onRead(wordElements)
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
      {words.map((word) => (
        <motion.span
          key={word.id}
          ref={word.ref}
          data-word-id={word.id}
          className="inline-block"
          style={{
            display: 'inline-block',
          }}
        >
          {word.text}
        </motion.span>
      ))}
    </p>
  )
}


