"use client";
import { useState } from "react";

const shapes = ["Round Brilliant", "Oval", "Cushion", "Princess", "Emerald", "Radiant", "Asscher", "Marquise", "Pear", "Heart"];
const metals = ["14K Yellow Gold", "18K Yellow Gold", "14K White Gold", "18K White Gold", "14K Rose Gold", "18K Rose Gold"];

export default function RingsPage() {
  const [shape, setShape] = useState(shapes[0]);
  const [metal, setMetal] = useState(metals[0]);

  return (
    <div className="min-h-screen bg-black text-cream p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-serif text-gold text-center mb-2">Rings</h1>
        <p className="text-center italic text-brightgold mb-12">The Promise of Forever</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-burgundy/20 border border-gold/30 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-gold text-2xl mb-4">{shape}</div>
              <div className="text-sm text-muted">{metal}</div>
              <p className="mt-8 text-xs tracking-widest">Product Visualization</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl tracking-widest mb-4">DIAMOND SHAPE</h2>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {shapes.map((s) => (
                <button
                  key={s}
                  onClick={() => setShape(s)}
                  className={`py-2 px-3 text-sm border rounded ${shape === s ? "border-gold bg-gold/10" : "border-gold/30"}`}
                >
                  {s}
                </button>
              ))}
            </div>

            <h2 className="text-xl tracking-widest mb-4">METAL</h2>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {metals.map((m) => (
                <button
                  key={m}
                  onClick={() => setMetal(m)}
                  className={`py-2 px-3 text-sm border rounded ${metal === m ? "border-gold bg-gold/10" : "border-gold/30"}`}
                >
                  {m}
                </button>
              ))}
            </div>

            <button
              onClick={() => window.open(`https://wa.me/972538217406?text=Quotation%20Request:%20Ring%20-%20${shape}%20-%20${metal}`, "_blank")}
              className="w-full py-3 bg-gold text-black rounded-full tracking-widest font-medium"
            >
              REQUEST QUOTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}