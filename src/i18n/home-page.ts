import type { LanguageType } from '@/types';

export type HomePageTranslationKey = 'tempText';

export const homePageTranslations: Record<LanguageType, Record<HomePageTranslationKey, string>> = {
  en: {
    tempText: 'TODO...',
  },
  ru: {
    tempText: 'Когда-нибудь тут будет посадочная страница...',
  },
};
