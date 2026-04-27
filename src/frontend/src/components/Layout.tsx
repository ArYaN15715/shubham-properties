import type { ReactNode } from "react";
import FloatingWhatsApp from "./FloatingWhatsApp";
import MobileBottomBar from "./MobileBottomBar";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Navbar />
      {/* Top offset for fixed navbar */}
      <main className="flex-1 pt-16 pb-16 md:pb-0">{children}</main>
      <footer className="bg-[#2B0A4D] text-white/70 py-8 px-4 md:pb-8 pb-20 text-center text-xs font-body">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col items-center sm:items-start gap-0.5">
            <span className="font-display font-extrabold text-[#F4B400] text-sm">
              शुभम् PROPERTIES
            </span>
            <span className="text-white/50 text-[10px]">
              Sargasan, Gandhinagar, Gujarat — Your Trusted Property Expert
            </span>
          </div>
          <p>
            © {new Date().getFullYear()} · Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4B400] hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
