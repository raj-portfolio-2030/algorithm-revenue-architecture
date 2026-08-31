import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import './v31.css';

const display = Cormorant_Garamond({ variable: '--font-display', subsets: ['latin'], weight: ['500', '600'] });
const sans = Manrope({ variable: '--font-sans', subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://algorithm-revenue-architecture.rajakumarmba12.chatgpt.site'),
  title: 'The Algorithm Commercial Growth Architecture',
  description: 'A CEO-facing commercial operating system connecting products, regulated engineering, market intelligence, customer relationships and account expansion.',
  openGraph: {
    title: 'The Algorithm Commercial Growth Architecture',
    description: 'Products, regulated engineering, account intelligence and customer expansion connected into one commercial operating system.',
    images: [{ url: '/og.png', width: 1680, height: 945, alt: 'Building the Next Revenue Engine' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Algorithm Commercial Growth Architecture',
    description: 'Products, regulated engineering, account intelligence and customer expansion connected into one commercial operating system.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
