import React from "react";
import { motion } from "framer-motion";
import { Laptop, Server, Headphones, MessageCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Refurbished Laptops",
      description:
        "Premium quality laptops from Dell, HP, Lenovo, and more. Fully tested and ready to use.",
      icon: Laptop,
      color: "from-blue-600 to-blue-400",
      image: "💻",
    },
    {
      id: 2,
      title: "CPUs & Desktops",
      description:
        "High-performance desktop computers perfect for work, gaming, and creative professionals.",
      icon: Server,
      color: "from-cyan-500 to-cyan-300",
      image: "🖥️",
    },
    {
      id: 3,
      title: "Laptop Accessories",
      description:
        "Complete range of accessories including bags, chargers, RAM, SSD upgrades, and more.",
      icon: Headphones,
      color: "from-purple-600 to-purple-400",
      image: "🔌",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="products" className="section-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-display text-gray-900 mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-gray-600 text-lg font-body font-medium">
            Explore our wide range of refurbished devices and accessories
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                className="card group cursor-pointer border-2 border-transparent hover:border-cyan-300"
                variants={itemVariants}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
              >
                {/* Image/Icon Area */}
                <div
                  className={`bg-gradient-to-br ${product.color} h-56 flex items-center justify-center text-7xl relative overflow-hidden group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300`}
                >
                  <motion.div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span>{product.image}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-heading text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-base leading-relaxed font-body">
                    {product.description}
                  </p>

                  {/* Inquire Button */}
                  <motion.a
                    href="https://wa.me/919399127741?text=Hello%20I%20want%20to%20inquire%20about%20your%20laptops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg shadow-md flex items-center justify-center gap-2 text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle size={18} />
                    Inquire Now
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-gray-50 rounded-3xl p-8 md:p-12 text-center border-2 border-cyan-200 glow-cyan"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-3xl font-display text-gray-900 mb-3">
            Need Something Specific?
          </h3>
          <p className="text-gray-700 mb-8 text-lg font-body font-medium">
            We have a large inventory of devices. If you don't see what you're
            looking for, contact us directly!
          </p>
          <motion.a
            href="https://wa.me/919399127741?text=Hello%20I%20want%20to%20inquire%20about%20your%20laptops"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg shadow-md inline-flex items-center gap-2 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={22} />
            Contact Us on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
