import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const phoneNumber = "+9779808244699"; // Replace with your number

  const message =
    "Hello Nepal Flower & Decor! I would like to know more about your event decoration services.";

  return (
    <div className="fixed bottom-6 right-6 z-9999 group">
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
        Chat with us
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          flex h-16 w-16 items-center justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:scale-110
          hover:bg-[#1ebe5d]
          animate-pulse
        "
      >
        <FaWhatsapp className="text-4xl" />
      </a>
    </div>
  );
}