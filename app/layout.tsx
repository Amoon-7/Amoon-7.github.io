import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Data Science & AI Engineer`,
  description: 'Data science and AI engineering: machine learning, generative AI and MLOps, from model to production.',
  openGraph: { title: `${site.name} | Data Science & AI Engineer`, type: 'website', images: ['/photo.jpg'] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const umami = process.env.NEXT_PUBLIC_UMAMI_ID;
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap" />
        {umami && <script defer src={process.env.NEXT_PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js'} data-website-id={umami} />}
      </head>
      <body>{children}</body>
    </html>
  );
}
