export interface Property {
  id: string;
  title: string;
  type: "Residential" | "Commercial";
  subtype: string; // e.g., "2BHK Flat", "3BHK Villa", "Office Space", "Retail Shop"
  price: number; // in INR
  priceLabel: string; // formatted, e.g., "₹45 Lakh"
  location: string;
  area: number; // in sq. ft.
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  amenities: string[];
  images: string[];
  tags: string[];
  isHotDeal: boolean;
  isInvestment: boolean;
}
