"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { useReducer } from 'react'
import { appReducer } from '@/reducer/appReducer'
import { init } from '@/utils/init'
import { appCtx } from '@/context/appContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Menu } from '@/components/Menu'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
 const [state, dispatch] = useReducer(appReducer, init)
  return (
    <html lang="en">
      <body className={inter.className}>
        <appCtx.Provider value={{state, dispatch}}>
          <Header/>
          {state.isLoggedIn && <Menu/>}
          {children} 
          <Footer/>
        </appCtx.Provider>
        </body>
    </html>
  )
}
