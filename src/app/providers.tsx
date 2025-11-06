// In Next.js, this file would be called: app/providers.tsx
'use client';

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { useI18nStore } from '@/lib/i18n-store';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();
  const { isLoaded, initialize } = useI18nStore();

  useEffect(() => {
    // i18n 스토어 초기화
    if (typeof window !== 'undefined' && !isLoaded) {
      initialize();
    }
  }, [initialize, isLoaded]);

  useEffect(() => {
    // MetaMask 및 기타 브라우저 확장 프로그램 오류 필터링
    const originalError = console.error;
    const originalWarn = console.warn;

    console.error = (...args: any[]) => {
      const errorMessage = args.join(' ');
      // MetaMask 관련 오류 무시
      if (
        errorMessage.includes('MetaMask') ||
        errorMessage.includes('Failed to connect to MetaMask') ||
        errorMessage.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn')
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      const warnMessage = args.join(' ');
      // MetaMask 관련 경고 무시
      if (
        warnMessage.includes('MetaMask') ||
        warnMessage.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn')
      ) {
        return;
      }
      originalWarn.apply(console, args);
    };

    // 전역 오류 핸들러
    const handleError = (event: ErrorEvent) => {
      if (
        event.message?.includes('MetaMask') ||
        event.message?.includes('Failed to connect to MetaMask') ||
        event.filename?.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn')
      ) {
        event.preventDefault();
        return false;
      }
    };

    // Promise rejection 핸들러
    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason?.toString() || '';
      if (
        reason.includes('MetaMask') ||
        reason.includes('Failed to connect to MetaMask') ||
        reason.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn')
      ) {
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
