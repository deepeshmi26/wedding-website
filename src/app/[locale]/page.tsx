import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { LocaleDocumentAttributes } from "../LocaleDocumentAttributes";
import WeddingSite from "../WeddingSite";
import { isLocale, locales, messages } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedPage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      <LocaleDocumentAttributes locale={locale} />
      <WeddingSite />
    </NextIntlClientProvider>
  );
}
