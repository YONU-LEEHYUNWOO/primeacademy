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
import { useI18n } from '@/hooks/useI18n';

/**
 * 상담 예약 폼 스키마
 * 이름, 연락처, 상담 희망일, 문의내용을 검증
 */
export default function ReservationPage() {
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const reservationSchema = z.object({
    name: z.string().min(2, t.validation_name_min).max(50, t.validation_name_max),
    phone: z
      .string()
      .min(10, t.validation_phone_min)
      .regex(/^[0-9-]+$/, t.validation_phone_format),
    preferredDate: z.string().min(1, t.validation_date_required),
    preferredTime: z.string().min(1, t.validation_time_required),
    message: z.string().min(10, t.validation_message_min).max(500, t.validation_message_max),
  });

  type ReservationFormValues = z.infer<typeof reservationSchema>;

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
        title: t.toast_success_title,
        description: t.toast_success_desc,
      });

      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      toast({
        title: t.toast_error_title,
        description: t.toast_error_desc,
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
              {t.reservation_success_title}
            </h2>
            <p className="text-neutral-600 mb-6">
              {t.reservation_success_desc.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.reservation_success_desc.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-primary-500 hover:bg-primary-700 text-white"
            >
              {t.reservation_reset}
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
                {t.reservation_page_title}
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                {t.reservation_page_subtitle}
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
                          <FormLabel>{t.reservation_form_name}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t.reservation_form_name_placeholder}
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
                          <FormLabel>{t.reservation_form_phone}</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder={t.reservation_form_phone_placeholder}
                              {...field}
                              className="border-neutral-200 focus:border-primary-500"
                            />
                          </FormControl>
                          <FormDescription>
                            {t.reservation_form_phone_desc}
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
                          <FormLabel>{t.reservation_form_date}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-neutral-200 focus:border-primary-500">
                                <SelectValue placeholder={t.reservation_form_date_placeholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="weekday">{t.form_option_weekday}</SelectItem>
                              <SelectItem value="saturday">{t.form_option_saturday}</SelectItem>
                              <SelectItem value="flexible">{t.form_option_flexible}</SelectItem>
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
                          <FormLabel>{t.reservation_form_time}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-neutral-200 focus:border-primary-500">
                                <SelectValue placeholder={t.reservation_form_time_placeholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">{t.form_option_morning}</SelectItem>
                              <SelectItem value="afternoon">{t.form_option_afternoon}</SelectItem>
                              <SelectItem value="evening">{t.form_option_evening}</SelectItem>
                              <SelectItem value="flexible">{t.form_option_flexible}</SelectItem>
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
                          <FormLabel>{t.reservation_form_message}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t.reservation_form_message_placeholder}
                              className="min-h-[120px] border-neutral-200 focus:border-primary-500"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            {t.reservation_form_message_desc}
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
                          <p className="font-medium mb-1">{t.reservation_privacy_title}</p>
                          <p>
                            {t.reservation_privacy_text}
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
                          {t.reservation_submitting}
                        </>
                      ) : (
                        t.reservation_submit
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

