import React, { useEffect, useState } from "react";

const useTranslations = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "es"
  );
  useEffect(() => {
    const handleLanguageChange = (event) => {
      setLanguage(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange);
    };
  }, []);

  const changeLanguage = (lng) => {
    localStorage.setItem("selectedLanguage", lng);
    const event = new CustomEvent("languageChange", { detail: lng });
    window.dispatchEvent(event);
  };

  return { language, changeLanguage };
};

export default useTranslations;
