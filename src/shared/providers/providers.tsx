'use client'
import { FC, PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
    </>
  )
}

export default Providers
