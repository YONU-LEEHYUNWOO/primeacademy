'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { BookOpen, Target, Users, GraduationCap, Award, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

/**
 * 학원 소개 페이지
 * 학원의 교육 철학, 커리큘럼, 관리 시스템을 상세히 소개하는 페이지
 */
export default function AboutPage() {
  const educationPhilosophy = {
    title: '우리의 교육 철학',
    content: [
      '모든 학생은 자신만의 학습 속도와 방법이 있습니다. 프라임 수학학원은 각 학생의 특성을 깊이 이해하고, 개인별 맞춤형 학습 계획을 통해 최적의 성과를 이끌어냅니다.',
      '단기적인 성적 향상뿐만 아니라, 장기적인 학습 능력과 수학적 사고력을 기르는 것을 목표로 합니다. 이를 통해 학생들이 스스로 문제를 해결할 수 있는 힘을 키워갑니다.',
      '수학은 단순한 문제 풀이가 아닌, 논리적 사고와 창의적 문제 해결 능력을 기르는 도구입니다. 우리는 이러한 능력을 체계적으로 발전시켜 학생들이 단순히 시험을 잘 보는 것을 넘어, 진정한 수학적 소양을 갖추도록 돕습니다.',
    ],
  };

  const coreValues = [
    {
      icon: BookOpen,
      title: '체계적인 커리큘럼',
      description: '개인별 수준에 맞춘 맞춤형 학습 프로그램으로 체계적인 실력 향상을 보장합니다.',
      details: [
        '기초부터 심화까지 단계별 학습',
        '개인별 학습 진도 관리',
        '정기적인 평가와 피드백',
      ],
    },
    {
      icon: Target,
      title: '명확한 목표 설정',
      description: '학생별 목표를 정확히 설정하고 달성까지 단계별로 관리합니다.',
      details: [
        '학생별 목표 수립',
        '단계별 성과 확인',
        '지속적인 목표 조정',
      ],
    },
    {
      icon: Users,
      title: '전문 강사진',
      description: '풍부한 경력과 검증된 실력을 갖춘 전문 강사진이 책임지고 지도합니다.',
      details: [
        '검증된 경력과 실력',
        '개별 맞춤 지도',
        '지속적인 강사 교육',
      ],
    },
    {
      icon: GraduationCap,
      title: '입시 대비 전문',
      description: '내신과 수능을 모두 고려한 체계적인 입시 대비 프로그램을 제공합니다.',
      details: [
        '내신 대비 전문',
        '수능 대비 전략',
        '입시 상담 제공',
      ],
    },
    {
      icon: Award,
      title: '검증된 성과',
      description: '데이터로 증명하는 객관적인 성과와 합격률을 보여드립니다.',
      details: [
        '높은 합격률',
        '성적 향상률 85%',
        '학부모 만족도 높음',
      ],
    },
    {
      icon: Lightbulb,
      title: '창의적 사고력',
      description: '문제 해결 과정을 통해 수학적 사고력과 창의력을 기릅니다.',
      details: [
        '논리적 사고력 향상',
        '창의적 문제 해결',
        '비판적 사고 능력',
      ],
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
                프라임 수학학원에 오신 것을 환영합니다
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                단순한 문제 풀이가 아닌, 수학적 사고력과 문제 해결 능력을 기르는 교육을 지향합니다
              </p>
            </div>
          </div>
        </section>

        {/* 교육 철학 섹션 */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/800/600?random=10"
                  alt="학원 교실 환경"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                  {educationPhilosophy.title}
                </h2>
                {educationPhilosophy.content.map((paragraph, index) => (
                  <p key={index} className="text-neutral-600 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 핵심 가치 섹션 */}
        <section className="py-20 md:py-32 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                우리의 핵심 가치
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                프라임 수학학원이 추구하는 교육의 핵심 가치입니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {value.description}
                    </p>
                    <ul className="space-y-2">
                      {value.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-neutral-600"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 커리큘럼 소개 섹션 */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                  체계적인 커리큘럼 구성
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  프라임 수학학원은 학생별 수준과 목표에 맞춘 체계적인 커리큘럼을 제공합니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">기초 진단</h4>
                      <p className="text-neutral-600">
                        학생의 현재 수준을 정확히 파악하고, 취약점을 분석합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">맞춤 계획 수립</h4>
                      <p className="text-neutral-600">
                        개인별 목표와 진도에 맞춘 학습 계획을 수립합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">단계별 학습</h4>
                      <p className="text-neutral-600">
                        기초부터 심화까지 단계별로 체계적으로 학습합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">정기 평가 및 피드백</h4>
                      <p className="text-neutral-600">
                        정기적인 평가를 통해 성과를 확인하고 개선점을 찾습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/800/600?random=11"
                  alt="커리큘럼 관리 시스템"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-500 to-primary-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              프라임 수학학원과 함께 자녀의 수학 실력을 한 단계 높여보세요
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

