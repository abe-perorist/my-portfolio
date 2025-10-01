'use client'

import { useEffect, useRef, useState } from 'react'

interface UseReadDetectionOptions {
  threshold?: number
  rootMargin?: string
}

/**
 * Intersection Observer APIを使用して、要素が読み終わったかを検出するフック
 */
export function useReadDetection(
  options: UseReadDetectionOptions = {}
) {
  const { threshold = 0.8, rootMargin = '0px' } = options
  const [readElements, setReadElements] = useState<Set<Element>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const elementsRef = useRef<Set<Element>>(new Set())

  useEffect(() => {
    // Intersection Observerを作成
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 要素が十分に表示されている場合、読み終わったとみなす
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setReadElements((prev) => {
              const newSet = new Set(prev)
              newSet.add(entry.target)
              return newSet
            })
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    // 既に登録されている要素を監視
    elementsRef.current.forEach((element) => {
      observerRef.current?.observe(element)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [threshold, rootMargin])

  // 要素を監視対象に追加
  const observeElement = (element: Element | null) => {
    if (!element || elementsRef.current.has(element)) return

    elementsRef.current.add(element)
    observerRef.current?.observe(element)
  }

  // 要素が読み終わったかを確認
  const isRead = (element: Element | null) => {
    if (!element) return false
    return readElements.has(element)
  }

  // 読み終わり状態をリセット
  const reset = () => {
    setReadElements(new Set())
  }

  return {
    observeElement,
    isRead,
    readElements,
    reset,
  }
}


