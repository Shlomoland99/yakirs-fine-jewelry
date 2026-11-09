"use client";

export default function MonaPage() {
  return (
    <div className="min-h-screen bg-black text-cream flex items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-serif text-gold mb-6">Meet Mona</h1>
        <p className="text-xl italic text-brightgold mb-8">The face of timeless elegance at Yakir’s Fine Jewelry</p>
        <img src="/assets/approved-homepage.png" alt="Mona" className="mx-auto rounded-lg shadow-2xl border border-gold/30 max-w-2xl" />
        <p className="mt-8 text-muted max-w-2xl mx-auto">
          Mona embodies the sophistication and warmth of Yakir’s Fine Jewelry. Every piece is presented with the same refined elegance she represents.
        </p>
      </div>
    </div>
  );
}