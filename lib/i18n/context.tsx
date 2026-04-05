'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ar } from './ar'
import { en } from './en'

type Lang = 'ar' | 'en'
type Translations = typeof ar

interface I18nContextType {
  lang: Lang
  t: Translations
  setLang: (lang: Lang) => void
  isRTL: boolean
}

const I18nContext = createContext<I18nContextType>({
  lang: 'ar',
  t: ar,
  setLang: () => {},
  isRTL: true,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ar')

  useEffect(() => {
    const stored = localStorage.getItem('tp-lang') as Lang
    if (stored && (stored === 'ar' || stored === 'en')) {
      setLangState(stored)
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('tp-lang', l)
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = l
  }

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  const t = lang === 'ar' ? ar : en as unknown as Translations

  return (
    <I18nContext.Provider value={{ lang, t, setLang, isRTL: lang === 'ar' }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
