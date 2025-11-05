'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Clock, Mail, Navigation, Train, Bus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

/**
 * 오시는 길 페이지
 * 학원 위치, 연락처, 운영시간, 교통편 안내를 제공하는 페이지
 */
export default function LocationPage() {
  const contactInfo = {
    address: '서울특별시 강남구 테헤란로 123 프라임빌딩 3층',
    phone: '02-1234-5678',
    email: 'info@primeschool.co.kr',
    operatingHours: {
      weekdays: '월-금: 14:00 - 22:00',
      saturday: '토요일: 10:00 - 18:00',
      sunday: '일요일: 휴무',
    },
  };

  const transportation = [
    {
      icon: Train,
      type: '지하철',
      routes: [
        {
          line: '2호선',
          station: '강남역',
          exit: '3번 출구',
          walking: '도보 5분',
        },
        {
          line: '신분당선',
          station: '강남역',
          exit: '3번 출구',
          walking: '도보 5분',
        },
      ],
    },
    {
      icon: Bus,
      type: '버스',
      routes: [
        {
          line: '간선',
          station: '강남역 정류장',
          walking: '도보 3분',
        },
        {
          line: '지선',
          station: '테헤란로 정류장',
          walking: '도보 2분',
        },
      ],
    },
  ];

  const nearbyLandmarks = [
    '강남역 도보 5분',
    '강남대로 인접',
    '주차 공간 보유',
    '엘리베이터 이용 가능',
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
                오시는 길
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                프라임 수학학원으로 오시는 길을 안내해드립니다
              </p>
            </div>
          </div>
        </section>

        {/* 지도 및 주소 섹션 */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 지도 영역 */}
              <div className="lg:col-span-2">
                <Card className="bg-white rounded-2xl p-6 border border-neutral-200 overflow-hidden">
                  <div className="aspect-video w-full bg-neutral-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0!2d127.0276!3d37.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzcsMDI3Ni42N0U!5e0!3m2!1sko!2skr!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="프라임 수학학원 위치"
                    />
                  </div>
                </Card>
              </div>

              {/* 연락처 및 운영시간 */}
              <div className="space-y-6">
                <Card className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">주소</h3>
                      <p className="text-neutral-600 leading-relaxed">{contactInfo.address}</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">전화</h3>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-primary-700 hover:text-primary-900 font-medium"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">이메일</h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary-700 hover:text-primary-900 font-medium"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">운영시간</h3>
                      <div className="space-y-1 text-neutral-600">
                        <p>{contactInfo.operatingHours.weekdays}</p>
                        <p>{contactInfo.operatingHours.saturday}</p>
                        <p>{contactInfo.operatingHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 교통편 안내 섹션 */}
        <section className="py-20 md:py-32 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                교통편 안내
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                대중교통을 이용하여 오시는 방법을 안내해드립니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {transportation.map((transport, index) => {
                const Icon = transport.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-neutral-200"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">{transport.type}</h3>
                    </div>
                    <div className="space-y-4">
                      {transport.routes.map((route, routeIndex) => (
                        <div
                          key={routeIndex}
                          className="p-4 bg-neutral-50 rounded-lg border border-neutral-200"
                        >
                          {route.line && (
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-neutral-900">
                                {route.line}
                              </span>
                              {route.station && (
                                <span className="text-sm text-neutral-600">{route.station}</span>
                              )}
                            </div>
                          )}
                          {route.exit && (
                            <div className="text-sm text-neutral-600 mb-1">
                              {route.exit}에서
                            </div>
                          )}
                          <div className="flex items-center text-primary-700 font-medium">
                            <Navigation className="h-4 w-4 mr-2" />
                            {route.walking}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 주변 정보 섹션 */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  주변 정보
                </h2>
                <p className="text-lg text-neutral-600">
                  편리한 접근성과 쾌적한 학습 환경을 제공합니다
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {nearbyLandmarks.map((landmark, index) => (
                  <Card
                    key={index}
                    className="bg-primary-50 rounded-lg p-4 border border-primary-200 text-center"
                  >
                    <p className="text-sm font-medium text-primary-700">{landmark}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 길찾기 버튼 섹션 */}
        <section className="py-12 bg-neutral-50 border-t border-neutral-200">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-500 text-primary-700 hover:bg-primary-50"
                >
                  <a
                    href={`https://map.naver.com/search/${encodeURIComponent(contactInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    네이버 지도로 보기
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-500 text-primary-700 hover:bg-primary-50"
                >
                  <a
                    href={`https://map.kakao.com/link/search/${encodeURIComponent(contactInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    카카오맵으로 보기
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-primary-500 hover:bg-primary-700 text-white"
                >
                  <a
                    href={`tel:${contactInfo.phone}`}
                  >
                    전화하기
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-500 to-primary-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              방문 상담을 예약하세요
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              프라임 수학학원으로 직접 오셔서 학원을 둘러보시고 상담받으실 수 있습니다
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

