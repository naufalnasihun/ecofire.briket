
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "../data/gallery";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-fire font-semibold mb-3 block">Galeri</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6">
              <span className="text-orange-fire">Karya</span> Kami dalam Gambar
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Lihat fasilitas produksi, produk, dan pelanggan puas kami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="cursor-pointer overflow-hidden rounded-xl shadow-md"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 z-[80]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[90] w-[95vw] max-w-6xl flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 text-white hover:text-orange-fire transition-colors"
              >
                <X size={36} />
              </button>

              <div className="relative w-full max-h-[85vh] flex items-center justify-center">
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-0 -ml-12 md:-ml-16 text-white hover:text-orange-fire transition-colors z-10"
                >
                  <ChevronLeft size={48} />
                </button>
                <img
                  src={galleryImages[selectedImage]}
                  alt={`Full size ${selectedImage + 1}`}
                  className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain"
                />
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-0 -mr-12 md:-mr-16 text-white hover:text-orange-fire transition-colors z-10"
                >
                  <ChevronRight size={48} />
                </button>
              </div>

              <div className="text-white mt-4 text-sm font-medium">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

