import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from '/src/generated/locale-codes.js';
 
export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  async loadLocale(locale) {
    return import(`/src/generated/locales/${locale}.js`);
  },
});
 
export const setLocaleFromUrl = async () => {
  const url = new URL(window.location.href);
  const locale = url.searchParams.get('lang') || sourceLocale;
 
  console.log('setLocaleFromUrl', locale);
  console.log('getLocale', getLocale());
  await setLocale(locale);
};
 
export const localeNames = {
  en: 'Inggris',
  id: 'Indonesia',
  es: 'Spanyol',
};