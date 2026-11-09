"use client";
import { useRef, useEffect } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const openNew = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen bg-black text-cream overflow-hidden">
      <img
        src="/assets/approved-homepage.png"
        alt="Yakir's Fine Jewelry"
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      <header className="relative z-10 pt-4 px-6 flex justify-between items-center">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-serif text-gold tracking-widest">Yakir’s</div>
          <div className="text-xs tracking-[0.3em] text-brightgold">FINE JEWELRY</div>
        </div>
        <nav className="hidden md:flex gap-5 text-xs tracking-wider">
          {["HOME", "COLLECTIONS", "CUSTOM DESIGN", "THE ATELIER", "ABOUT", "CONTACT"].map((item) => (
            <button key={item} onClick={() => openNew(`/${item.toLowerCase().replace(/ /g, "-")}`)} className="hover:text-gold transition">
              {item}
            </button>
          ))}
        </nav>
      </header>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[55vh] text-center px-4">
        <p className="text-xs tracking-[0.4em] text-gold mb-1">TIMELESS ELEGANCE</p>
        <h1 className="text-4xl md:text-5xl font-serif text-brightgold mb-3">DIAMOND COLLECTIONS</h1>
        <p className="text-base italic mb-6">Frost Yourself with<br />Yakir’s Fine Jewelry</p>
        <button
          onClick={() => openNew("/collections")}
          className="px-7 py-2.5 border border-gold rounded-full text-xs tracking-widest hover:bg-gold/10 transition"
        >
          EXPLORE COLLECTIONS
        </button>
      </div>

      <div
        className="absolute left-[4%] top-[28%] w-[28%] h-[55%] cursor-pointer z-20"
        onClick={() => openNew("/mona")}
        title="Meet Mona"
      />

      <div className="relative z-10 absolute bottom-20 left-0 right-0 flex justify-center gap-4 px-4">
        {[
          { name: "RINGS", path: "rings" },
          { name: "BRACELETS", path: "bracelets" },
          { name: "NECKLACES", path: "necklaces" },
          { name: "EARRINGS", path: "earrings" },
        ].map((card) => (
          <button
            key={card.name}
            onClick={() => openNew(`/collections/${card.path}`)}
            className="w-36 md:w-44 bg-black/80 border border-gold/40 rounded-lg overflow-hidden hover:border-gold transition backdrop-blur-sm"
          >
            <div className="h-24 bg-burgundy/50 flex items-center justify-center">
              <span className="text-gold text-[10px] tracking-widest">{card.name}</span>
            </div>
            <div className="p-2 text-center text-xs tracking-widest">{card.name}</div>
          </button>
        ))}
      </div>

      <footer className="absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center px-4 py-3 text-[10px] tracking-wider border-t border-gold/20 bg-black/70">
        <div className="flex gap-4 md:gap-6">
          <span>Custom Design</span>
          <span>Certified Diamonds</span>
          <span>Lifetime Care</span>
        </div>
        <button
          onClick={() => window.open("https://wa.me/972538217406", "_blank")}
          className="px-4 py-1.5 bg-gold text-black rounded-full text-xs font-medium"
        >
          Ask Joe on WhatsApp
        </button>
      </footer>
    </div>
  );
}