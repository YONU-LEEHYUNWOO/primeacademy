'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * 헤더 컴포넌트
 * 로고, 네비게이션 메뉴, CTA 버튼을 포함하는 상단 네비게이션 바
 */
export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { href: '/results', label: '성과 및 통계' },
        { href: '/teachers', label: '강사진' },
        { href: '/difference', label: '차별점' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* 로고 */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-neutral-900">
                        프라임 수학학원
                    </span>
                </Link>

                {/* 데스크톱 네비게이션 */}
                <nav className="hidden md:flex items-center space-x-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-neutral-900 transition-colors hover:text-primary-500"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA 버튼 - 데스크톱 */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button
                        asChild
                        className="bg-primary-500 hover:bg-primary-700 text-white rounded-lg"
                    >
                        <Link href="/about">학원 소개</Link>
                    </Button>
                    <Button
                        asChild
                        className="bg-primary-500 hover:bg-primary-700 text-white rounded-lg"
                    >
                        <Link href="/location">오시는 길</Link>
                    </Button>
                    <Button
                        asChild
                        className="bg-primary-500 hover:bg-primary-700 text-white rounded-lg"
                    >
                        <Link href="/reservation">상담 예약하기</Link>
                    </Button>
                </div>

                {/* 모바일 메뉴 버튼 */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="메뉴 열기"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* 모바일 메뉴 */}
            <div
                className={cn(
                    'md:hidden border-t border-neutral-200 bg-white transition-all duration-300',
                    isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                )}
            >
                <nav className="container mx-auto px-4 py-4 space-y-3">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-sm font-medium text-neutral-900 hover:text-primary-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button
                        asChild
                        className="w-full bg-primary-500 hover:bg-primary-700 text-white rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link href="/about">학원 소개</Link>
                    </Button>
                    <Button
                        asChild
                        className="w-full bg-primary-500 hover:bg-primary-700 text-white rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link href="/location">오시는 길</Link>
                    </Button>
                    <Button
                        asChild
                        className="w-full bg-primary-500 hover:bg-primary-700 text-white rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link href="/reservation">상담 예약하기</Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
}