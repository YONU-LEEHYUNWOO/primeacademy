'use client';

import Image from 'next/image';
import { CheckCircle2, BookOpen, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

/**
 * 차별점 데이터 타입 정의
 */
type Differentiator = {
  icon: typeof BookOpen;
  title: string;
  description: string;
  detailedDescription: string[];
  features: string[];
  benefits: string[];
  image: string;
  bgGradient: string;
  textColor: string;
  titleColor: string;
};

/**
 * 차별점 소개 섹션 컴포넌트
 * 프라임 수학학원만의 독특한 커리큘럼과 관리 시스템을 소개하는 섹션
 * framer-motion을 사용한 애니메이션 적용
 * 배너 형식의 카드 레이아웃
 */
export function DifferentiationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedItem, setSelectedItem] = useState<Differentiator | null>(null);

  const differentiators: Differentiator[] = [
    {
      icon: BookOpen,
      title: '맞춤형 커리큘럼',
      description:
        '학생별 수준과 목표에 맞춘 개인별 학습 계획을 수립하고, 단계별로 관리합니다.',
      detailedDescription: [
        '각 학생의 현재 수준을 정확히 진단하여 개인별 학습 계획을 수립합니다.',
        '학생의 학습 스타일과 속도를 고려한 맞춤형 커리큘럼을 제공합니다.',
        '단계별 목표 설정을 통해 체계적인 실력 향상을 보장합니다.',
      ],
      features: ['개인별 학습 진도 관리', '취약점 분석 및 보완', '목표별 맞춤 학습'],
      benefits: [
        '학생의 수준에 맞는 학습으로 효율성 극대화',
        '개인별 특성을 반영한 맞춤형 교육',
        '단계별 성과 확인을 통한 지속적인 개선',
      ],
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
      detailedDescription: [
        '과목별로 5-8명의 소규모 그룹을 구성하여 집중도 높은 수업 환경을 제공합니다.',
        '소규모 그룹의 장점을 활용하여 개별 질의응답과 맞춤형 피드백이 가능합니다.',
        '그룹 내 상호작용을 통한 학습 동기 부여와 건강한 경쟁 환경을 조성합니다.',
      ],
      features: ['과목별 소규모 그룹', '집중도 높은 수업 환경', '개별 질의응답 가능'],
      benefits: [
        '개별 관리를 통한 세밀한 학습 지도',
        '집중도 높은 수업으로 학습 효율 향상',
        '동료와의 상호작용을 통한 학습 동기 부여',
      ],
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
      detailedDescription: [
        '주간/월간 정기 평가를 통해 학생의 학습 상태를 지속적으로 모니터링합니다.',
        '평가 결과를 바탕으로 개별 피드백과 학습 계획 조정을 실시합니다.',
        '학부모와의 정기 상담을 통해 학습 현황을 공유하고 협력합니다.',
      ],
      features: ['정기 평가 및 분석', '학부모 상담 제공', '학습 리포트 제공'],
      benefits: [
        '학습 상태의 지속적인 모니터링',
        '데이터 기반의 객관적인 학습 관리',
        '학부모와의 협력을 통한 효과적인 학습 지원',
      ],
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
      detailedDescription: [
        '수년간의 교육 경험을 바탕으로 검증된 학습 방법론을 적용합니다.',
        '최신 교육 트렌드와 입시 동향을 반영한 효율적인 학습 전략을 제공합니다.',
        '학생들의 성과 데이터를 분석하여 지속적으로 학습 방법을 개선합니다.',
      ],
      features: ['검증된 학습 방법론', '효율적인 학습 전략', '지속적인 개선'],
      benefits: [
        '검증된 방법론으로 안정적인 성과 보장',
        '효율적인 학습으로 시간 절약',
        '지속적인 개선을 통한 최적의 학습 환경',
      ],
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
                className={`relative rounded-2xl overflow-hidden shadow-lg ${item.bgGradient} min-h-[300px] md:min-h-[350px] flex flex-col md:flex-row cursor-pointer`}
                variants={cardVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                onClick={() => setSelectedItem(item)}
              >
                {/* 이미지 - 짝수는 왼쪽, 홀수는 오른쪽 */}
                <div className={`relative w-full md:w-1/2 h-[250px] md:h-auto ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
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

        {/* 차별점 상세 모달 */}
        {selectedItem && (
          <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 ${selectedItem.bgGradient} rounded-xl flex items-center justify-center`}>
                    {(() => {
                      const Icon = selectedItem.icon;
                      return <Icon className="h-8 w-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-neutral-900">
                      {selectedItem.title}
                    </DialogTitle>
                    <DialogDescription className="text-neutral-600 mt-1">
                      프라임 수학학원의 차별화된 교육 시스템
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                {/* 이미지 */}
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 기본 설명 */}
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">개요</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* 상세 설명 */}
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">상세 설명</h4>
                  <ul className="space-y-3">
                    {selectedItem.detailedDescription.map((desc, idx) => (
                      <li key={idx} className="flex items-start text-neutral-600">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 주요 특징 */}
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">주요 특징</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedItem.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-primary-50 rounded-lg border border-primary-200"
                      >
                        <p className="text-sm font-medium text-primary-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 기대 효과 */}
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">기대 효과</h4>
                  <ul className="space-y-2">
                    {selectedItem.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-neutral-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}

