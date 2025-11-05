'use client';

import { TrendingUp, Award, Users, Target } from 'lucide-react';

/**
 * 성과 통계 섹션 컴포넌트
 * 학원의 객관적인 성과 데이터를 시각적으로 제시하는 섹션
 */
export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: '85%',
      label: '성적 향상률',
      description: '평균 성적 향상률',
      color: 'text-primary-500',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Award,
      value: '92%',
      label: '합격률',
      description: '목표 학교 합격률',
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-500/10',
    },
    {
      icon: Users,
      value: '450+',
      label: '누적 학생',
      description: '지금까지 교육한 학생 수',
      color: 'text-accent-500',
      bgColor: 'bg-accent-500/10',
    },
    {
      icon: Target,
      value: '4.5',
      label: '평균 성적',
      description: '내신 평균 성적',
      color: 'text-primary-700',
      bgColor: 'bg-primary-200',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            객관적인 성과로 증명합니다
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            데이터로 확인하는 프라임 수학학원의 검증된 성과
          </p>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition-shadow text-center"
              >
                <div
                  className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-neutral-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-neutral-600">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* 추가 설명 */}
        <div className="mt-16 text-center">
          <p className="text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            * 통계는 2024년 기준 실제 데이터를 반영한 수치입니다.
            <br />
            개인별 결과는 다를 수 있으며, 지속적인 관리를 통해 최적의 성과를 도출합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
