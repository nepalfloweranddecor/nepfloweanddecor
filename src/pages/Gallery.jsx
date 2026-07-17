import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200", height: "h-[520px]" },
  { id: 2, url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200", height: "h-[320px]" },
  { id: 3, url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200", height: "h-[420px]" },
  { id: 4, url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200", height: "h-[600px]" },
  { id: 5, url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200", height: "h-[350px]" },
  { id: 6, url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200", height: "h-[500px]" },
  { id: 7, url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200", height: "h-[380px]" },
  { id: 8, url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200", height: "h-[550px]" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState([]);

  // Scroll-in reveal, replaces framer-motion's whileInView
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.dataset.id);
            setVisible((prev) => (prev.includes(id) ? prev : [...prev, id]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-gallery-item]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const next = useCallback(() => {
    setSelected((s) => (s === null ? s : (s + 1) % images.length));
  }, []);

  const prev = useCallback(() => {
    setSelected((s) => (s === null ? s : s === 0 ? images.length - 1 : s - 1));
  }, []);

  const close = useCallback(() => setSelected(null), []);

  // Keyboard navigation + body scroll lock while lightbox is open
  useEffect(() => {
    if (selected === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected, next, prev, close]);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-neutral-50">
      <section className="py-16 text-center">
        <h1 className="text-5xl font-bold animate-[fadeInUp_0.6s_ease-out]">Our Gallery</h1>
        <p className="mt-4 text-gray-500">Capturing Every Celebration Beautifully</p>
      </section>

      <div className="max-w-7xl mx-auto px-5 pb-20 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
        {images.map((img, index) => (
          <div
            key={img.id}
            data-gallery-item
            data-id={img.id}
            className={`relative mb-5 break-inside-avoid overflow-hidden rounded-3xl shadow-xl cursor-pointer group transition-all duration-500 ${img.height} ${
              visible.includes(img.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 60}ms` }}
            onClick={() => setSelected(index)}
            role="button"
            tabIndex={0}
            aria-label="Open image"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelected(index);
            }}
          >
            <img
              src={img.url}
              alt="Event memory"
              loading="lazy"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
              <div className="translate-y-6 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-white text-xl font-semibold">Event Memories</h3>
                <p className="text-gray-200">View Image →</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-[fadeIn_0.2s_ease-out]"
          onClick={close}
        >
          <button
            className="absolute top-6 right-8 text-white hover:text-gray-300 transition-colors"
            onClick={close}
            aria-label="Close"
          >
            <X size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={56} />
          </button>

          <img
            key={selected}
            src={images[selected].url}
            alt="Event memory enlarged"
            className="max-w-[90vw] max-h-[90vh] rounded-2xl animate-[scaleIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={56} />
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); }
          to { transform: scale(1); }
        }
      `}</style>
    </div>
    <Footer/>
    </>
  );
}