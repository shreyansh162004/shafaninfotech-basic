import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Mail,
  Clock,
} from "lucide-react";
import shafahnLogo from "../assets/shafan logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={shafahnLogo}
                alt="Shafan Infotech"
                className="h-14 w-14 object-contain rounded-full shadow-lg glow-cyan"
              />
              <span className="font-display text-xl bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Shafan Infotech
              </span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed font-body">
              Your trusted source for quality refurbished laptops and computing
              devices with excellent warranty support.
            </p>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-heading mb-6 text-cyan-400">
              Contact
            </h4>
            <div className="space-y-4">
              <motion.a
                href="tel:9399127741"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-300 transition-colors group"
                whileHover={{ x: 4 }}
              >
                <Phone
                  size={20}
                  className="text-cyan-500 group-hover:text-cyan-300"
                />
                <span className="font-medium">9399127741</span>
              </motion.a>
              <motion.a
                href="https://wa.me/919399127741"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-300 transition-colors group"
                whileHover={{ x: 4 }}
              >
                <MessageCircle
                  size={20}
                  className="text-green-500 group-hover:text-green-300"
                />
                <span className="font-medium">WhatsApp</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/sf.infotech_jabalpur/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-pink-300 transition-colors group"
                whileHover={{ x: 4 }}
              >
                <Instagram
                  size={20}
                  className="text-pink-500 group-hover:text-pink-300"
                />
                <span className="font-medium">Instagram</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Location Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-heading mb-6 text-cyan-400">
              Location
            </h4>
            <motion.a
              href="https://goo.gl/maps/shafan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-300 transition-colors flex gap-3 group"
              whileHover={{ x: 4 }}
            >
              <MapPin
                size={20}
                className="flex-shrink-0 text-cyan-500 group-hover:text-cyan-300 mt-0.5"
              />
              <div className="text-base leading-relaxed">
                <p className="font-semibold text-white">Shafan Infotech</p>
                <p className="text-gray-400">1st Floor, Old Bus Stand</p>
                <p className="text-gray-400">Teen Patti Chowk, Wright Town</p>
                <p className="text-gray-400">Jabalpur, MP 482001</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Business Hours Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-heading mb-6 text-cyan-400">
              Business Hours
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <Clock
                  size={20}
                  className="flex-shrink-0 text-cyan-500 mt-0.5"
                />
                <div className="text-base">
                  <p className="font-semibold text-white">Monday - Saturday</p>
                  <p className="text-gray-400">10:00 AM - 7:00 PM</p>
                </div>
              </div>
              <p className="ml-8 text-gray-400">Sunday: Closed</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-12"></div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p className="text-gray-400 text-base font-body">
            © {currentYear} Shafan Infotech. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mt-8 md:mt-0">
            <motion.a
              href="https://wa.me/919399127741"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-green-500/10"
              aria-label="WhatsApp"
              whileHover={{ scale: 1.1 }}
            >
              <MessageCircle size={22} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/sf.infotech_jabalpur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors p-2 rounded-lg hover:bg-pink-500/10"
              aria-label="Instagram"
              whileHover={{ scale: 1.1 }}
            >
              <Instagram size={22} />
            </motion.a>
            <motion.a
              href="tel:9399127741"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
              aria-label="Phone"
              whileHover={{ scale: 1.1 }}
            >
              <Phone size={22} />
            </motion.a>
            <motion.a
              href="https://goo.gl/maps/shafan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
              aria-label="Location"
              whileHover={{ scale: 1.1 }}
            >
              <MapPin size={22} />
            </motion.a>
          </div>
        </motion.div>

        {/* CTA Section Above Footer */}
      </div>

      {/* Floating CTA */}
      <motion.div
        className="border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">
              Ready to Find Your Perfect Laptop?
            </h3>
            <p className="text-green-100 mb-6">
              Get in touch with us today for the best deals on refurbished
              devices
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919399127741?text=Hello%20I%20want%20to%20inquire%20about%20your%20laptops"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle size={20} />
                Message on WhatsApp
              </a>
              <a
                href="tel:9399127741"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
