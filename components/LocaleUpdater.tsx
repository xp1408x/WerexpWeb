"use client";
import React from "react";
import getLocAttributes from "@/lib/getLocAttributes";

interface Props {
  defaultLocale?: string;
}

export default function LocaleUpdater({ defaultLocale = "es-PE" }: Props) {
  React.useEffect(() => {
    try {
      const storageKey = "werexp_locale";
      const saved = typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null;
      const nav = typeof navigator !== "undefined" ? (navigator.language || (Array.isArray((navigator as any).languages) && (navigator as any).languages[0]) ) : null;
      const chosen = saved || (typeof nav === "string" ? nav : null) || defaultLocale;

      if (!chosen) return;

      const { lang, dir } = getLocAttributes(chosen);

      // Update document attributes if different
      if (typeof document !== "undefined") {
        if (document.documentElement.lang !== lang) document.documentElement.lang = lang;
        if (document.documentElement.dir !== dir) document.documentElement.dir = dir;
      }

      // Persist the detected locale so subsequent loads are consistent
      if (!saved && typeof window !== "undefined") {
        try {
          window.localStorage.setItem(storageKey, chosen);
        } catch (e) {
          // ignore storage errors (e.g., private mode)
        }
      }
    } catch (e) {
      // silent fail
      // console.warn('LocaleUpdater error', e);
    }
  }, [defaultLocale]);

  return null;
}
