'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrendingUp, Award, Users, Target, ArrowUp, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

/**
 * 성과 및 통계 페이지
 * 학원의 객관적인 성과 데이터를 시각적으로 제시하는 페이지
 */
export default function ResultsPage() {
  const mainStats = [
    {
      icon: TrendingUp,
      value: '85%',
      label: '성적 향상률',
      description: '평균 성적 향상률',
      color: 'text-primary-500',
      bgColor: 'bg-primary-100',
      change: '+12%',
    },
    {
      icon: Award,
      value: '92%',
      label: '합격률',
      description: '목표 학교 합격률',
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-500/10',
      change: '+8%',
    },
    {
      icon: Users,
      value: '450+',
      label: '누적 학생',
      description: '지금까지 교육한 학생 수',
      color: 'text-accent-500',
      bgColor: 'bg-accent-500/10',
      change: '+50',
    },
    {
      icon: Target,
      value: '4.5',
      label: '평균 성적',
      description: '내신 평균 성적',
      color: 'text-primary-700',
      bgColor: 'bg-primary-200',
      change: '+0.3',
    },
  ];

  const improvementData = [
    { period: '1개월', improvement: 15, color: 'bg-primary-500' },
    { period: '3개월', improvement: 45, color: 'bg-primary-600' },
    { period: '6개월', improvement: 65, color: 'bg-primary-700' },
    { period: '12개월', improvement: 85, color: 'bg-secondary-500' },
  ];

  const successStories = [
    {
      name: '이○○ 학생',
      grade: '고등학교 3학년',
      before: '내신 3등급',
      after: '내신 1등급',
      improvement: '2등급 상승',
      comment: '체계적인 커리큘럼과 선생님의 세심한 지도 덕분에 목표를 달성할 수 있었습니다.',
    },
    {
      name: '김○○ 학생',
      grade: '중학교 3학년',
      before: '내신 4등급',
      after: '내신 2등급',
      improvement: '2등급 상승',
      comment: '개인별 맞춤 학습 계획으로 취약점을 정확히 파악하고 보완할 수 있었습니다.',
    },
    {
      name: '박○○ 학생',
      grade: '고등학교 2학년',
      before: '모의고사 70점',
      after: '모의고사 90점',
      improvement: '20점 상승',
      comment: '정기적인 평가와 피드백을 통해 실력을 꾸준히 향상시킬 수 있었습니다.',
    },
  ];

  const comparisonData = [
    { item: '성적 향상률', us: 85, average: 60, color: 'bg-primary-500' },
    { item: '합격률', us: 92, average: 75, color: 'bg-secondary-500' },
    { item: '학부모 만족도', us: 95, average: 78, color: 'bg-accent-500' },
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
                객관적인 성과로 증명합니다
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                데이터로 확인하는 프라임 수학학원의 검증된 성과
              </p>
            </div>
          </div>
        </section>

        {/* 주요 통계 섹션 */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {mainStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
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
                    <div className="text-sm text-neutral-600 mb-2">{stat.description}</div>
                    <div className="flex items-center justify-center text-sm text-green-600">
                      <ArrowUp className="h-4 w-4 mr-1" />
                      {stat.change}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 성적 향상 추이 섹션 */}
        <section className="py-20 md:py-32 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                학습 기간별 성적 향상 추이
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                체계적인 학습 관리로 지속적인 성과 향상을 보장합니다
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {improvementData.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-neutral-900 mb-2">
                        {item.period}
                      </div>
                      <div className="text-3xl font-bold text-primary-700 mb-4">
                        {item.improvement}%
                      </div>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-4 overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-500`}
                        style={{ width: `${item.improvement}%` }}
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 타 학원 비교 섹션 */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                타 학원 대비 비교
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                프라임 수학학원의 차별화된 성과를 확인하세요
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {comparisonData.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-neutral-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-neutral-900">{item.item}</h3>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm text-neutral-600">타 학원 평균</div>
                        <div className="text-2xl font-bold text-neutral-600">{item.average}%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-primary-700 font-semibold">프라임</div>
                        <div className={`text-2xl font-bold ${item.color.replace('bg-', 'text-')}`}>
                          {item.us}%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1 bg-neutral-200 rounded-full h-6 overflow-hidden">
                      <div
                        className="bg-neutral-400 h-full"
                        style={{ width: `${item.average}%` }}
                      />
                    </div>
                    <div className="flex-1 bg-neutral-200 rounded-full h-6 overflow-hidden">
                      <div
                        className={`h-full ${item.color}`}
                        style={{ width: `${item.us}%` }}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 성공 사례 섹션 */}
        <section className="py-20 md:py-32 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                성공 사례
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                프라임 수학학원과 함께 성장한 학생들의 이야기
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">{story.name}</h3>
                      <p className="text-sm text-neutral-600">{story.grade}</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-primary-500" />
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                      <span className="text-sm text-neutral-600">이전</span>
                      <span className="font-semibold text-neutral-900">{story.before}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowUp className="h-5 w-5 text-primary-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                      <span className="text-sm text-primary-700">이후</span>
                      <span className="font-semibold text-primary-700">{story.after}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-semibold text-green-600">
                        {story.improvement}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed border-t border-neutral-200 pt-4">
                    "{story.comment}"
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 통계 안내 */}
        <section className="py-12 bg-white border-t border-neutral-200">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                * 통계는 2024년 기준 실제 데이터를 반영한 수치입니다.
                <br />
                개인별 결과는 다를 수 있으며, 지속적인 관리를 통해 최적의 성과를 도출합니다.
              </p>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-500 to-primary-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              이제 여러분의 차례입니다
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              프라임 수학학원과 함께 자녀의 수학 실력을 향상시켜보세요
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

