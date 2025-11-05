'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

/**
 * 상담 예약 CTA 섹션 컴포넌트
 * 사용자를 상담 예약 페이지로 유도하는 최종 전환 섹션
 */
export function ReservationCTASection() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary-500 to-primary-700">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <div className="mb-6">
                        <Calendar className="h-16 w-16 mx-auto mb-4 text-primary-100" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        자녀에게 맞는 학습 상담을 받아보세요
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                        프라임 수학학원의 전문 상담사가 자녀의 학습 상황을 분석하고
                        <br />
                        최적의 학습 방법을 제안해드립니다
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-primary-700 hover:bg-primary-100 rounded-lg px-8 py-6 text-lg font-semibold"
                        >
                            <Link href="/reservation" className="flex items-center gap-2">
                                상담 예약하기
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-primary-700 hover:bg-primary-100 rounded-lg px-8 py-6 text-lg font-semibold"
                        >
                            <Link href="/location" className="flex items-center gap-2">
                                오시는 길
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                    <p className="mt-8 text-sm text-white/80">
                        입력된 정보는 상담 목적 외 사용되지 않습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
