// MyMemory Translation API — free, no API key, works in browser
// Docs: https://mymemory.translated.net/doc/spec.php

const MYMEMORY_API = "https://api.mymemory.translated.net/get";

const LANG_MAP: Record<string, string> = {
  en: "en",
  hi: "hi",
  bn: "bn",
  mr: "mr",
  pa: "pa",
  ta: "ta",
  te: "te",
};

/**
 * Translates text using MyMemory API.
 * @param text       - Text to translate
 * @param targetLang - Target language code (e.g. "hi", "bn")
 * @param sourceLang - Source language code. Defaults to "en". Pass "auto" for auto-detect.
 * @returns Translated string, or original text on failure
 */
export const translateText = async (
  text: string,
  targetLang: string,
  sourceLang: string = "en"
): Promise<string> => {
  if (!text.trim()) return text;

  // Same language — no-op
  if (sourceLang === targetLang) return text;

  const src = sourceLang === "auto" ? "en" : (LANG_MAP[sourceLang] ?? "en");
  const tgt = LANG_MAP[targetLang];

  if (!tgt) {
    console.warn(`[translate] Unsupported target language: ${targetLang}`);
    return text;
  }

  // MyMemory free tier: 500 char limit per request
  // Split longer text into sentence chunks
  if (text.length > 500) {
    return translateInChunks(text, src, tgt);
  }

  return callMyMemory(text, src, tgt);
};

/**
 * Direct MyMemory API call for a single chunk.
 */
async function callMyMemory(
  text: string,
  src: string,
  tgt: string
): Promise<string> {
  try {
    const url = new URL(MYMEMORY_API);
    url.searchParams.set("q", text);
    url.searchParams.set("langpair", `${src}|${tgt}`);

    const res = await fetch(url.toString());

    if (!res.ok) {
      throw new Error(`MyMemory API error: ${res.status}`);
    }

    const data = await res.json();

    if (data.responseStatus !== 200) {
      throw new Error(
        `MyMemory status: ${data.responseStatus} — ${data.responseDetails}`
      );
    }

    return data.responseData?.translatedText ?? text;
  } catch (error) {
    console.error("[translate] callMyMemory error:", error);
    return text; // Graceful fallback
  }
}

/**
 * Splits long text into ≤480 char sentence chunks,
 * translates each in parallel, then rejoins.
 */
async function translateInChunks(
  text: string,
  src: string,
  tgt: string
): Promise<string> {
  const sentences = text.match(/[^.!?]+[.!?]+[\s]?/g) ?? [text];

  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    if ((current + sentence).length > 480) {
      if (current.trim()) chunks.push(current.trim());
      current = sentence;
    } else {
      current += sentence;
    }
  }
  if (current.trim()) chunks.push(current.trim());

  const translated = await Promise.all(
    chunks.map((chunk) => callMyMemory(chunk, src, tgt))
  );

  return translated.join(" ");
}

/**
 * Heuristic language detector.
 * Returns "auto" if non-Latin script detected (Hindi, Bengali, Punjabi, etc.),
 * otherwise returns "en".
 */
export const detectInputLanguage = (text: string): string => {
  const nonLatinPattern =
    /[\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0B80-\u0BFF\u0C00-\u0C7F]/;
  return nonLatinPattern.test(text) ? "auto" : "en";
};