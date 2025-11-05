'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Users, Target, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';

/**
 * 강사 데이터 타입 정의
 */
type Teacher = {
  name: string;
  role: string;
  education: string;
  experience: string;
  expertise: string[];
  philosophy: string;
  achievements: string[];
  image: string;
};

/**
 * 강사진 소개 페이지
 * 전문 강사들의 프로필, 경력, 수업 철학을 상세히 소개하는 페이지
 */
export default function TeachersPage() {
  const teachers: Teacher[] = [
    {
      name: '김수학',
      role: '수학 대표 강사',
      education: '서울대학교 수학과 졸업',
      experience: '15년 경력',
      expertise: ['고등학교 수학', '미적분', '확률과 통계'],
      philosophy: '학생 개개인의 특성을 이해하고, 수학적 사고력을 키워가는 교육을 지향합니다. 단순한 암기가 아닌 개념의 본질을 이해시키는 것이 제 목표입니다.',
      achievements: [
        '수능 수학 만점자 다수 배출',
        '내신 1등급 학생 200명 이상',
        '입시 상담 전문가',
      ],
      image: 'https://picsum.photos/400/400?random=1',
    },
    {
      name: '이수학',
      role: '고등 수학 전문',
      education: '연세대학교 수학과 졸업',
      experience: '12년 경력',
      expertise: ['고등학교 수학', '기하', '수학II'],
      philosophy: '체계적인 문제 해결 방법을 통해 학생들이 스스로 문제를 해결할 수 있도록 합니다. 단계별 접근법으로 학생들의 이해도를 높입니다.',
      achievements: [
        '모의고사 성적 향상률 1위',
        '학생 만족도 최우수',
        '입시 컨설팅 전문',
      ],
      image: 'https://picsum.photos/400/400?random=2',
    },
    {
      name: '박수학',
      role: '중등 수학 전문',
      education: '고려대학교 수학과 졸업',
      experience: '10년 경력',
      expertise: ['중학교 수학', '수학I', '기초 수학'],
      philosophy: '기초부터 탄탄히 다져 학생들이 수학에 자신감을 갖도록 돕습니다. 작은 성공을 통해 동기를 부여하고, 점진적으로 실력을 향상시킵니다.',
      achievements: [
        '기초부터 상위권 도달 다수',
        '학생 상담 전문가',
        '개인별 맞춤 지도 우수',
      ],
      image: 'https://picsum.photos/400/400?random=3',
    },
    {
      name: '최수학',
      role: '수능 수학 전문',
      education: '서울대학교 수학과 졸업',
      experience: '13년 경력',
      expertise: ['수능 수학', '미적분', '확률과 통계'],
      philosophy: '수능을 위한 효율적인 학습 방법을 제시하고, 문제 유형별 해결 전략을 체계적으로 전달합니다. 시간 관리와 실전 감각을 기릅니다.',
      achievements: [
        '수능 수학 만점자 다수',
        '수능 전문 강사',
        '기출 분석 전문가',
      ],
      image: 'https://picsum.photos/400/400?random=4',
    },
    {
      name: '정수학',
      role: '내신 수학 전문',
      education: '연세대학교 수학과 졸업',
      experience: '11년 경력',
      expertise: ['내신 수학', '수학I', '수학II'],
      philosophy: '학교 내신에 최적화된 수업으로 학생들의 내신 성적 향상을 돕습니다. 학교별 출제 경향을 분석하여 맞춤형 수업을 제공합니다.',
      achievements: [
        '내신 성적 향상 다수',
        '학교별 맞춤 지도',
        '학부모 만족도 높음',
      ],
      image: 'https://picsum.photos/400/400?random=5',
    },
    {
      name: '강수학',
      role: '기초 수학 전문',
      education: '고려대학교 수학과 졸업',
      experience: '9년 경력',
      expertise: ['기초 수학', '중학교 수학', '수학 기초'],
      philosophy: '수학을 어려워하는 학생들을 위해 차근차근 기초를 다지고, 자신감을 회복시킵니다. 포기하지 않는 마음가짐을 전달합니다.',
      achievements: [
        '기초 실력 향상 다수',
        '학생 동기 부여 전문',
        '개인별 세심한 지도',
      ],
      image: 'https://picsum.photos/400/400?random=6',
    },
  ];

  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const teachingFeatures = [
    {
      icon: BookOpen,
      title: '개인별 맞춤 지도',
      description: '각 학생의 수준과 특성에 맞춘 개인별 학습 계획을 수립합니다.',
    },
    {
      icon: Target,
      title: '목표 지향적 수업',
      description: '학생별 목표를 설정하고 그 목표 달성을 위한 체계적인 수업을 진행합니다.',
    },
    {
      icon: Users,
      title: '소규모 그룹 수업',
      description: '집중도 높은 소규모 그룹 수업으로 개별 관리를 실현합니다.',
    },
    {
      icon: Award,
      title: '검증된 실력',
      description: '풍부한 경력과 검증된 실력으로 학생들의 성과를 보장합니다.',
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
                전문 강사진을 소개합니다
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                풍부한 경력과 검증된 실력을 갖춘 전문 강사진이 책임지고 지도합니다
              </p>
            </div>
          </div>
        </section>

        {/* 강사진 소개 섹션 */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow bg-white group cursor-pointer"
                  onClick={() => setSelectedTeacher(teacher)}
                >
                  <div className="relative h-[350px] w-full overflow-hidden">
                    <Image
                      src={teacher.image}
                      alt={`${teacher.name} 강사`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-neutral-900 mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-sm text-primary-700 font-medium mb-3">
                        {teacher.role}
                      </p>
                      <div className="flex items-center text-sm text-neutral-600 mb-2">
                        <GraduationCap className="h-4 w-4 mr-2 flex-shrink-0" />
                        {teacher.education}
                      </div>
                      <div className="flex items-center text-sm text-neutral-600 mb-4">
                        <Award className="h-4 w-4 mr-2 flex-shrink-0" />
                        {teacher.experience}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {teacher.expertise.map((subject, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-neutral-200 pt-4 space-y-3">
                      <div className="flex items-start">
                        <BookOpen className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {teacher.philosophy}
                        </p>
                      </div>
                      <div className="space-y-2">
                        {teacher.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-sm text-neutral-600">
                            <CheckCircle2 className="h-3 w-3 text-primary-500 mr-2 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 강사 상세 모달 */}
        {selectedTeacher && (
          <Dialog open={!!selectedTeacher} onOpenChange={(open) => !open && setSelectedTeacher(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-neutral-900">
                  {selectedTeacher.name} 강사
                </DialogTitle>
                <DialogDescription className="text-primary-700 font-medium">
                  {selectedTeacher.role}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                {/* 강사 이미지 */}
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={selectedTeacher.image}
                    alt={`${selectedTeacher.name} 강사`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 기본 정보 */}
                <div className="space-y-4">
                  <div className="flex items-center text-neutral-600">
                    <GraduationCap className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>{selectedTeacher.education}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Award className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>{selectedTeacher.experience}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">전문 분야</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeacher.expertise.map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-md"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 교육 철학 */}
                <div className="border-t border-neutral-200 pt-6">
                  <div className="flex items-start mb-3">
                    <BookOpen className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <h4 className="text-lg font-semibold text-neutral-900">교육 철학</h4>
                  </div>
                  <p className="text-neutral-600 leading-relaxed ml-8">
                    {selectedTeacher.philosophy}
                  </p>
                </div>

                {/* 주요 성과 */}
                <div className="border-t border-neutral-200 pt-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-4">주요 성과</h4>
                  <div className="space-y-3">
                    {selectedTeacher.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-neutral-600">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* 수업 특징 섹션 */}
        <section className="py-20 md:py-32 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                프라임 수학학원의 수업 특징
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                전문 강사진이 제공하는 차별화된 수업 방식
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teachingFeatures.map((feature, index) => {
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

        {/* 강사진 역량 섹션 */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                  검증된 강사진의 역량
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  프라임 수학학원의 강사진은 모두 검증된 경력과 실력을 갖추고 있으며,
                  지속적인 교육을 통해 최신 교수법과 입시 동향을 습득합니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">명문대 출신</h4>
                      <p className="text-neutral-600">
                        서울대, 연세대, 고려대 등 명문대 출신 강사진
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">풍부한 경력</h4>
                      <p className="text-neutral-600">
                        평균 10년 이상의 교육 경력과 검증된 실력
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">지속적인 교육</h4>
                      <p className="text-neutral-600">
                        정기적인 강사 교육을 통한 최신 교수법 습득
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">개인별 맞춤 지도</h4>
                      <p className="text-neutral-600">
                        학생별 특성에 맞춘 세심한 개별 지도
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/800/600?random=20"
                  alt="강사진 수업 모습"
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
              전문 강사진과 함께 시작하세요
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              프라임 수학학원의 전문 강사진이 자녀의 수학 실력을 향상시켜드립니다
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

