
import { motion } from "framer-motion";
import { productionProcess } from "../data/constants";

export function ProductionProcess() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-fire font-semibold mb-3 block">Proses Kami</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6">
            Dari <span className="text-orange-fire">Eceng gondok</span> ke Briket Premium
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Temukan proses produksi teliti kami yang memastikan kualitas tertinggi
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2" />

          <div className="space-y-12">
            {productionProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8`}
              >
                {/* Content */}
                <div className="flex-1" />
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-14 h-14 bg-orange-fire rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-background">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className={`bg-secondary rounded-2xl p-6 border border-gray-200 shadow-sm ${
                      index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                    }`}
                  >
                    <h3 className="font-heading text-xl font-bold text-blue-primary mb-2">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

