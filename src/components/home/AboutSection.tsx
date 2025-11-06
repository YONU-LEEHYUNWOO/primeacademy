'use client';

import Image from 'next/image';
import { BookOpen, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useI18n } from '@/hooks/useI18n';

/**
 * 학원 소개 섹션 컴포넌트
 * 학원의 비전, 교육 철학, 지도 방식을 소개하는 섹션
 * framer-motion을 사용한 애니메이션 적용
 */
export function AboutSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: BookOpen,
      title: t.about_feature1_title,
      description: t.about_feature1_desc,
    },
    {
      icon: Target,
      title: t.about_feature2_title,
      description: t.about_feature2_desc,
    },
    {
      icon: Users,
      title: t.about_feature3_title,
      description: t.about_feature3_desc,
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t.about_title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t.about_subtitle}
          </p>
        </motion.div>

        {/* 메인 콘텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://picsum.photos/800/600"
              alt="학원 교실 환경"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold text-neutral-900">
              {t.about_believe}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {t.about_believe_text1}
            </p>
            <p className="text-neutral-600 leading-relaxed">
              {t.about_believe_text2}
            </p>
          </motion.div>
        </div>

        {/* 특징 카드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-primary-100 rounded-2xl p-8 border border-primary-200 hover:shadow-lg transition-shadow"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

