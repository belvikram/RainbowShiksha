import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const images = import.meta.glob(
  "/src/assets/uploads/**/*.{png,jpg,jpeg,svg}",
  { eager: true, as: "url" } // return plain URLs instead of modules
);


// Self-contained Gallery: no props, HTML buttons only, no TS primitive annotations
const Gallery = () => {
  const [index, setIndex] = useState<number | null>(null); // active photo index or null
  const urls = Object.values(images); // array of URL strings
  //   return (
  //     <>
  //       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  //         {urls.map((src, i) => (
  //           <img
  //             key={i}
  //             src={src}
  //             alt={`Event ${i + 1}`}
  //             className="rounded-lg shadow-md"
  //           />
  //         ))}
  //       </div>
  //     </>
  //   );


  // Use actual uploaded images for lightbox
  const sorted = urls;

  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % sorted.length)),
    [sorted.length]
  );
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + sorted.length) % sorted.length
      ),
    [sorted.length]
  );

  // Keyboard navigation in lightbox
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, next, prev]);


  return (
    <section
      className="bg-white py-12 sm:py-16"
      aria-label="Event photo gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Event Gallery
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Moments from our events and programs
          </p>
        </header>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {urls.map((src, i) => (
            <li key={i} className="relative">
              <button
                type="button"
                onClick={() => open(i)}
                className="group block w-full text-left rounded-xl overflow-hidden shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 hover:shadow-lg transition-shadow duration-300"
                aria-label={`Open image ${i + 1}`}
              >
                <div className="relative w-full h-64 md:h-60 lg:h-64 bg-gray-100">
                  <img
                    src={src}
                    alt="Gallery image"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-90"
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Lightbox */}
        {index !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close backdrop"
              onClick={close}
              className="absolute inset-0 bg-black/80"
            />

            {/* Dialog */}
            <div className="relative max-w-5xl w-full mx-4">
              {/* Close */}
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute top-2 right-2 inline-flex items-center justify-center rounded-full bg-black/60 p-2 text-white shadow focus:outline-none focus-visible:ring-2"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev / Next */}
              {sorted.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous"
                    className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/60 p-2 text-white shadow focus:outline-none focus-visible:ring-2"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next"
                    className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/60 p-2 text-white shadow focus:outline-none focus-visible:ring-2"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              <img
                src={sorted[index]}
                alt="Gallery image"
                className="w-full max-h-[85vh] object-contain rounded-xl"
              />

              <div className="mt-3 text-white text-center">
                <div className="text-xs opacity-90">
                  Click outside or press Escape to close
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
