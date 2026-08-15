import { site, whatsappLink } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#07301a] shadow-lg transition-transform hover:scale-[1.03] sm:right-6 sm:bottom-6"
      aria-label={`Chat with ${site.name} on WhatsApp`}
    >
      <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.82c2.16 0 4.19.84 5.72 2.37a8.04 8.04 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.03 8.03 0 0 1-1.24-4.29c0-4.46 3.64-8.09 8.1-8.09m-3.2 4.1c-.15 0-.4.06-.61.28-.21.22-.8.79-.8 1.92s.82 2.23.94 2.38c.11.15 1.6 2.45 3.89 3.43.54.24.97.38 1.3.48.55.17 1.05.15 1.44.09.44-.07 1.35-.55 1.55-1.09.19-.54.19-1 .13-1.1-.06-.09-.21-.15-.44-.26-.23-.12-1.35-.67-1.56-.74-.21-.08-.36-.12-.51.11s-.58.74-.72.89c-.13.15-.26.17-.49.06-.23-.12-.96-.36-1.83-1.13-.68-.6-1.13-1.35-1.27-1.58-.13-.23-.01-.35.1-.47.1-.1.23-.26.34-.4.12-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.12-.51-1.24-.71-1.7-.18-.44-.37-.38-.51-.39z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}