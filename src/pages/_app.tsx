import '../styles/fonts.scss'
import '../styles/globals.scss'
import '../styles/hljs.scss'
import '../styles/latoFonts.scss'
import '../styles/layout.scss'
import { Helmet } from 'react-helmet'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useLocale } from '../hooks/useLocale'
import React from 'react'

const localInfo = {
  zh: {
    description: 'Phala Network 是Web 3.0生态体系中基于 Substrate 的隐私计算云'
  },
  en: {
    description:
      'Phala Network is a privacy-preserving cloud computing service in the Web 3.0 ecosystem based on Substrate'
  }
} as const

const queryClient = new QueryClient()

function MyApp({ children }: { children: React.ReactNode }) {
  const lang = (useLocale() as 'zh' | 'en') || 'en'
  const { description } = localInfo[lang]

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Helmet
          htmlAttributes={{
            lang
          }}>
          <title>Phala Network</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="bookmark" href="/favicon.ico" type="image/x-icon" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="description" content={description} />
          <meta name="renderer" content="webkit" />
          <meta name="format-detection" content="telephone=no"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="og:title" content="Phala Network" />
          <meta name="og:description" content={description} />
          <meta name="og:type" content="website" />
        </Helmet>
        {children}
      </div>
    </QueryClientProvider>
  )
}

export default MyApp
