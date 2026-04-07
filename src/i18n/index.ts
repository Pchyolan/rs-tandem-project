import { headerTranslations } from './header';
import { homePageTranslations } from './home-page';
import { memoryGamePageTranslations } from './memory-game-page';
import { difficultyTranslations } from './difficulty';
import { widgetsTranslations } from './widgets';

export const translations = {
  en: {
    ...headerTranslations.en,
    ...homePageTranslations.en,
    ...memoryGamePageTranslations.en,
    ...widgetsTranslations.en,
    ...difficultyTranslations.en,
  },
  ru: {
    ...headerTranslations.ru,
    ...homePageTranslations.ru,
    ...memoryGamePageTranslations.ru,
    ...widgetsTranslations.ru,
    ...difficultyTranslations.ru,
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
