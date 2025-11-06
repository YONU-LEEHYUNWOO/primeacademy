'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * 상담 예약 CTA 섹션 컴포넌트
 * 사용자를 상담 예약 페이지로 유도하는 최종 전환 섹션
 * framer-motion을 사용한 애니메이션 적용
 */
export function ReservationCTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    return (
        <section ref={ref} className="py-20 md:py-32 bg-gradient-to-r from-primary-500 to-primary-700">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-3xl mx-auto text-center text-white"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.div className="mb-6" variants={itemVariants}>
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <Calendar className="h-16 w-16 mx-auto mb-4 text-primary-100" />
                        </motion.div>
                    </motion.div>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        variants={itemVariants}
                    >
                        자녀에게 맞는 학습 상담을 받아보세요
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed"
                        variants={itemVariants}
                    >
                        프라임 수학학원의 전문 상담사가 자녀의 학습 상황을 분석하고
                        <br />
                        최적의 학습 방법을 제안해드립니다
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-primary-700 hover:bg-primary-100 rounded-lg px-8 py-6 text-lg font-semibold"
                            >
                                <Link href="/reservation" className="flex items-center gap-2">
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        상담 예약하기
                                    </motion.span>
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
                        <motion.div variants={itemVariants}>
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-primary-700 hover:bg-primary-100 rounded-lg px-8 py-6 text-lg font-semibold"
                            >
                                <Link href="/location" className="flex items-center gap-2">
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        오시는 길
                                    </motion.span>
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
                    <motion.p
                        className="mt-8 text-sm text-white/80"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        입력된 정보는 상담 목적 외 사용되지 않습니다.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
