
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'My Portfolio Blog',
  description: 'A blog with my journey to becoming a developer and DevOps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${poppins.className} font-primary`}>
            <Navbar />
              {children}
            <Footer />
      </body>
    </html>
  )
}
