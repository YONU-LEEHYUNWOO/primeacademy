'use client';

import Image from 'next/image';
import { CheckCircle2, BookOpen, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * 차별점 소개 섹션 컴포넌트
 * 프라임 수학학원만의 독특한 커리큘럼과 관리 시스템을 소개하는 섹션
 * framer-motion을 사용한 애니메이션 적용
 * 배너 형식의 카드 레이아웃
 */
export function DifferentiationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const differentiators = [
    {
      icon: BookOpen,
      title: '맞춤형 커리큘럼',
      description:
        '학생별 수준과 목표에 맞춘 개인별 학습 계획을 수립하고, 단계별로 관리합니다.',
      image: 'https://picsum.photos/600/400?random=50',
      bgGradient: 'bg-gradient-to-b from-blue-500 to-blue-900',
      textColor: 'text-yellow-200',
      titleColor: 'text-white',
    },
    {
      icon: Users,
      title: '소규모 그룹 수업',
      description:
        '과목별로 소규모 그룹을 구성하여 집중도 높은 수업과 개별 관리를 동시에 실현합니다.',
      image: 'https://picsum.photos/600/400?random=51',
      bgGradient: 'bg-gradient-to-br from-purple-600 to-purple-900',
      textColor: 'text-white',
      titleColor: 'text-white',
    },
    {
      icon: BarChart3,
      title: '체계적인 학습 관리',
      description:
        '정기적인 평가와 피드백을 통해 학습 상태를 모니터링하고 지속적으로 개선합니다.',
      image: 'https://picsum.photos/600/400?random=52',
      bgGradient: 'bg-gradient-to-b from-emerald-500 to-emerald-800',
      textColor: 'text-white',
      titleColor: 'text-white',
    },
    {
      icon: CheckCircle2,
      title: '검증된 학습 방법',
      description:
        '오랜 기간 검증된 학습 방법론을 바탕으로 체계적이고 효율적인 학습을 제공합니다.',
      image: 'https://picsum.photos/600/400?random=53',
      bgGradient: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-white',
      titleColor: 'text-white',
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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
            프라임 수학학원의 차별점
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            단순한 학원이 아닌, 학습 성과를 체계적으로 관리하는 전문 교육 기관
          </p>
        </motion.div>

        {/* 차별점 배너 그리드 - 옆으로 긴 배너 형식 */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-lg ${item.bgGradient} min-h-[300px] md:min-h-[350px] flex flex-col md:flex-row`}
                variants={cardVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                {/* 이미지 - 짝수는 왼쪽, 홀수는 오른쪽 */}
                <div className={`relative w-full md:w-1/2 h-[250px] md:h-auto ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 ${item.bgGradient} opacity-60`} />
                  {/* 아이콘 오버레이 */}
                  <div className="absolute top-6 right-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* 콘텐츠 */}
                <div className={`flex-1 p-8 md:p-12 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${item.titleColor}`}>
                    {item.title}
                  </h3>
                  <p className={`text-base md:text-lg leading-relaxed ${item.textColor} font-medium`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

