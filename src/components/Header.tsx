'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, GraduationCap, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/hooks/useI18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

/**
 * 헤더 컴포넌트
 * 로고, 네비게이션 메뉴, CTA 버튼을 포함하는 상단 네비게이션 바
 * framer-motion을 사용한 애니메이션 적용
 */
export function Header() {
    const { t, locale, changeLocale, isLoaded } = useI18n();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuItems = [
        { href: '/results', label: t.menu_results },
        { href: '/teachers', label: t.menu_teachers },
        { href: '/difference', label: t.menu_difference },
    ];

    // 스크롤 감지
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={cn(
                'sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-all duration-300',
                isScrolled ? 'border-neutral-200 shadow-sm' : 'border-transparent'
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* 로고 - 아이콘 추가 */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center shadow-md shadow-primary-500/30">
                            <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                    </motion.div>
                    <motion.span
                        className="text-xl font-bold text-neutral-900"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        {t.academy_name}
                    </motion.span>
                </Link>

                {/* 데스크톱 네비게이션 */}
                <nav className="hidden md:flex items-center space-x-6">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <Link
                                href={item.href}
                                className="text-sm font-medium text-neutral-900 transition-colors hover:text-primary-500 relative group"
                            >
                                {item.label}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"
                                    initial={false}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* CTA 버튼 - 데스크톱 */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* 언어 선택 드롭다운 */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <motion.button
                                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Globe className="h-4 w-4 text-neutral-600" />
                                <span className="text-sm font-medium text-neutral-700">
                                    {locale === 'ko' ? '한국어' : 'English'}
                                </span>
                            </motion.button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-32">
                            <DropdownMenuItem
                                onClick={() => changeLocale('ko')}
                                className={cn(
                                    'cursor-pointer',
                                    locale === 'ko' && 'bg-primary-50 text-primary-700 font-semibold'
                                )}
                            >
                                한국어
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => changeLocale('en')}
                                className={cn(
                                    'cursor-pointer',
                                    locale === 'en' && 'bg-primary-50 text-primary-700 font-semibold'
                                )}
                            >
                                English
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {[
                        { href: '/about', label: t.menu_about },
                        { href: '/location', label: t.menu_location },
                        { href: '/reservation', label: t.menu_reservation },
                    ].map((button, index) => (
                        <motion.div
                            key={button.href}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                        >
                            <Button
                                asChild
                                className="bg-primary-500 hover:bg-primary-700 text-white rounded-lg transition-all"
                            >
                                <Link href={button.href}>
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {button.label}
                                    </motion.span>
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* 모바일 메뉴 버튼 */}
                <motion.button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={t.menu_open}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {isMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="h-6 w-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="h-6 w-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* 모바일 메뉴 */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden border-t border-neutral-200 bg-white"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <nav className="container mx-auto px-4 py-4 space-y-3">
                            {/* 언어 선택 - 모바일 */}
                            <div className="flex items-center justify-between py-2 border-b border-neutral-200 mb-3">
                                <span className="text-sm font-medium text-neutral-700">언어 선택</span>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => {
                                            changeLocale('ko');
                                            setIsMenuOpen(false);
                                        }}
                                        className={cn(
                                            'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                                            locale === 'ko'
                                                ? 'bg-primary-500 text-white'
                                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                        )}
                                    >
                                        한국어
                                    </button>
                                    <button
                                        onClick={() => {
                                            changeLocale('en');
                                            setIsMenuOpen(false);
                                        }}
                                        className={cn(
                                            'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                                            locale === 'en'
                                                ? 'bg-primary-500 text-white'
                                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                        )}
                                    >
                                        English
                                    </button>
                                </div>
                            </div>

                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="block py-2 text-sm font-medium text-neutral-900 hover:text-primary-500 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                            {[
                                { href: '/about', label: t.menu_about },
                                { href: '/location', label: t.menu_location },
                                { href: '/reservation', label: t.menu_reservation },
                            ].map((button, index) => (
                                <motion.div
                                    key={button.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (menuItems.length + index) * 0.1 }}
                                >
                                    <Button
                                        asChild
                                        className="w-full bg-primary-500 hover:bg-primary-700 text-white rounded-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Link href={button.href}>{button.label}</Link>
                                    </Button>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}