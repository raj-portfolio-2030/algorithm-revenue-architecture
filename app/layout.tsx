import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({ variable: '--font-display', subsets: ['latin'], weight: ['500', '600'] });
const sans = Manrope({ variable: '--font-sans', subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://algorithm-revenue-architecture.rajakumarmba12.chatgpt.site'),
  title: 'The Algorithm Revenue Architecture | Building the Next Revenue Engine',
  description: 'A strategic commercial architecture connecting The Algorithm’s products, engineering capabilities, markets and customer relationships into a repeatable revenue system.',
  openGraph: {
    title: 'The Algorithm Revenue Architecture | Building the Next Revenue Engine',
    description: 'Product IP, engineering, markets and account intelligence connected into a repeatable revenue system.',
    images: [{ url: '/og.png', width: 1680, height: 945, alt: 'Building the Next Revenue Engine' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Algorithm Revenue Architecture | Building the Next Revenue Engine',
    description: 'Product IP, engineering, markets and account intelligence connected into a repeatable revenue system.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
