import type { Metadata } from 'next';
import {
  IBM_Plex_Sans_Arabic,
  Inter,
  Noto_Kufi_Arabic,
  Sora,
} from 'next/font/google';
import './globals.css';
import GlobalShell from '@/components/layout/GlobalShell';
import { organizationSchema } from '@/lib/schema';
import { absoluteUrl, siteConfig } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-kufi-arabic',
  display: 'swap',
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    images: [
      {
        url: absoluteUrl('/images/hero-equipment.jpg'),
        width: 1200,
        height: 630,
        alt: 'MYSH heavy equipment rental fleet in the UAE',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sora.variable} ${notoKufiArabic.variable} ${ibmPlexSansArabic.variable}`}
      >
        <GlobalShell>{children}</GlobalShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
      </body>
    </html>
  );
}
