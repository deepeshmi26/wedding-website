import bn from "@/messages/bn";
import en from "@/messages/en";

export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];

export const messages = { en, bn };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
