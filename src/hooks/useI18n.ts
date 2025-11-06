"use client";

import { useEffect } from "react";
import {
  translations,
  Locale,
  translate as translateFn,
} from "@/lib/i18n";
import { useI18nStore } from "@/lib/i18n-store";

/**
 * i18n 훅
 * 전역 locale 상태를 사용하여 번역 기능 제공
 */
export function useI18n() {
  const { locale, isLoaded, setLocale, initialize } = useI18nStore();

  useEffect(() => {
    // 클라이언트 사이드에서만 초기화
    if (typeof window !== "undefined" && !isLoaded) {
      initialize();
    }
  }, [isLoaded, initialize]);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  const translate = (key: keyof typeof translations.ko) => {
    return translateFn(key, locale);
  };

  return {
    locale,
    isLoaded,
    changeLocale,
    translate,
    t: translations[locale] || translations.ko,
  };
}

