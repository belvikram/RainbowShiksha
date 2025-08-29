import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

const images = import.meta.glob(
  "/src/assets/uploads/**/*.{png,jpg,jpeg,svg}",
  { eager: true, as: "url" } // return plain URLs instead of modules
);

console.log(images);

// Self-contained Gallery: no props, HTML buttons only, no TS primitive annotations
const Gallery = () => {
  const [index, setIndex] = useState(null); // active photo index or null
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

  // Centralized photo data (includes dates inside the component)
  const photos = [
    {
      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Annual Fundraising Gala 2024",
      date: "2024-03-15",
    },
    {
      src: "https://images.pexels.com/photos/8923139/pexels-photo-8923139.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "School Supply Drive - Spring Collection",
      date: "2024-04-02",
    },
    {
      src: "https://images.pexels.com/photos/8923194/pexels-photo-8923194.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Digital Literacy Workshop",
      date: "2024-04-20",
    },
    {
      src: "https://images.pexels.com/photos/8923015/pexels-photo-8923015.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Volunteer Orientation Program",
      date: "2024-05-05",
    },
    {
      src: "https://images.pexels.com/photos/8923166/pexels-photo-8923166.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Education Summit 2023",
      date: "2023-12-10",
    },
    {
      src: "https://images.pexels.com/photos/8923018/pexels-photo-8923018.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Diwali Celebration with Children",
      date: "2023-11-12",
    },
  ];

  // Sort newest first
  const sorted = photos
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const open = useCallback((i) => setIndex(i), []);
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
    const onKey = (e) => {
      if (index === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, next, prev]);

  const fmt = (iso) => {
    try {
      return new Date(iso).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return iso;
    }
  };

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
            <img
              key={i}
              src={src}
              alt={`Event ${i + 1}`}
              className="rounded-lg shadow-md"
            />
          ))}
          {/* {sorted.map((p, i) => (
            <li key={`${p.title}-${p.date}`} className="relative">
              <button
                type="button"
                onClick={() => open(i)}
                className="group block w-full text-left rounded-xl overflow-hidden shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                aria-label={`Open ${p.title}`}
              >
                <div className="relative w-full h-64 md:h-60 lg:h-64 bg-gray-100">
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  />

                  <div className="absolute bottom-0 inset-x-0 bg-black/55 text-white p-3 md:p-3.5">
                    <h3 className="text-sm font-semibold leading-tight line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-xs opacity-90">{fmt(p.date)}</p>
                  </div>
                </div>
              </button>
            </li>
          ))} */}
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
                src={sorted[index].src}
                alt={sorted[index].title}
                className="w-full max-h-[85vh] object-contain rounded-xl"
              />

              <div className="mt-3 text-white text-center">
                <div className="text-sm font-medium">{sorted[index].title}</div>
                <div className="text-xs opacity-90">
                  {fmt(sorted[index].date)}
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
