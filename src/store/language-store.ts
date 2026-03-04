import { Observable } from '@/core';
import type { LanguageType } from '@/types';

const defaultLang = import.meta.env.VITE_DEFAULT_LANGUAGE || 'en';

// $ в конце - стандартная практика для переменных типа Observable
// (наглядно видно, что переменная может меняться и требует подписки)
export const language$ = new Observable<LanguageType>(defaultLang);
