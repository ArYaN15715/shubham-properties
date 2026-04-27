import { Building2, MessageCircle, Phone } from "lucide-react";

function scrollToProperties() {
  const el = document.querySelector("#properties");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function MobileBottomBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2B0A4D] border-t border-[#F4B400]/30 flex"
      data-ocid="mobile_bottom_bar"
    >
      <a
        href="tel:+919876543210"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-[#F4B400]/10 transition-colors"
        data-ocid="mobile_bottom_bar.call.button"
      >
        <Phone size={20} className="text-[#F4B400]" />
        <span className="text-[10px] font-body font-semibold tracking-wide">
          CALL
        </span>
      </a>
      <div className="w-px bg-[#F4B400]/20" />
      <a
        href="https://wa.me/919876543210?text=Hi%20Shubham%20Properties%2C%20I%20am%20interested%20in%20a%20property."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-[#F4B400]/10 transition-colors"
        data-ocid="mobile_bottom_bar.whatsapp.button"
      >
        <MessageCircle size={20} className="text-[#F4B400]" />
        <span className="text-[10px] font-body font-semibold tracking-wide">
          WHATSAPP
        </span>
      </a>
      <div className="w-px bg-[#F4B400]/20" />
      <button
        onClick={scrollToProperties}
        type="button"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-[#F4B400]/10 transition-colors"
        data-ocid="mobile_bottom_bar.properties.button"
      >
        <Building2 size={20} className="text-[#F4B400]" />
        <span className="text-[10px] font-body font-semibold tracking-wide">
          PROPERTIES
        </span>
      </button>
    </div>
  );
}
