import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { clsx } from 'clsx'
import { ThemeProvider } from '@/components/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Connexxion Energy',
  description: 'Revitalizing Batteries, Powering the Future.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(outfit.variable, 'antialiased')}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
