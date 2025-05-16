import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Assuming Geist is a custom font setup or should be replaced by a standard next/font like Inter
import './globals.css';
import { AppProviders } from '@/components/AppProviders';
import { AppHeader } from '@/components/AppHeader';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MarketSim',
  description: 'A simulated e-commerce experience by MarketSim.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* suppressHydrationWarning might be needed if dark/light theme causes issues initially */}
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <AppProviders>
          <div className="min-h-screen flex flex-col bg-background">
            <AppHeader />
            <main className="flex-grow container mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
              {children}
            </main>
            <footer className="text-center p-6 text-sm text-muted-foreground border-t border-border">
              © {new Date().getFullYear()} MarketSim. Freshness simulated daily.
            </footer>
          </div>
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
