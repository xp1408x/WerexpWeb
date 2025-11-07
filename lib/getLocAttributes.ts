/**
 * Utility to build a BCP47 lang string and determine text direction (dir)
 * based on a locale input like "es-PE", "zh-Hant-HK", "ar-SA".
 *
 * Parameters:
 * - language: ISO 639 language code (ex: "en", "es", "zh").
 * - region: ISO 3166-1 alpha-2 country code (ex: "US", "PE").
 * - script: ISO 15924 script code (ex: "Hant", "Hans").
 *
 * The exported function `getLocAttributes(locale)` returns an object:
 * { dir: 'ltr' | 'rtl', lang: string }
 */

const RTL_LANGUAGES = new Set([
  // Common RTL languages
  'ar', // Arabic
  'he', // Hebrew
  'fa', // Persian (Farsi)
  'ur', // Urdu
  'ps', // Pashto
  'sd', // Sindhi
  'ug', // Uyghur
]);

const hasSupportedLanguageScript = (locale: string): boolean => {
  const SUPPORTED_SCRIPTS = ['-hans-', '-hant-'];
  const formattedLocale = locale.toLowerCase();
  return SUPPORTED_SCRIPTS.some((item) => formattedLocale.includes(item));
};

const buildBcp47String = (
  language: string,
  region: string,
  script?: string,
): string => {
  let capitalizeScript: string | null = null;
  if (script) {
    capitalizeScript = script[0].toUpperCase() + script.substring(1).toLowerCase();
  }
  let bcp47Arr = [language.toLowerCase(), capitalizeScript, region.toUpperCase()];
  return bcp47Arr.filter((item) => item !== null).join('-');
};

export function getLocAttributes(locale: string): { dir: 'rtl' | 'ltr'; lang: string } {
  if (!locale || typeof locale !== 'string') {
    return { dir: 'ltr', lang: 'en' };
  }

  const localeStrings = locale.split('-');
  const regionIndex = hasSupportedLanguageScript(locale) ? 2 : 1;

  const language = localeStrings[0];
  const script = hasSupportedLanguageScript(locale) ? localeStrings[1] : undefined;
  const region = localeStrings[regionIndex];

  let bcp47 = locale;
  if (language && region) {
    bcp47 = buildBcp47String(language, region, script);
  }

  const dir: 'rtl' | 'ltr' = RTL_LANGUAGES.has(language) ? 'rtl' : 'ltr';

  return { dir, lang: bcp47 };
}

export default getLocAttributes;
