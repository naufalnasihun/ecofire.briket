
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih atas pertanyaan Anda! Kami akan segera menghubungi Anda kembali.");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-fire font-semibold mb-3 block">Hubungi Kami</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6">
            <span className="text-orange-fire">Hubungi</span> Kami
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Siap memesan atau punya pertanyaan? Kami ingin mendengar dari Anda!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-500 mb-2 text-sm font-medium">Nama</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-background border border-gray-300 rounded-xl text-blue-primary focus:outline-none focus:border-orange-fire transition-colors"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 mb-2 text-sm font-medium">Perusahaan</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-gray-300 rounded-xl text-blue-primary focus:outline-none focus:border-orange-fire transition-colors"
                    placeholder="Perusahaan Anda"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-500 mb-2 text-sm font-medium">Negara</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-background border border-gray-300 rounded-xl text-blue-primary focus:outline-none focus:border-orange-fire transition-colors"
                    placeholder="Negara Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-gray-300 rounded-xl text-blue-primary focus:outline-none focus:border-orange-fire transition-colors"
                    placeholder="email@anda.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-500 mb-2 text-sm font-medium">WhatsApp</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-background border border-gray-300 rounded-xl text-blue-primary focus:outline-none focus:border-orange-fire transition-colors"
                  placeholder="+62 812 3456 7890"
                />
              </div>
              <div className="mb-8">
                <label className="block text-gray-500 mb-2 text-sm font-medium">Pesan</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-gray-300 rounded-xl text-blue-primary focus:outline-none focus:border-orange-fire transition-colors resize-none"
                  placeholder="Ceritakan kebutuhan Anda..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-orange-fire text-white rounded-xl font-semibold text-lg hover:bg-orange-fire/90 transition-all duration-300 hover:shadow-lg hover:shadow-orange-fire/30"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-secondary rounded-2xl p-6 border border-gray-200 flex items-center gap-4 shadow-sm">
                <div className="w-14 h-14 bg-orange-fire/10 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-fire">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-primary mb-1">Email</h4>
                  <p className="text-gray-500">briketstore22@gmail.com</p>
                </div>
              </div>
              <div className="bg-secondary rounded-2xl p-6 border border-gray-200 flex items-center gap-4 shadow-sm">
                <div className="w-14 h-14 bg-orange-fire/10 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-fire">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-primary mb-1">WhatsApp</h4>
                  <a href="https://wa.me/6285733535057" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-fire transition-colors">
                    +62 857 3353 5057
                  </a>
                </div>
              </div>
              <div className="bg-secondary rounded-2xl p-6 border border-gray-200 flex items-center gap-4 shadow-sm">
                <div className="w-14 h-14 bg-orange-fire/10 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-fire">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-primary mb-1">Alamat</h4>
                  <p className="text-gray-500">
                    Carang Puspo, Carang Rejo, Kec. Kesamben, Kabupaten Jombang, Jawa Timur 61484
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-secondary rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.6746826194803!2d112.34046339999999!3d-7.5011209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7813006dd98fe7%3A0x432bdd8e402bbc06!2sEcoFire%20Official!5e0!3m2!1sid!2sid!4v1720531200000!5m2!1sid!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi EcoFire"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

