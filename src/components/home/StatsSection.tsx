'use client';

import { TrendingUp, Award, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useI18n } from '@/hooks/useI18n';

/**
 * 숫자 카운트업 애니메이션 컴포넌트
 */
function CountUp({ end, duration = 2, suffix = '', isDecimal = false }: { end: number; duration?: number; suffix?: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const currentValue = progress * end;
      setCount(isDecimal ? Math.round(currentValue * 10) / 10 : Math.floor(currentValue));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration, isDecimal]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/**
 * 성과 통계 섹션 컴포넌트
 * 학원의 객관적인 성과 데이터를 시각적으로 제시하는 섹션
 * framer-motion을 사용한 애니메이션 적용
 */
export function StatsSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: TrendingUp,
      value: 85,
      suffix: '%',
      label: t.stats_improvement,
      description: t.stats_improvement_desc,
      color: 'text-primary-500',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Award,
      value: 92,
      suffix: '%',
      label: t.stats_pass_rate,
      description: t.stats_pass_rate_desc,
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-500/10',
    },
    {
      icon: Users,
      value: 450,
      suffix: '+',
      label: t.stats_students,
      description: t.stats_students_desc,
      color: 'text-accent-500',
      bgColor: 'bg-accent-500/10',
    },
    {
      icon: Target,
      value: 4.5,
      suffix: '',
      label: t.stats_average,
      description: t.stats_average_desc,
      color: 'text-primary-700',
      bgColor: 'bg-primary-200',
      isDecimal: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t.stats_title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t.stats_subtitle}
          </p>
        </motion.div>

        {/* 통계 카드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition-shadow text-center"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </motion.div>
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                </div>
                <div className="text-lg font-semibold text-neutral-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-neutral-600">{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 추가 설명 */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t.stats_disclaimer.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.stats_disclaimer.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

