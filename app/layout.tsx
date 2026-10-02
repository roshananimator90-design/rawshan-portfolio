import type { Metadata } from 'next';
import '../styles/globals.css';
import { RootProvider } from './RootProvider';

export const metadata: Metadata = {
  title: 'Rawshan Kumar - AI Product Designer',
  description: 'Designing AI-native products where humans stay in control. AI Product Design, Agentic UX, Enterprise SaaS, Healthcare + AI',
  openGraph: {
    title: 'Rawshan Kumar - Senior Product Designer',
    description: 'AI-native product design. Enterprise SaaS. Healthcare. Human-in-the-loop.',
    url: 'https://rawshankumar.design',
    siteName: 'Rawshan Kumar',
    images: [
      {
        url: 'https://rawshankumar.design/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F0F1F" />
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
