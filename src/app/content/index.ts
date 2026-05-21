import { ko } from './ko';
import { en } from './en';
import type { Locale, SiteContent } from './types';

export const content: Record<Locale, SiteContent> = { ko, en };
export type { Locale, SiteContent };
