function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/27766115666"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Northbound Digital on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.1 3.9A11.4 11.4 0 0 0 2.2 17.6L.7 23.2l5.8-1.5a11.4 11.4 0 0 0 5.4 1.4h.1A11.4 11.4 0 0 0 20.1 3.9ZM12 21.1a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-3.4.9.9-3.3-.2-.3A9.5 9.5 0 1 1 12 21.1Zm5.2-7.1c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5 0-.1-.6-1.4-.9-1.9-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.5c.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.3-.1-.2-.3-.2-.6-.4Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
