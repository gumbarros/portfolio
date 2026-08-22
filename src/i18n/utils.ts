import { ui, defaultLocale, locales, type Locale } from './ui';

export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split('/')[1];
  return (locales as readonly string[]).includes(first) ? (first as Locale) : defaultLocale;
}

export function getLocaleUrl(locale: Locale, path: string): string {
  return locale === defaultLocale ? path : `/${locale}${path === '/' ? '/' : path}`;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function resolve(obj: any, keys: string[]) {
  return keys.reduce((acc, k) => (acc == null ? undefined : acc[k]), obj);
}

/**
 * Returns a translator bound to `locale`. Keys are dotted paths into the
 * `ui` dictionary (e.g. `'hero.lede'`). Falls back to the default locale when
 * a key is not translated, matching the official Astro i18n recipe.
 */
export function useTranslations(locale: Locale) {
  return function t(path: string): any {
    const keys = path.split('.');
    const localized = resolve(ui[locale], keys);
    return localized !== undefined ? localized : resolve(ui[defaultLocale], keys);
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */
