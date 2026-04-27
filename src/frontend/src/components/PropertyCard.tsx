import { BedDouble, MapPin, Maximize2 } from "lucide-react";
import { motion } from "motion/react";
import type { Property } from "../types/property";

interface PropertyCardProps {
  property: Property;
  index: number;
  onViewDetails: (property: Property) => void;
}

export default function PropertyCard({
  property,
  index,
  onViewDetails,
}: PropertyCardProps) {
  return (
    <motion.div
      className="card-surface overflow-hidden flex flex-col group cursor-pointer border-l-4 border-l-[#F4B400] hover:shadow-elevated"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      onClick={() => onViewDetails(property)}
      data-ocid={`property.item.${index + 1}`}
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Tags */}
        <div className="absolute top-2 left-2 flex gap-1.5 flex-wrap">
          {property.isHotDeal && (
            <span className="bg-[#FFD54F] text-[#1A1A1A] text-[9px] font-display font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              🔥 Hot Deal
            </span>
          )}
          {property.isInvestment && (
            <span className="bg-[#F4B400] text-[#1A1A1A] text-[9px] font-display font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              📈 Investment
            </span>
          )}
        </div>

        {/* Type badge */}
        <span className="absolute top-2 right-2 text-[9px] font-display font-bold bg-[#2B0A4D]/80 text-white px-2 py-0.5 rounded-full uppercase">
          {property.subtype}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-display font-bold text-foreground text-sm leading-snug line-clamp-2">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground text-xs">
            <MapPin size={11} />
            <span className="truncate">{property.location}</span>
          </div>
        </div>

        {/* Specs row */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
          <span className="flex items-center gap-1">
            <Maximize2 size={11} />
            {property.area} sq.ft
          </span>
          {property.bedrooms !== undefined && (
            <span className="flex items-center gap-1">
              <BedDouble size={11} />
              {property.bedrooms} BHK
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
          <span className="font-display font-extrabold text-[#2B0A4D] text-base">
            {property.priceLabel}
          </span>
          <button
            type="button"
            className="text-xs font-display font-bold bg-[#FFD54F] text-[#1A1A1A] px-3 py-1.5 rounded-lg hover:bg-[#F4B400] transition-smooth"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(property);
            }}
            data-ocid={`property.view_details.${index + 1}`}
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
