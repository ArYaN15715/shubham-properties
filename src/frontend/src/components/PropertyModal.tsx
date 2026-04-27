import {
  Bath,
  BedDouble,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  Tag,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import type { Property } from "../types/property";

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({
  property,
  onClose,
}: PropertyModalProps) {
  useEffect(() => {
    if (!property) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [property, onClose]);

  const waMsg = property
    ? `Hi Shubham Properties, I am interested in "${property.title}" at ${property.priceLabel} in ${property.location}. Please share more details.`
    : "";

  return (
    <AnimatePresence>
      {property && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-ocid="property_modal.dialog"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 bg-card w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl max-h-[92dvh] overflow-y-auto shadow-elevated"
            initial={{ y: 80, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", damping: 28, stiffness: 360 }}
          >
            {/* Image */}
            <div className="relative w-full h-52 sm:h-72 overflow-hidden sm:rounded-t-2xl rounded-t-2xl">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Tags */}
              <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                {property.isHotDeal && (
                  <span className="bg-[#FFD54F] text-[#1A1A1A] text-[10px] font-display font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    🔥 Hot Deal
                  </span>
                )}
                {property.isInvestment && (
                  <span className="bg-[#F4B400] text-[#1A1A1A] text-[10px] font-display font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    📈 Investment
                  </span>
                )}
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close modal"
                data-ocid="property_modal.close_button"
              >
                <X size={16} />
              </button>

              {/* Price on image */}
              <div className="absolute bottom-3 left-3">
                <span className="font-display font-extrabold text-white text-2xl drop-shadow">
                  {property.priceLabel}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 py-5 space-y-5">
              {/* Title + type */}
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-display font-bold text-xl text-foreground leading-tight">
                    {property.title}
                  </h2>
                  <span className="shrink-0 text-xs font-body font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {property.type}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-muted-foreground text-sm">
                  <MapPin size={13} />
                  <span>{property.location}</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-muted/50 rounded-xl p-3 flex flex-col items-center gap-1">
                  <Maximize2 size={16} className="text-[#F4B400]" />
                  <span className="font-display font-bold text-foreground text-sm">
                    {property.area}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-body">
                    sq. ft.
                  </span>
                </div>
                {property.bedrooms !== undefined && (
                  <div className="bg-muted/50 rounded-xl p-3 flex flex-col items-center gap-1">
                    <BedDouble size={16} className="text-[#F4B400]" />
                    <span className="font-display font-bold text-foreground text-sm">
                      {property.bedrooms}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-body">
                      Bedrooms
                    </span>
                  </div>
                )}
                {property.bathrooms !== undefined && (
                  <div className="bg-muted/50 rounded-xl p-3 flex flex-col items-center gap-1">
                    <Bath size={16} className="text-[#F4B400]" />
                    <span className="font-display font-bold text-foreground text-sm">
                      {property.bathrooms}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-body">
                      Bathrooms
                    </span>
                  </div>
                )}
                {property.bedrooms === undefined && (
                  <div className="bg-muted/50 rounded-xl p-3 flex flex-col items-center gap-1 col-span-2">
                    <Tag size={16} className="text-[#F4B400]" />
                    <span className="font-display font-bold text-foreground text-sm">
                      {property.subtype}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-body">
                      Property Type
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-1.5">
                  About This Property
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-2">
                  Amenities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((a) => (
                    <span
                      key={a}
                      className="text-xs font-body bg-primary/8 text-primary border border-primary/15 rounded-full px-3 py-1"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {property.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-body text-[#1A1A1A] bg-[#F4B400]/20 border border-[#F4B400]/40 rounded-full px-2.5 py-0.5"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-3 pt-1 pb-2">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-display font-bold text-sm hover:opacity-90 transition-smooth"
                  data-ocid="property_modal.whatsapp.button"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2B0A4D] text-white font-display font-bold text-sm hover:opacity-90 transition-smooth"
                  data-ocid="property_modal.call.button"
                >
                  <Phone size={17} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
