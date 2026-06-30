type ConversionEvent =
  | "catalog_download"
  | "contact_form_submit"
  | "email_click"
  | "phone_click"
  | "whatsapp_click"
  | "quote_cta_click";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number | boolean>,
    ) => void;
  }
}

export function trackConversion(eventName: ConversionEvent, label?: string) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, {
    event_category: "lead",
    event_label: label ?? eventName,
  });

  window.dispatchEvent(
    new CustomEvent("jk:conversion", {
      detail: { eventName, label },
    }),
  );
}
