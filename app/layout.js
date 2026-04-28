import './globals.css';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Donald Smith Ogono | Red Team Tool Developer & EDR Evasion Specialist',
  description: 'Offensive security researcher specializing in EDR evasion, syscall-level exploitation, and custom red team tooling. Explore Project Charon and other low-level security research.',
  keywords: ['Red Team', 'EDR Evasion', 'Exploit Development', 'Cybersecurity', 'Windows Internals', 'Systems Programming'],
  authors: [{ name: 'Donald Smith Ogono' }],
  openGraph: {
    title: 'Donald Smith Ogono | Red Team Tool Developer',
    description: 'Low-level offensive security research and custom tooling.',
    url: 'https://donaldsmith.dev',
    siteName: 'DSO Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donald Smith Ogono | Red Team Tool Developer',
    description: 'Low-level offensive security research and custom tooling.',
  },
  // Security Headers simulation
  other: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-[#0a0a0a] text-[#e6e6e6] font-sans antialiased`}>
        <div className="min-h-screen">
          <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-[#333333] px-6 py-4">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
              <span className="font-mono text-[#00ff9f] font-bold tracking-tighter text-xl">DSO.OS</span>
              <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-[#a0a0a0]">
                <a href="#projects" className="hover:text-[#00ff9f] transition-colors">Projects</a>
                <a href="#skills" className="hover:text-[#00ff9f] transition-colors">Skills</a>
                <a href="#about" className="hover:text-[#00ff9f] transition-colors">About</a>
                <a href="#contact" className="hover:text-[#00ff9f] transition-colors">Contact</a>
              </div>
            </div>
          </nav>
          <main className="pt-20">
            {children}
          </main>
          <footer className="py-12 border-t border-[#333333] text-center text-[#a0a0a0] text-xs font-mono">
            &copy; 2026 DONALD SMITH OGONO // SECURE PORTFOLIO BUILDER
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
