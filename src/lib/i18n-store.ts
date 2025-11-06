"use client";

import { create } from "zustand";
import { Locale, getClientLocale, setClientLocale } from "./i18n";

/**
 * i18n 전역 상태 관리 스토어
 * Zustand를 사용하여 locale 상태를 전역으로 관리
 * 모든 컴포넌트가 동일한 locale 상태를 공유하여 즉시 반영됨
 */
interface I18nStore {
  locale: Locale;
  isLoaded: boolean;
  setLocale: (locale: Locale) => void;
  initialize: () => void;
}

export const useI18nStore = create<I18nStore>((set, get) => ({
  locale: "ko",
  isLoaded: false,
  setLocale: (newLocale: Locale) => {
    setClientLocale(newLocale);
    set({ locale: newLocale });
  },
  initialize: () => {
    if (typeof window !== "undefined" && !get().isLoaded) {
      const currentLocale = getClientLocale();
      set({ locale: currentLocale, isLoaded: true });
    }
  },
}));

