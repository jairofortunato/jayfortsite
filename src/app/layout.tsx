import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'jay fort',
  description: 'lesssgooo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>

    <html lang="en">
      <body className={inter.className}>
 {children}
<Toaster />

</body>
    </html>
    </AuthProvider>

  )
}



{/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
{/*</ThemeProvider> */}