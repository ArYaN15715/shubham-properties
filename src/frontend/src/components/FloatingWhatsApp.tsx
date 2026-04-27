import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Shubham%20Properties%2C%20I%20am%20interested%20in%20a%20property%20in%20Gandhinagar."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 md:bottom-8 md:right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-elevated hover:scale-110 transition-smooth"
      aria-label="Chat on WhatsApp"
      data-ocid="floating_whatsapp.button"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </a>
  );
}
