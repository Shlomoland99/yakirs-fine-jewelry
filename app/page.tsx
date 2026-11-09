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
      <video
        ref={videoRef}
        src="/videos/homepage-speaking-model.mp4"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      <header className="relative z-10 pt-6 px-8 flex justify-between items-start">
        <div className="text-center">
          <div className="text-5xl font-serif text-gold tracking-widest">Yakir’s</div>
          <div className="text-sm tracking-[0.3em] text-brightgold">FINE JEWELRY</div>
        </div>
        <nav className="flex gap-6 text-sm tracking-wider">
          {["HOME", "COLLECTIONS", "CUSTOM DESIGN", "THE ATELIER", "ABOUT", "CONTACT"].map((item) => (
            <button key={item} onClick={() => openNew(`/${item.toLowerCase().replace(" ", "-")}`)} className="hover:text-gold transition">
              {item}
            </button>
          ))}
        </nav>
      </header>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <p className="text-sm tracking-[0.4em] text-gold mb-2">TIMELESS ELEGANCE</p>
        <h1 className="text-5xl font-serif text-brightgold mb-4">DIAMOND COLLECTIONS</h1>
        <p className="text-lg italic mb-8">Frost Yourself with<br />Yakir’s Fine Jewelry</p>
        <button
          onClick={() => openNew("/collections")}
          className="px-8 py-3 border border-gold rounded-full text-sm tracking-widest hover:bg-gold/10 transition"
        >
          EXPLORE COLLECTIONS
        </button>
      </div>

      <div
        className="absolute left-8 top-1/3 w-80 h-[480px] cursor-pointer z-20"
        onClick={() => openNew("/mona")}
      />

      <div className="relative z-10 absolute bottom-24 left-0 right-0 flex justify-center gap-6 px-8">
        {[
          { name: "RINGS" },
          { name: "BRACELETS" },
          { name: "NECKLACES" },
          { name: "EARRINGS" },
        ].map((card) => (
          <button
            key={card.name}
            onClick={() => openNew(`/collections/${card.name.toLowerCase()}`)}
            className="w-48 bg-black/70 border border-gold/30 rounded-lg overflow-hidden hover:border-gold transition"
          >
            <div className="h-32 bg-burgundy/40 flex items-center justify-center">
              <span className="text-gold text-xs">Product Image</span>
            </div>
            <div className="p-3 text-center text-sm tracking-widest">{card.name}</div>
          </button>
        ))}
      </div>

      <footer className="absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center px-8 py-4 text-xs tracking-wider border-t border-gold/20 bg-black/60">
        <div className="flex gap-8">
          <span>Custom Design Made to Measure</span>
          <span>Certified Diamonds</span>
          <span>Lifetime Care & Service</span>
        </div>
        <button
          onClick={() => window.open("https://wa.me/972538217406", "_blank")}
          className="px-6 py-2 bg-gold text-black rounded-full font-medium"
        >
          Ask Joe on WhatsApp
        </button>
      </footer>
    </div>
  );
}