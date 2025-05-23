import { ReactNode, useState } from 'react'
import LanguageToggle from './LanguageToggle'
import Footer from './Footer'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const [lang, setLang] = useState<'en' | 'te'>('en')
  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-4 shadow">
        <div className="font-bold text-xl">ManaTelugu</div>
        <LanguageToggle lang={lang} setLang={setLang} />
      </nav>
      <div>{children}</div>
      <Footer />
    </div>
  )
}