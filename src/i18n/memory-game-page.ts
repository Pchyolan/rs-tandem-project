import type { LanguageType } from '@/types';

export type MemoryGameTranslationKey = 'myText';

export const memoryGamePageTranslations: Record<LanguageType, Record<MemoryGameTranslationKey, string>> = {
  en: {
    myText: 'Memory Game',
  },
  ru: {
    myText: 'Игра "Сборщик мусора"',
  },
};
