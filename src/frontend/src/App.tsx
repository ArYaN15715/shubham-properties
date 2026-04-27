import {
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Layout from "./components/Layout";
import PropertyCard from "./components/PropertyCard";
import PropertyModal from "./components/PropertyModal";
import { properties } from "./data/properties";
import type { Property } from "./types/property";

const focusAreas = [
  {
    name: "GIFT City",
    desc: "India's first IFSC smart city",
    icon: "🏙️",
    highlight: true,
  },
  {
    name: "Sargasan",
    desc: "Fast-growing residential zone",
    icon: "🏘️",
    highlight: false,
  },
  {
    name: "Raysan",
    desc: "University corridor & families",
    icon: "🌿",
    highlight: false,
  },
  {
    name: "PDPU Area",
    desc: "High rental yield, student zone",
    icon: "🎓",
    highlight: false,
  },
];

const whyUsPoints = [
  {
    icon: <MapPin className="text-[#F4B400]" size={22} />,
    title: "Hyperlocal Expertise",
    desc: "Deep knowledge of every lane, project, and price in Gandhinagar & GIFT City since 2010.",
  },
  {
    icon: <CheckCircle2 className="text-[#F4B400]" size={22} />,
    title: "Verified Properties Only",
    desc: "Every listing is personally verified. No fake posts, no misleading prices.",
  },
  {
    icon: <TrendingUp className="text-[#F4B400]" size={22} />,
    title: "Best Deal Negotiation",
    desc: "We negotiate hard on your behalf — you save lakhs every time.",
  },
  {
    icon: <Zap className="text-[#F4B400]" size={22} />,
    title: "Fast Response Guarantee",
    desc: "Site visits booked within 24 hours. Your time is precious, we respect that.",
  },
];

const investmentReasons = [
  {
    label: "GIFT City IFSC",
    value: "Only in India",
    icon: <Building2 size={20} />,
  },
  {
    label: "Infrastructure Growth",
    value: "300% in 5 years",
    icon: <TrendingUp size={20} />,
  },
  {
    label: "Expected Appreciation",
    value: "15–20% p.a.",
    icon: <Award size={20} />,
  },
  {
    label: "NRI Investment Approved",
    value: "100% Repatriable",
    icon: <Users size={20} />,
  },
];

const testimonials = [
  {
    name: "Rajan Patel",
    role: "Software Engineer, Ahmedabad",
    review:
      "Shubham Properties helped me find a 2BHK in Sargasan within my budget. Super honest team, no hidden charges. Highly recommend!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "IT Professional, Gandhinagar",
    review:
      "I was confused about GIFT City investment — they explained everything clearly and got me a fantastic deal. Best real estate experience ever.",
    rating: 5,
  },
  {
    name: "Arvind Shah",
    role: "Business Owner, Anand",
    review:
      "Bought a commercial shop near PDPU. Great guidance, great price. These guys know Gandhinagar inside out!",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Is GIFT City a good investment in 2025?",
    a: "Absolutely. GIFT City is India's only IFSC and has seen 18–25% annual appreciation since 2021. With global giants like NSE, BSE, and 500+ companies operating there, it remains the highest ROI real estate zone in Gujarat.",
  },
  {
    q: "What is the minimum budget to buy property in Gandhinagar?",
    a: "You can find 2BHK flats in Sargasan and Raysan starting from ₹35–40 Lakh. GIFT City starts from ₹85 Lakh for 2BHK. Commercial units start from ₹25 Lakh.",
  },
  {
    q: "Do you help with home loans?",
    a: "Yes! We have tie-ups with leading banks and NBFCs. We help you get the best interest rates and assist with all documentation — zero extra charge.",
  },
  {
    q: "Can NRIs invest in GIFT City properties?",
    a: "Yes, NRI investment in GIFT City is 100% allowed and fully repatriable. We have helped several NRI clients from the US, UK, and UAE invest seamlessly.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-4 text-left font-display font-semibold text-foreground text-sm hover:bg-muted/30 transition-colors"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 ml-3 text-[#F4B400] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-muted-foreground font-body leading-relaxed border-t border-border">
          <p className="pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Residential" | "Commercial"
  >("All");

  const filtered = properties.filter(
    (p) => activeFilter === "All" || p.type === activeFilter,
  );

  return (
    <Layout>
      {/* ====== HERO ====== */}
      <section
        id="hero"
        className="relative min-h-[90dvh] flex items-center bg-[#2B0A4D] overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-gandhinagar.dim_1200x600.jpg"
            alt="Gandhinagar GIFT City skyline"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B0A4D]/80 via-[#2B0A4D]/60 to-[#2B0A4D]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.span
              className="inline-block bg-[#F4B400]/20 text-[#FFD54F] border border-[#F4B400]/40 text-xs font-display font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              🏙️ Gandhinagar & GIFT City Specialist
            </motion.span>

            <motion.h1
              className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your Trusted Property Expert in{" "}
              <span className="text-[#F4B400]">Gandhinagar</span> &{" "}
              <span className="text-[#FFD54F]">GIFT City</span>
            </motion.h1>

            <motion.p
              className="font-body text-white/70 text-base sm:text-lg mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Helping You Find the Best Deals in the Fastest Growing Real Estate
              Zone. 15+ years of hyperlocal expertise.
            </motion.p>

            {/* Checkmarks */}
            <motion.ul
              className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-8 text-sm font-body text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {[
                "Verified Listings",
                "Expert Local Knowledge",
                "Seamless Transactions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#F4B400] shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <button
                type="button"
                onClick={() =>
                  document
                    .querySelector("#properties")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-cta text-base py-3.5 px-7"
                data-ocid="hero.explore_properties.button"
              >
                Explore Properties
              </button>
              <a
                href="https://wa.me/919876543210?text=Hi%20Shubham%20Properties%2C%20I%20want%20to%20get%20the%20best%20deals%20in%20Gandhinagar."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-7 rounded-lg border-2 border-[#F4B400]/60 text-[#FFD54F] font-display font-bold text-base hover:bg-[#F4B400]/10 transition-smooth"
                data-ocid="hero.get_deals.button"
              >
                <MessageCircle size={18} />
                Get Best Deals
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: "5.0★", label: "Client Satisfaction" },
                { value: "500+", label: "Properties Sold" },
                { value: "8.5K+", label: "Instagram Followers" },
                { value: "15+", label: "Years in Gandhinagar" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display font-extrabold text-[#F4B400] text-xl">
                    {stat.value}
                  </span>
                  <span className="font-body text-white/60 text-xs">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== FOCUS AREAS ====== */}
      <section id="areas" className="bg-muted/30 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-extrabold text-[#2B0A4D] text-2xl sm:text-3xl">
              Our Focus Areas
            </h2>
            <p className="text-muted-foreground font-body text-sm mt-2">
              Hyperlocal expertise across Gandhinagar's highest-growth zones
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.name}
                className={`card-surface p-4 sm:p-5 flex flex-col items-center text-center gap-2 hover:shadow-elevated ${
                  area.highlight ? "ring-2 ring-[#F4B400]/60" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-3xl">{area.icon}</span>
                <span className="font-display font-bold text-foreground text-sm">
                  {area.name}
                  {area.highlight && (
                    <span className="ml-1 text-[9px] bg-[#F4B400] text-[#1A1A1A] px-1.5 py-0.5 rounded-full font-bold uppercase">
                      Hot
                    </span>
                  )}
                </span>
                <span className="text-muted-foreground font-body text-xs leading-relaxed">
                  {area.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROPERTIES ====== */}
      <section id="properties" className="bg-background py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="font-display font-extrabold text-[#2B0A4D] text-2xl sm:text-3xl">
                Featured Properties
              </h2>
              <p className="text-muted-foreground font-body text-sm mt-1">
                Hand-picked listings across Gandhinagar's prime zones
              </p>
            </div>
            {/* Filter tabs */}
            <div className="flex gap-2" data-ocid="property.filter.tab">
              {(["All", "Residential", "Commercial"] as const).map((f) => (
                <button
                  type="button"
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-display font-bold transition-smooth ${
                    activeFilter === f
                      ? "bg-[#2B0A4D] text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/70"
                  }`}
                  data-ocid={`property.filter.${f.toLowerCase()}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((property, i) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={i}
                onViewDetails={setSelectedProperty}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY US ====== */}
      <section id="why-us" className="bg-[#2B0A4D] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl">
              Why Choose <span className="text-[#F4B400]">शुभम् Properties</span>?
            </h2>
            <p className="text-white/60 font-body text-sm mt-2">
              The Gandhinagar specialist you can trust — every time
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUsPoints.map((pt, i) => (
              <motion.div
                key={pt.title}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-3 hover:bg-white/10 transition-smooth"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#F4B400]/15 flex items-center justify-center">
                  {pt.icon}
                </div>
                <h3 className="font-display font-bold text-white text-sm">
                  {pt.title}
                </h3>
                <p className="font-body text-white/60 text-xs leading-relaxed">
                  {pt.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INVESTMENT ====== */}
      <section id="investment" className="bg-background py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-extrabold text-[#2B0A4D] text-2xl sm:text-3xl">
              Why Invest in <span className="text-[#F4B400]">GIFT City</span> &
              Gandhinagar?
            </h2>
            <p className="text-muted-foreground font-body text-sm mt-2 max-w-xl mx-auto">
              India's most exciting real estate growth corridor — backed by
              world-class infrastructure and government support
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {investmentReasons.map((r, i) => (
              <motion.div
                key={r.label}
                className="card-surface p-5 flex flex-col items-center text-center gap-2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-[#F4B400]">{r.icon}</div>
                <span className="font-display font-extrabold text-[#2B0A4D] text-lg">
                  {r.value}
                </span>
                <span className="font-body text-muted-foreground text-xs">
                  {r.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-br from-[#2B0A4D] to-[#3d1266] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="font-display font-extrabold text-white text-xl sm:text-2xl mb-2">
                Ready to Invest in Gandhinagar's Future?
              </h3>
              <p className="font-body text-white/60 text-sm">
                Talk to our GIFT City expert today. Free consultation, no
                obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/919876543210?text=Hi%20Shubham%20Properties%2C%20I%20want%20to%20invest%20in%20GIFT%20City%20or%20Gandhinagar."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta flex items-center gap-2"
                data-ocid="investment.whatsapp_cta.button"
              >
                <MessageCircle size={16} />
                Talk to Expert
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-lg border-2 border-[#F4B400]/50 text-[#FFD54F] font-display font-bold text-sm hover:bg-[#F4B400]/10 transition-smooth"
                data-ocid="investment.call_cta.button"
              >
                <Phone size={15} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== SOCIAL PROOF ====== */}
      <section className="bg-muted/30 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-extrabold text-[#2B0A4D] text-2xl sm:text-3xl">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              5.0★ average — 100% satisfied clients across Gandhinagar
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="card-surface p-5 flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={`star-${t.name}-${s}`}
                      size={13}
                      className="text-[#F4B400] fill-[#F4B400]"
                    />
                  ))}
                </div>
                <p className="font-body text-foreground text-sm leading-relaxed italic">
                  "{t.review}"
                </p>
                <div className="flex flex-col mt-auto">
                  <span className="font-display font-bold text-foreground text-sm">
                    {t.name}
                  </span>
                  <span className="font-body text-muted-foreground text-xs">
                    {t.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Instagram CTA */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 border border-[#F4B400]/20 rounded-2xl p-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center sm:text-left">
              <p className="font-display font-bold text-foreground text-sm">
                Follow us on Instagram for daily property updates & reels
              </p>
              <p className="text-muted-foreground text-xs mt-0.5">
                8.5K+ followers • Property tours, deals, GIFT City updates
              </p>
            </div>
            <a
              href="https://instagram.com/shubhamproperties"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#833ab4] to-[#fcb045] text-white font-display font-bold text-sm hover:opacity-90 transition-smooth"
              data-ocid="social.instagram.button"
            >
              📸 Follow on Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="bg-background py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-extrabold text-[#2B0A4D] text-2xl sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Everything you need to know before investing in Gandhinagar
            </p>
          </motion.div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CONTACT / LEAD CAPTURE ====== */}
      <section id="contact" className="bg-[#2B0A4D] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl mb-2">
              Get in Touch
            </h2>
            <p className="text-white/60 font-body text-sm">
              Looking for property in Gandhinagar? Fill in your details and
              we'll reach out within 24 hours.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/[0.08] border border-white/10 rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-white/80 text-xs font-display font-semibold uppercase tracking-wide"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Raj Patel"
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder:text-white/30 text-sm font-body focus:outline-none focus:border-[#F4B400]/60"
                  data-ocid="contact.name.input"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-phone"
                  className="text-white/80 text-xs font-display font-semibold uppercase tracking-wide"
                >
                  Mobile Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder:text-white/30 text-sm font-body focus:outline-none focus:border-[#F4B400]/60"
                  data-ocid="contact.phone.input"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-intent"
                  className="text-white/80 text-xs font-display font-semibold uppercase tracking-wide"
                >
                  I'm Looking to
                </label>
                <select
                  id="contact-intent"
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm font-body focus:outline-none focus:border-[#F4B400]/60"
                  data-ocid="contact.intent.select"
                >
                  <option value="buy" className="bg-[#2B0A4D]">
                    Buy a Property
                  </option>
                  <option value="rent" className="bg-[#2B0A4D]">
                    Rent a Property
                  </option>
                  <option value="sell" className="bg-[#2B0A4D]">
                    Sell My Property
                  </option>
                  <option value="invest" className="bg-[#2B0A4D]">
                    Invest in GIFT City
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-budget"
                  className="text-white/80 text-xs font-display font-semibold uppercase tracking-wide"
                >
                  Budget Range
                </label>
                <select
                  id="contact-budget"
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm font-body focus:outline-none focus:border-[#F4B400]/60"
                  data-ocid="contact.budget.select"
                >
                  <option value="" className="bg-[#2B0A4D]">
                    Select budget
                  </option>
                  <option value="25-50" className="bg-[#2B0A4D]">
                    ₹25–50 Lakh
                  </option>
                  <option value="50-1cr" className="bg-[#2B0A4D]">
                    ₹50 Lakh – 1 Cr
                  </option>
                  <option value="1cr+" className="bg-[#2B0A4D]">
                    ₹1 Cr+
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mb-5">
              <label
                htmlFor="contact-message"
                className="text-white/80 text-xs font-display font-semibold uppercase tracking-wide"
              >
                Message (Optional)
              </label>
              <textarea
                id="contact-message"
                placeholder="Tell us about your requirements — location, type, timeline..."
                rows={3}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder:text-white/30 text-sm font-body focus:outline-none focus:border-[#F4B400]/60 resize-none"
                data-ocid="contact.message.textarea"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="flex-1 btn-cta flex items-center justify-center gap-2 py-3.5"
                data-ocid="contact.submit.button"
              >
                <Home size={16} />
                Request Property Details
              </button>
              <a
                href="https://wa.me/919876543210?text=Hi%20Shubham%20Properties%2C%20I%20need%20help%20finding%20a%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg border-2 border-[#25D366]/60 text-[#25D366] font-display font-bold text-sm hover:bg-[#25D366]/10 transition-smooth"
                data-ocid="contact.whatsapp.button"
              >
                <MessageCircle size={16} />
                WhatsApp Instead
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== LOCATION / MAP ====== */}
      <section id="location" className="bg-[#2B0A4D] py-14 px-4">
        {/* Gold divider at top */}
        <div className="max-w-7xl mx-auto mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F4B400]/60 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display font-bold text-[#F4B400] text-sm uppercase tracking-widest mb-2">
              Sargasan, Gandhinagar, Gujarat
            </p>
            <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl mb-3">
              Find Us Here
            </h2>
            <p className="font-body text-[#B0B0B0] text-sm">
              Serving Sargasan, GIFT City, Raysan &amp; PDPU Area
            </p>
          </motion.div>

          {/* Map iframe with gold border */}
          <motion.div
            className="rounded-2xl overflow-hidden p-[3px] bg-gradient-to-br from-[#F4B400] via-[#FFD54F] to-[#F4B400] shadow-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="rounded-xl overflow-hidden w-full">
              <iframe
                title="Shubham Properties Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14684.5!2d72.6505!3d23.2156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bce6f2e39f1%3A0x9e6ed9a19dd1af6d!2sSargasan%2CGandhinagar%2CGujarat!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin"
                width="100%"
                className="block h-[350px] sm:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-ocid="location.map.canvas_target"
              />
            </div>
          </motion.div>

          {/* Address + CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Address block */}
            <div className="flex items-start gap-2.5">
              <MapPin className="text-[#F4B400] shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-display font-semibold text-white text-sm">
                  Sargasan, Gandhinagar, Gujarat
                </p>
                <p className="font-body text-[#B0B0B0] text-xs mt-0.5">
                  Near GIFT City
                </p>
              </div>
            </div>

            {/* Get Directions CTA */}
            <a
              href="https://maps.google.com/?q=Sargasan,Gandhinagar,Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta flex items-center gap-2 shrink-0"
              data-ocid="location.get_directions.button"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </section>

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </Layout>
  );
}
