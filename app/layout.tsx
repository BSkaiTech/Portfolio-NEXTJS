import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hieubkset.tech'),
  title: 'Hoang Trung Hieu | AI Leader & ML Engineer',
  description: 'AI Leader with 7+ years of experience scaling end-to-end AI solutions from research to production. Expertise in computer vision, NLP, and MLOps.',
  keywords: ['AI', 'Machine Learning', 'Computer Vision', 'NLP', 'MLOps', 'Vietnam', 'Portfolio'],
  authors: [{ name: 'Hoang Trung Hieu' }],
  creator: 'Hoang Trung Hieu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hieubkset.tech',
    title: 'Hoang Trung Hieu | AI Leader',
    description: 'AI Leader with 7+ years of experience in production-grade AI systems',
    siteName: 'Hoang Trung Hieu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoang Trung Hieu | AI Leader',
    description: 'AI Leader with 7+ years of experience in production-grade AI systems',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
