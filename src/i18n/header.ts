import type { LanguageType } from '@/types';

export type HeaderTranslationKey = 'appName' | 'signIn' | 'testApi' | 'home' | 'logout';

export const headerTranslations: Record<LanguageType, Record<HeaderTranslationKey, string>> = {
  en: {
    appName: 'Widget Trainer',
    signIn: 'Sign In',
    testApi: 'Test API',
    home: 'Home',
    logout: 'Logout',
  },
  ru: {
    appName: 'Тренажёр виджетов',
    signIn: 'Войти',
    testApi: 'Тест API',
    home: 'Главная',
    logout: 'Выйти',
  },
};
