import Navbar from '@/components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'
import clsx from "clsx" 

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: "Gulista's Portfolio",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(montserrat.className, "bg-dark text-light")}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
