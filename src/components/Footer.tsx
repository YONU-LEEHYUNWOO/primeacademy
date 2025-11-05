'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

/**
 * 푸터 컴포넌트
 * 학원 정보, 연락처, 정책 링크를 포함하는 하단 정보 영역
 */
export function Footer() {
    return (
        <footer className="bg-neutral-900 text-white">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* 학원 정보 */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">프라임 수학학원</h3>
                        <p className="text-neutral-400 text-sm">
                            성적 향상의 중심에서 함께하는 교육 여정
                        </p>
                    </div>

                    {/* 연락처 정보 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">연락처</h4>
                        <div className="space-y-2 text-sm text-neutral-400">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>02-1234-5678</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>info@prime-academy.co.kr</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 mt-0.5" />
                                <span>서울특별시 강남구 테헤란로 123</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4" />
                                <span>평일 14:00 - 22:00 / 주말 10:00 - 18:00</span>
                            </div>
                        </div>
                    </div>

                    {/* 정책 링크 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">정보</h4>
                        <div className="space-y-2 text-sm">
                            <Link
                                href="/privacy"
                                className="block text-neutral-400 hover:text-white transition-colors"
                            >
                                개인정보 처리방침
                            </Link>
                            <Link
                                href="/terms"
                                className="block text-neutral-400 hover:text-white transition-colors"
                            >
                                이용약관
                            </Link>
                        </div>
                        <p className="text-xs text-neutral-500 mt-6">
                            입력된 정보는 상담 목적 외 사용되지 않습니다.
                        </p>
                    </div>
                </div>

                {/* 저작권 */}
                <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-500">
                    <p>© 2025 프라임 수학학원. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
