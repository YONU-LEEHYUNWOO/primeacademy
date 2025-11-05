'use client';

import Image from 'next/image';
import { BookOpen, Target, Users } from 'lucide-react';

/**
 * 학원 소개 섹션 컴포넌트
 * 학원의 비전, 교육 철학, 지도 방식을 소개하는 섹션
 */
export function AboutSection() {
  const features = [
    {
      icon: BookOpen,
      title: '체계적인 커리큘럼',
      description: '개인별 수준에 맞춘 맞춤형 학습 프로그램으로 체계적인 실력 향상을 보장합니다.',
    },
    {
      icon: Target,
      title: '명확한 목표 설정',
      description: '학생별 목표를 정확히 설정하고 달성까지 단계별로 관리합니다.',
    },
    {
      icon: Users,
      title: '전문 강사진',
      description: '풍부한 경력과 검증된 실력을 갖춘 전문 강사진이 책임지고 지도합니다.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            프라임 수학학원의 교육 철학
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            단순한 문제 풀이가 아닌, 수학적 사고력과 문제 해결 능력을 기르는 교육을 지향합니다
          </p>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="https://picsum.photos/800/600"
              alt="학원 교실 환경"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-900">
              우리는 믿습니다
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              모든 학생은 자신만의 학습 속도와 방법이 있습니다. 프라임 수학학원은
              각 학생의 특성을 깊이 이해하고, 개인별 맞춤형 학습 계획을 통해
              최적의 성과를 이끌어냅니다.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              단기적인 성적 향상뿐만 아니라, 장기적인 학습 능력과 수학적 사고력을
              기르는 것을 목표로 합니다. 이를 통해 학생들이 스스로 문제를 해결할 수
              있는 힘을 키워갑니다.
            </p>
          </div>
        </div>

        {/* 특징 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-primary-100 rounded-2xl p-8 border border-primary-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
