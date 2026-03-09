/**
 * Removes all existing FAQPage JSON-LD scripts from the document head.
 * Call this before injecting a new FAQPage schema to prevent duplicates
 * during SPA navigation.
 */
export function removeAllFaqPageSchemas(): void {
  document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
    try {
      const data = JSON.parse(el.textContent || "");
      if (data["@type"] === "FAQPage") el.remove();
    } catch {
      // ignore non-JSON scripts
    }
  });
}

/**
 * Injects a FAQPage JSON-LD script into the document head.
 * Defensively removes any existing FAQPage schemas first.
 * Returns the created script element for cleanup on unmount.
 */
export function injectFaqPageSchema(schema: object, id: string): HTMLScriptElement {
  removeAllFaqPageSchemas();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
  return script;
}
