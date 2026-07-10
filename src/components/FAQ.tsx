
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/faqs";

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-fire font-semibold mb-3 block">FAQ</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6">
            Pertanyaan yang <span className="text-orange-fire">Sering Diajukan</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Punya pertanyaan? Kami punya jawaban. Lihat pertanyaan yang sering diajukan di bawah ini.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-background rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-blue-primary text-lg pr-4">{faq.question}</span>
                <span className="text-orange-fire flex-shrink-0">
                  {openId === faq.id ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-500">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

