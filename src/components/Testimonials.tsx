
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";

import "swiper/css";
import "swiper/css/navigation";

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-fire font-semibold mb-3 block">Testimoni</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6">
            Apa Kata <span className="text-orange-fire">Klien</span> Kami
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Jangan hanya percaya kata-kata kami - dengarkan dari pelanggan puas kami di seluruh dunia
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-secondary rounded-2xl p-8 border border-gray-200 h-full shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < testimonial.rating ? "fill-gold text-gold" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 mb-6 italic">{testimonial.comment}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-primary">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.country}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

