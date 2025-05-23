import React from 'react'

type Props = {
  lang: 'en' | 'te'
  setLang: (lang: 'en' | 'te') => void
}

export default function LanguageToggle({ lang, setLang }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <button
        className={`px-2 py-1 rounded ${lang === 'en' ? 'font-bold bg-gray-200' : ''}`}
        onClick={() => setLang('en')}
      >
        English
      </button>
      <span>|</span>
      <button
        className={`px-2 py-1 rounded font-telugu ${lang === 'te' ? 'font-bold bg-gray-200' : ''}`}
        onClick={() => setLang('te')}
      >
        తెలుగు
      </button>
    </div>
  )
}