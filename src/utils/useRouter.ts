/**
 * Next.js App Router를 사용하는 라우팅 유틸리티
 */
'use client'

import { useRouter, useParams as useNextParams } from 'next/navigation'

export const useNavigate = () => {
  const router = useRouter()
  return (path: string) => {
    router.push(path)
  }
}

export const useParams = <T extends Record<string, string>>() => {
  return useNextParams() as unknown as T
}
