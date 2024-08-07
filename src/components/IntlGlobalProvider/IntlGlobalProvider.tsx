import React from "react";
import { createIntl, createIntlCache, IntlProvider } from "react-intl";

const IntlGlobalProvider = ({ locale, messages, children }) => {
  const cache = createIntlCache();

  const intl = createIntl(
    {
      locale: "es",
      messages: messages["es"],
    },
    cache
  );

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default IntlGlobalProvider;
