import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Knock Every Door',
  description: 'Adventist literature to every Michigan home by 2028',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body>
      < Header />
      <main className={inter.className}>{children}</main>
      <Footer />
      </body>
    </html>
  )
}
