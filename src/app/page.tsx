'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { StatsSection } from '@/components/home/StatsSection';
import { DifferentiationSection } from '@/components/home/DifferentiationSection';
import { TeachersSection } from '@/components/home/TeachersSection';
import { ReservationCTASection } from '@/components/home/ReservationCTASection';

/**
 * 홈페이지 메인 컴포넌트
 * 모든 섹션을 조합하여 홈페이지를 구성
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <DifferentiationSection />
        <TeachersSection />
        <ReservationCTASection />
      </main>
      <Footer />
    </div>
  );
}