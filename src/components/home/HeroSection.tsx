'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/**
 * Hero 섹션 컴포넌트
 * 메인 비주얼과 CTA 버튼을 포함하는 첫 화면 섹션
 */
export function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* 배경 이미지 */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://picsum.photos/1440/800"
                    alt="프라임 수학학원 교실"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* 콘텐츠 */}
            <div className="relative z-10 container mx-auto px-4 py-20 text-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-neutral-900">
                        성적 향상의 중심
                        <br />
                        <span className="text-primary-700">프라임 수학학원</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-neutral-600 max-w-2xl mx-auto">
                        데이터 기반 성과 공개와 검증된 강사진으로
                        <br />
                        자녀의 수학 실력을 한 단계 높여드립니다
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary-500 text-white hover:bg-primary-700 rounded-lg px-8 py-6 text-lg font-semibold"
                        >
                            <Link href="/reservation" className="flex items-center gap-2">
                                상담 예약하기
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-primary-700 hover:bg-primary-50 border-2 border-primary-500 rounded-lg px-8 py-6 text-lg font-semibold"
                        >
                            <Link href="/about" className="flex items-center gap-2">
                                학원 소개
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
