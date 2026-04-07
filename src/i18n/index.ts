import type { LanguageType, WidgetType } from '@/types';
import { headerTranslations, type HeaderTranslationKey } from './header';
import { homePageTranslations, type HomePageTranslationKey } from './home-page';
import { memoryGamePageTranslations, type MemoryGameTranslationKey } from './memory-game-page';
import { widgetsTranslations } from './widgets';

export type TranslationKey = HeaderTranslationKey | HomePageTranslationKey | MemoryGameTranslationKey | WidgetType;

export const translations: Record<LanguageType, Record<TranslationKey, string>> = {
  en: {
    ...headerTranslations.en,
    ...homePageTranslations.en,
    ...memoryGamePageTranslations.en,
    ...widgetsTranslations.en,
  },
  ru: {
    ...headerTranslations.ru,
    ...homePageTranslations.ru,
    ...memoryGamePageTranslations.ru,
    ...widgetsTranslations.ru,
  },
};
