import { getRequestConfig } from "next-intl/server";

import { isLocale, messages } from ".";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = requestedLocale && isLocale(requestedLocale) ? requestedLocale : "en";

  return {
    locale,
    messages: messages[locale],
  };
});
