'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

/**
 * 강사진 소개 섹션 컴포넌트
 * 주요 강사들의 프로필, 경력, 수업 철학을 소개하는 섹션
 */
export function TeachersSection() {
  const teachers = [
    {
      name: '김수학',
      role: '수학 대표 강사',
      education: '서울대학교 수학과 졸업',
      experience: '15년 경력',
      philosophy: '학생 개개인의 특성을 이해하고, 수학적 사고력을 키워가는 교육을 지향합니다.',
      image: 'https://picsum.photos/400/400?random=1',
    },
    {
      name: '이수학',
      role: '고등 수학 전문',
      education: '연세대학교 수학과 졸업',
      experience: '12년 경력',
      philosophy: '체계적인 문제 해결 방법을 통해 학생들이 스스로 문제를 해결할 수 있도록 합니다.',
      image: 'https://picsum.photos/400/400?random=2',
    },
    {
      name: '박수학',
      role: '중등 수학 전문',
      education: '고려대학교 수학과 졸업',
      experience: '10년 경력',
      philosophy: '기초부터 탄탄히 다져 학생들이 수학에 자신감을 갖도록 돕습니다.',
      image: 'https://picsum.photos/400/400?random=3',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            전문 강사진을 소개합니다
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            풍부한 경력과 검증된 실력을 갖춘 전문 강사진이 책임지고 지도합니다
          </p>
        </div>

        {/* 강사 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teachers.map((teacher, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow bg-white"
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src={teacher.image}
                  alt={`${teacher.name} 강사`}
                  fill
                  className="object-cover"
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
                    <GraduationCap className="h-4 w-4 mr-2" />
                    {teacher.education}
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <Award className="h-4 w-4 mr-2" />
                    {teacher.experience}
                  </div>
                </div>
                <div className="border-t border-neutral-200 pt-4">
                  <div className="flex items-start mb-2">
                    <BookOpen className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {teacher.philosophy}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* 더보기 버튼 */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-primary-500 text-primary-700 hover:bg-primary-50"
          >
            <Link href="/teachers">강사진 더 보기</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
