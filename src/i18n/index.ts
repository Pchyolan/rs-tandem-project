import type { LanguageType } from '@/types';
import { headerTranslations, type HeaderTranslationKey } from './header';
import { homePageTranslations, type HomePageTranslationKey } from './home-page';
import { memoryGamePageTranslations, type MemoryGameTranslationKey } from './memory-game-page';

export type TranslationKey = HeaderTranslationKey | HomePageTranslationKey | MemoryGameTranslationKey;

export const translations: Record<LanguageType, Record<TranslationKey, string>> = {
  en: {
    ...headerTranslations.en,
    ...homePageTranslations.en,
    ...memoryGamePageTranslations.en,
  },
  ru: {
    ...headerTranslations.ru,
    ...homePageTranslations.ru,
    ...memoryGamePageTranslations.ru,
  },
};
