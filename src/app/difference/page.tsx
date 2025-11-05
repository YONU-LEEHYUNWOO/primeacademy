'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { CheckCircle2, BookOpen, Users, BarChart3, Target, Clock, Shield, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

/**
 * 차별점 소개 페이지
 * 프라임 수학학원만의 독특한 커리큘럼과 관리 시스템을 상세히 소개하는 페이지
 */
export default function DifferencePage() {
  const differentiators = [
    {
      icon: BookOpen,
      title: '맞춤형 커리큘럼',
      description:
        '학생별 수준과 목표에 맞춘 개인별 학습 계획을 수립하고, 단계별로 관리합니다.',
      features: [
        '개인별 학습 진도 관리',
        '취약점 분석 및 보완',
        '목표별 맞춤 학습',
        '단계별 성과 확인',
      ],
      image: 'https://picsum.photos/600/400?random=30',
    },
    {
      icon: Users,
      title: '소규모 그룹 수업',
      description:
        '과목별로 소규모 그룹을 구성하여 집중도 높은 수업과 개별 관리를 동시에 실현합니다.',
      features: [
        '과목별 소규모 그룹',
        '집중도 높은 수업 환경',
        '개별 질의응답 가능',
        '동기 부여 효과',
      ],
      image: 'https://picsum.photos/600/400?random=31',
    },
    {
      icon: BarChart3,
      title: '체계적인 학습 관리',
      description:
        '정기적인 평가와 피드백을 통해 학습 상태를 모니터링하고 지속적으로 개선합니다.',
      features: [
        '정기 평가 및 분석',
        '학부모 상담 제공',
        '학습 리포트 제공',
        '지속적인 개선',
      ],
      image: 'https://picsum.photos/600/400?random=32',
    },
    {
      icon: CheckCircle2,
      title: '검증된 학습 방법',
      description:
        '오랜 기간 검증된 학습 방법론을 바탕으로 체계적이고 효율적인 학습을 제공합니다.',
      features: [
        '검증된 학습 방법론',
        '효율적인 학습 전략',
        '지속적인 개선',
        '데이터 기반 접근',
      ],
      image: 'https://picsum.photos/600/400?random=33',
    },
  ];

  const comparisonFeatures = [
    {
      category: '학습 관리',
      items: [
        { feature: '개인별 맞춤 학습 계획', us: true, others: false },
        { feature: '정기적인 성과 평가', us: true, others: true },
        { feature: '학부모 상담 제공', us: true, others: false },
        { feature: '학습 리포트 제공', us: true, others: false },
      ],
    },
    {
      category: '수업 방식',
      items: [
        { feature: '소규모 그룹 수업', us: true, others: false },
        { feature: '개별 질의응답', us: true, others: false },
        { feature: '단계별 학습 관리', us: true, others: false },
        { feature: '집중도 높은 환경', us: true, others: false },
      ],
    },
    {
      category: '강사진',
      items: [
        { feature: '검증된 경력', us: true, others: true },
        { feature: '개별 맞춤 지도', us: true, others: false },
        { feature: '지속적인 교육', us: true, others: false },
        { feature: '학생별 특성 이해', us: true, others: false },
      ],
    },
  ];

  const uniqueFeatures = [
    {
      icon: Target,
      title: '목표 지향적 관리',
      description: '학생별 목표를 정확히 설정하고 달성까지 단계별로 관리합니다.',
    },
    {
      icon: Clock,
      title: '시간 효율성',
      description: '체계적인 학습 계획으로 학습 시간을 효율적으로 활용합니다.',
    },
    {
      icon: Shield,
      title: '신뢰할 수 있는 성과',
      description: '데이터로 증명하는 객관적인 성과와 지속적인 개선을 보장합니다.',
    },
    {
      icon: TrendingUp,
      title: '지속적인 성장',
      description: '단기적인 성적 향상뿐만 아니라 장기적인 학습 능력을 기릅니다.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero 섹션 */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                프라임 수학학원의 차별점
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                단순한 학원이 아닌, 학습 성과를 체계적으로 관리하는 전문 교육 기관
              </p>
            </div>
          </div>
        </section>

        {/* 주요 차별점 섹션 */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                      !isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={isEven ? '' : 'md:order-2'}>
                      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className={isEven ? '' : 'md:order-1'}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-900">{item.title}</h2>
                      </div>
                      <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="space-y-3">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-neutral-600">
                            <CheckCircle2 className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 타 학원 비교 섹션 */}
        <section className="py-20 md:py-32 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                타 학원과의 차이점
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                프라임 수학학원만의 독특한 학습 관리 시스템
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {comparisonFeatures.map((category, catIndex) => (
                <Card
                  key={catIndex}
                  className="bg-white rounded-2xl p-8 border border-neutral-200"
                >
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg"
                      >
                        <span className="text-neutral-900 font-medium">{item.feature}</span>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center">
                            <span className="text-sm text-neutral-600 mr-3">타 학원</span>
                            {item.others ? (
                              <CheckCircle2 className="h-5 w-5 text-neutral-400" />
                            ) : (
                              <div className="h-5 w-5 rounded-full border-2 border-neutral-300" />
                            )}
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-primary-700 font-semibold mr-3">
                              프라임
                            </span>
                            <CheckCircle2 className="h-5 w-5 text-primary-500" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 추가 특징 섹션 */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                프라임 수학학원의 추가 특징
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                학생과 학부모를 위한 다양한 혜택을 제공합니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {uniqueFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 학습 프로세스 섹션 */}
        <section className="py-20 md:py-32 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                체계적인 학습 프로세스
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                프라임 수학학원의 단계별 학습 관리 시스템
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    step: '1',
                    title: '진단 평가',
                    description: '학생의 현재 수준과 취약점을 정확히 파악합니다.',
                  },
                  {
                    step: '2',
                    title: '맞춤 계획',
                    description: '개인별 목표와 진도에 맞춘 학습 계획을 수립합니다.',
                  },
                  {
                    step: '3',
                    title: '체계적 학습',
                    description: '기초부터 심화까지 단계별로 체계적으로 학습합니다.',
                  },
                  {
                    step: '4',
                    title: '지속 관리',
                    description: '정기 평가와 피드백을 통해 지속적으로 관리합니다.',
                  },
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">{process.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {process.title}
                    </h3>
                    <p className="text-sm text-neutral-600">{process.description}</p>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-300 transform translate-x-1/2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-500 to-primary-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              차별화된 교육을 경험하세요
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              프라임 수학학원의 체계적인 학습 관리 시스템으로 자녀의 수학 실력을 향상시켜보세요
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary-700 hover:bg-neutral-100 text-lg px-8 py-6 rounded-lg"
            >
              <Link href="/reservation">상담 예약하기</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

