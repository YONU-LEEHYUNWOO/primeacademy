'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, Clock, Phone, Mail, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

/**
 * 상담 예약 폼 스키마
 * 이름, 연락처, 상담 희망일, 문의내용을 검증
 */
const reservationSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상 입력해주세요.').max(50, '이름은 50자 이하로 입력해주세요.'),
  phone: z
    .string()
    .min(10, '연락처를 올바르게 입력해주세요.')
    .regex(/^[0-9-]+$/, '연락처는 숫자와 하이픈(-)만 입력 가능합니다.'),
  preferredDate: z.string().min(1, '상담 희망일을 선택해주세요.'),
  preferredTime: z.string().min(1, '상담 희망 시간을 선택해주세요.'),
  message: z.string().min(10, '문의내용을 10자 이상 입력해주세요.').max(500, '문의내용은 500자 이하로 입력해주세요.'),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

/**
 * 상담 예약 페이지
 * 방문 상담 예약 폼을 통해 학원 상담을 신청하는 페이지
 */
export default function ReservationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    },
  });

  /**
   * 폼 제출 처리 함수
   * 실제 구현 시 EmailJS 또는 FormSubmit API와 연동
   */
  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);

    try {
      // 실제 구현 시 이메일 전송 API 호출
      // 예: EmailJS, FormSubmit 등
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 성공 메시지 표시
      toast({
        title: '상담 신청이 완료되었습니다',
        description: '담당자가 연락드리겠습니다.',
      });

      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      toast({
        title: '전송 실패',
        description: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <Card className="max-w-md w-full p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-primary-500" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              상담 신청이 완료되었습니다
            </h2>
            <p className="text-neutral-600 mb-6">
              담당자가 입력하신 연락처로 연락드리겠습니다.
              <br />
              평일 오후 2시부터 10시까지 운영됩니다.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-primary-500 hover:bg-primary-700 text-white"
            >
              다시 작성하기
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero 섹션 */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                상담 예약하기
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                프라임 수학학원에서 자녀에게 맞는 학습 상담을 받아보세요
              </p>
            </div>
          </div>
        </section>

        {/* 폼 섹션 */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white rounded-2xl p-8 md:p-12 border border-neutral-200">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* 이름 입력 */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이름 *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="이름을 입력해주세요"
                              {...field}
                              className="border-neutral-200 focus:border-primary-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* 연락처 입력 */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>연락처 *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="010-1234-5678"
                              {...field}
                              className="border-neutral-200 focus:border-primary-500"
                            />
                          </FormControl>
                          <FormDescription>
                            담당자가 연락드릴 수 있도록 정확한 번호를 입력해주세요.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* 상담 희망일 */}
                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>상담 희망일 *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-neutral-200 focus:border-primary-500">
                                <SelectValue placeholder="희망일을 선택해주세요" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="weekday">평일 (월-금)</SelectItem>
                              <SelectItem value="saturday">토요일</SelectItem>
                              <SelectItem value="flexible">상관없음</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* 상담 희망 시간 */}
                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>상담 희망 시간 *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-neutral-200 focus:border-primary-500">
                                <SelectValue placeholder="희망 시간을 선택해주세요" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">오전 (10:00 - 12:00)</SelectItem>
                              <SelectItem value="afternoon">오후 (14:00 - 17:00)</SelectItem>
                              <SelectItem value="evening">저녁 (18:00 - 22:00)</SelectItem>
                              <SelectItem value="flexible">상관없음</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* 문의내용 */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>문의내용 *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="상담 받고 싶은 내용을 자세히 입력해주세요 (예: 자녀의 현재 수준, 목표, 특별한 요청사항 등)"
                              className="min-h-[120px] border-neutral-200 focus:border-primary-500"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            자세한 문의내용을 입력해주시면 더 정확한 상담을 받으실 수 있습니다.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* 개인정보 안내 */}
                    <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-neutral-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-neutral-600">
                          <p className="font-medium mb-1">개인정보 수집 및 이용 안내</p>
                          <p>
                            입력하신 정보는 상담 목적 외에는 사용되지 않으며, 상담 완료 후
                            삭제됩니다.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 제출 버튼 */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-500 hover:bg-primary-700 text-white text-lg py-6 rounded-lg"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="h-5 w-5 mr-2 animate-spin" />
                          전송 중...
                        </>
                      ) : (
                        '상담 신청하기'
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>
          </div>
        </section>

        {/* 연락처 안내 섹션 */}
        <section className="py-20 md:py-32 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  다른 방법으로 연락하기
                </h2>
                <p className="text-lg text-neutral-600">
                  폼 제출이 어려우시다면 아래 방법으로도 연락 가능합니다
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white rounded-2xl p-6 border border-neutral-200 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">전화 상담</h3>
                  <a
                    href="tel:02-1234-5678"
                    className="text-primary-700 hover:text-primary-900 font-medium"
                  >
                    02-1234-5678
                  </a>
                  <p className="text-sm text-neutral-600 mt-2">평일 14:00 - 22:00</p>
                </Card>

                <Card className="bg-white rounded-2xl p-6 border border-neutral-200 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">이메일 문의</h3>
                  <a
                    href="mailto:info@primeschool.co.kr"
                    className="text-primary-700 hover:text-primary-900 font-medium"
                  >
                    info@primeschool.co.kr
                  </a>
                  <p className="text-sm text-neutral-600 mt-2">24시간 접수 가능</p>
                </Card>

                <Card className="bg-white rounded-2xl p-6 border border-neutral-200 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">운영시간</h3>
                  <p className="text-sm text-neutral-600">월-금: 14:00 - 22:00</p>
                  <p className="text-sm text-neutral-600">토요일: 10:00 - 18:00</p>
                  <p className="text-sm text-neutral-600">일요일: 휴무</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

