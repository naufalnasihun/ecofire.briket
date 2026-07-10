
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Product } from "../data/products";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  const images = [product.image, ...product.gallery];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-4 mx-auto w-[95%] max-w-5xl bg-white rounded-2xl overflow-hidden z-[70] border border-gray-200 shadow-2xl max-h-[calc(100vh-2rem)] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 flex-shrink-0">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-blue-primary">{product.name}</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 hover:text-blue-primary"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto flex-1 p-5 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 shadow-inner">
                    <img
                      src={images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-2 md:gap-3">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`aspect-square rounded-lg md:rounded-xl overflow-hidden border-2 md:border-3 transition-all bg-gray-50 ${
                          selectedImage === idx
                            ? "border-orange-fire shadow-md"
                            : "border-gray-100 hover:border-orange-fire/50"
                        }`}
                      >
                        <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-contain bg-gray-50" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  {/* Spec */}
                  <div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">{product.specification}</p>
                  </div>

                  {/* Spec Grid */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl md:rounded-2xl p-4 md:p-5 border border-orange-100">
                      <span className="text-gray-600 text-xs font-medium uppercase tracking-wide block mb-1 md:mb-2">Waktu Bakar</span>
                      <span className="text-orange-fire font-bold text-lg md:text-xl">{product.burningTime}</span>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl md:rounded-2xl p-4 md:p-5 border border-orange-100">
                      <span className="text-gray-600 text-xs font-medium uppercase tracking-wide block mb-1 md:mb-2">Kadar Air</span>
                      <span className="text-orange-fire font-bold text-lg md:text-xl">{product.moisture}</span>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl md:rounded-2xl p-4 md:p-5 border border-orange-100">
                      <span className="text-gray-600 text-xs font-medium uppercase tracking-wide block mb-1 md:mb-2">Kadar Abu</span>
                      <span className="text-orange-fire font-bold text-lg md:text-xl">{product.ashContent}</span>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl md:rounded-2xl p-4 md:p-5 border border-orange-100">
                      <span className="text-gray-600 text-xs font-medium uppercase tracking-wide block mb-1 md:mb-2">Nilai Kalori</span>
                      <span className="text-orange-fire font-bold text-lg md:text-xl">{product.calorificValue}</span>
                    </div>
                  </div>

                  {/* Packaging */}
                  <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-5 border border-gray-100">
                    <span className="text-gray-600 text-xs font-medium uppercase tracking-wide block mb-1 md:mb-2">Pengemasan</span>
                    <span className="text-blue-primary font-bold text-lg md:text-xl">{product.packing}</span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/6285733535057?text=Halo%20EcoFire,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}.%20Bisa%20diberikan%20informasi%20harga%20dan%20detail%20lebih%20lanjut?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-full block text-center px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-orange-fire to-orange-600 text-white rounded-full font-bold text-base md:text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-300 transform hover:-translate-y-1"
                  >
                    Permintaan Harga via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

