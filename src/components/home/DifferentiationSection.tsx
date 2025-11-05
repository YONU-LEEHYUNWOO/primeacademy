'use client';

import { CheckCircle2, BookOpen, Users, BarChart3 } from 'lucide-react';

/**
 * 차별점 소개 섹션 컴포넌트
 * 프라임 수학학원만의 독특한 커리큘럼과 관리 시스템을 소개하는 섹션
 */
export function DifferentiationSection() {
  const differentiators = [
    {
      icon: BookOpen,
      title: '맞춤형 커리큘럼',
      description:
        '학생별 수준과 목표에 맞춘 개인별 학습 계획을 수립하고, 단계별로 관리합니다.',
      features: ['개인별 학습 진도 관리', '취약점 분석 및 보완', '목표별 맞춤 학습'],
    },
    {
      icon: Users,
      title: '소규모 그룹 수업',
      description:
        '과목별로 소규모 그룹을 구성하여 집중도 높은 수업과 개별 관리를 동시에 실현합니다.',
      features: ['과목별 소규모 그룹', '집중도 높은 수업 환경', '개별 질의응답 가능'],
    },
    {
      icon: BarChart3,
      title: '체계적인 학습 관리',
      description:
        '정기적인 평가와 피드백을 통해 학습 상태를 모니터링하고 지속적으로 개선합니다.',
      features: ['정기 평가 및 분석', '학부모 상담 제공', '학습 리포트 제공'],
    },
    {
      icon: CheckCircle2,
      title: '검증된 학습 방법',
      description:
        '오랜 기간 검증된 학습 방법론을 바탕으로 체계적이고 효율적인 학습을 제공합니다.',
      features: ['검증된 학습 방법론', '효율적인 학습 전략', '지속적인 개선'],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            프라임 수학학원의 차별점
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            단순한 학원이 아닌, 학습 성과를 체계적으로 관리하는 전문 교육 기관
          </p>
        </div>

        {/* 차별점 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
