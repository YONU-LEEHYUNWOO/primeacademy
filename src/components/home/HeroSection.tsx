'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '@/hooks/useI18n';

/**
 * Hero 섹션 컴포넌트
 * 메인 비주얼과 CTA 버튼을 포함하는 첫 화면 섹션
 * framer-motion을 사용한 세련된 애니메이션 적용
 */
export function HeroSection() {
    const { t } = useI18n();
    // 애니메이션 variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: 'easeOut',
            },
        },
        tap: {
            scale: 0.98,
        },
    };

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* 배경 이미지 - 애니메이션 적용 */}
            <motion.div
                className="absolute inset-0 z-0"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            >
                <Image
                    src="https://picsum.photos/1440/800"
                    alt="프라임 수학학원 교실"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* 콘텐츠 */}
            <div className="relative z-10 container mx-auto px-4 py-20 text-center">
                <motion.div
                    className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl border border-white/20"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* 메인 타이틀 */}
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-neutral-900"
                            variants={itemVariants}
                        >
                            {t.hero_title}
                            <br />
                            <motion.span
                                className="text-primary-700 inline-block"
                                variants={itemVariants}
                            >
                                {t.hero_subtitle}
                            </motion.span>
                        </motion.h1>

                        {/* 설명 텍스트 */}
                        <motion.p
                            className="text-lg md:text-xl mb-10 text-neutral-600 max-w-2xl mx-auto leading-relaxed"
                            variants={itemVariants}
                        >
                            {t.hero_description.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < t.hero_description.split('\n').length - 1 && <br />}
                                </span>
                            ))}
                        </motion.p>

                        {/* 버튼 그룹 */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            variants={containerVariants}
                        >
                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-primary-500 text-white hover:bg-primary-700 rounded-lg px-8 py-6 text-lg font-semibold shadow-lg shadow-primary-500/30 transition-all duration-300"
                                >
                                    <Link href="/reservation" className="flex items-center gap-2">
                                        <span>{t.hero_reservation}</span>
                                        <motion.div
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            <ArrowRight className="h-5 w-5" />
                                        </motion.div>
                                    </Link>
                                </Button>
                            </motion.div>

                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-primary-700 hover:bg-primary-50 border-2 border-primary-500 rounded-lg px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300"
                                >
                                    <Link href="/about" className="flex items-center gap-2">
                                        <span>{t.hero_about}</span>
                                        <motion.div
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                                delay: 0.3,
                                            }}
                                        >
                                            <ArrowRight className="h-5 w-5" />
                                        </motion.div>
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
