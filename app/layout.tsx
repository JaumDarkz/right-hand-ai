import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

import './(styles)/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Right Hand',
  description: 'Right Hand official  website.',
  metadataBase: new URL('https://www.righthandai.com'),
  openGraph: {
    type: 'website',
    siteName: 'Right Hand AI Website',
    description: 'Transforming business operations with AI-powered solutions, Right Hand is a leading SaaS platform designed to help businesses and industries improve efficiency, productivity, and decision-making.'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
