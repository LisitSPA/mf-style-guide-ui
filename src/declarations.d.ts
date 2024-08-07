import { ReactNode } from "react";

declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "@react-gufo-mf/style-guide-ui" {
  interface IntlGlobalProviderProps {
    locale: string;
    messages: Record<string, string>;
    children: ReactNode;
  }
  export const PageNotFound: React.ComponentType;
  export const ErrorBoundary: React.ComponentType;
  export const RoutesWithNotFound: React.ComponentType;
  export const IntlGlobalProvider: React.ComponentType<IntlGlobalProviderProps>;
  export const useTranslations: () => {
    language: string;
    changeLanguage: (lng: string) => void;
  };
}
