import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Instagram } from "lucide-react";
import shafahnLogo from "../assets/shafan logo.jpg";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={item} className="mb-8">
          <div className="w-40 h-40 mx-auto shadow-2xl mb-6 flex items-center justify-center rounded-full overflow-hidden border-4 border-cyan-500/30 glow-cyan-lg">
            <img
              src={shafahnLogo}
              alt="Shafan Infotech"
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-display text-white mb-4 leading-tight"
        >
          Shafan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
            Infotech
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-2xl md:text-3xl font-accent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 font-semibold"
        >
          Best Deals on Refurbished Laptops
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-body"
        >
          Premium quality refurbished laptops at affordable prices. We provide
          certified, tested devices with warranty support & expert service.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 flex-wrap"
        >
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/919399127741?text=Hello%20I%20want%20to%20inquire%20about%20your%20laptops"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={22} />
            Inquire on WhatsApp
          </motion.a>

          {/* Call Button */}
          <motion.a
            href="tel:9399127741"
            className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 text-lg glow-cyan"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={22} />
            Call Now
          </motion.a>

          {/* View Location Button */}
          <motion.a
            href="https://www.google.com/maps/dir//Shafan+infotech,+5W7J%2BP88,+Ma+shakti+complex,mlb+road,old+main+bus+stand,teen+patti,+bhattiya+tiyre,+near+dwarka+hottel,+Wright+Town,+Jabalpur,+Madhya+Pradesh+482002/@23.1756951,79.9687529,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3981afb7085e05a5:0xc4aea87fa0c507dd!2m2!1d79.9308355!2d23.1642896?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 flex items-center justify-center gap-2 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin size={22} />
            View Location
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={item}
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-cyan-400/50">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
