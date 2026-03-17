const fallbackWhatsAppNumber = "923000000000";
const fallbackCalendlyUrl = "https://calendly.com/leadpilot/demo";
const fallbackApiUrl = "http://localhost:8000";

const rawWhatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? fallbackWhatsAppNumber;

export const whatsappNumber = rawWhatsAppNumber.replace(/\D+/g, "") || fallbackWhatsAppNumber;
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? fallbackCalendlyUrl;
export const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL ?? fallbackApiUrl).replace(/\/+$/, "");