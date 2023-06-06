"use client";
import { Inter } from 'next/font/google'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >{children}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </body>
    </html>
  )
}
