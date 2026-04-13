import { Toaster } from "@/components/ui/sonner"
import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'EVASION',
  description: 'High-performance outdoor gear engineered for the modern explorer. Lightweight, durable, adventure-ready.',
  icons: {
    icon: [
      {
        url: '/atelier-commerce/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/atelier-commerce/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/atelier-commerce/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/atelier-commerce/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
