// fixes a bug for next-auth and mongodb atlas somehow
// https://github.com/nextauthjs/next-auth/issues/833
import 'reflect-metadata'
import React, { useEffect } from 'react'
import { Provider } from 'next-auth/client'
import '../styles/globals.css'
import { keepTheme } from '../utils/themes'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    keepTheme()
  })

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
