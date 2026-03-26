import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PlayCircle,
  Instagram,
  MapPin,
  Laptop,
  Monitor,
  ThumbsUp,
  Package,
  Gift,
} from "lucide-react";

const InstagramSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // Instagram reels data with links and professional icons
  const reels = [
    {
      id: 1,
      title: "Our Store Location",
      icon: MapPin,
      duration: "0:45",
      link: "https://www.instagram.com/reel/CzeeKMlBRxh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      bgGradient: "from-amber-100 to-orange-200",
      accentColor: "bg-amber-300",
    },
    {
      id: 2,
      title: "About Our Laptops",
      icon: Laptop,
      duration: "1:20",
      link: "https://www.instagram.com/reel/C8MA2WlRfQU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      bgGradient: "from-slate-200 to-slate-300",
      accentColor: "bg-slate-400",
    },
    {
      id: 3,
      title: "About Our Desktops",
      icon: Monitor,
      duration: "2:15",
      link: "https://www.instagram.com/reel/DSXu3E3ksIp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      bgGradient: "from-gray-300 to-gray-400",
      accentColor: "bg-gray-500",
    },
    {
      id: 4,
      title: "Customer Testimonials",
      icon: ThumbsUp,
      duration: "1:50",
      link: "https://www.instagram.com/reel/C8MA2WlRfQU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      bgGradient: "from-teal-100 to-cyan-200",
      accentColor: "bg-teal-300",
    },
    {
      id: 5,
      title: "New Stock Arrival",
      icon: Package,
      duration: "0:55",
      link: "https://www.instagram.com/reel/C8MA2WlRfQU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      bgGradient: "from-stone-200 to-stone-300",
      accentColor: "bg-stone-400",
    },
    {
      id: 6,
      title: "Special Offers",
      icon: Gift,
      duration: "0:30",
      link: "https://www.instagram.com/reel/C8MA2WlRfQU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      bgGradient: "from-rose-100 to-pink-200",
      accentColor: "bg-rose-300",
    },
  ];

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="section bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="text-pink-600" size={32} />
            <h2 className="text-3xl md:text-4xl font-display text-gray-900">
              Follow Us on <span className="text-pink-600">Instagram</span>
            </h2>
          </div>
          <p className="text-gray-600 text-lg font-body">
            Check out our latest products, unboxings, and customer stories
          </p>
        </motion.div>

        {/* Reels Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reels.map((reel) => {
            const IconComponent = reel.icon;
            return (
              <motion.a
                key={reel.id}
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer rounded-lg overflow-hidden block hover:transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl"
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(reel.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Thumbnail with Title - Instagram Style */}
                <div
                  className={`relative w-full aspect-video bg-gradient-to-br ${reel.bgGradient} flex flex-col items-center justify-center overflow-hidden group`}
                >
                  {/* Background pattern effect */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0 bg-noise"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      }}
                    ></div>
                  </div>

                  {/* Professional Icon - Large and centered */}
                  <motion.div
                    className="mb-4 p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent
                      size={64}
                      className="text-gray-700 drop-shadow-lg"
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Title Overlay at Bottom - Instagram Style */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-8">
                    <p className="text-white text-sm font-bold line-clamp-2 text-center leading-tight">
                      {reel.title}
                    </p>
                  </div>

                  {/* Overlay on Hover with Play Button */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === reel.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <PlayCircle
                        className="text-white drop-shadow-lg"
                        size={56}
                      />
                      <span className="text-white text-xs font-semibold">
                        PLAY VIDEO
                      </span>
                    </div>
                  </motion.div>

                  {/* Duration Badge - Top Right like Instagram */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2.5 py-1 rounded-full font-semibold backdrop-blur-sm">
                    {reel.duration}
                  </div>

                  {/* Instagram Reel Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold text-[10px] backdrop-blur-sm">
                    REEL
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* View More Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Want to see more? Visit our Instagram profile for daily updates and
            exclusive content!
          </p>
          <a
            href="https://www.instagram.com/sf.infotech_jabalpur/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white hover:from-purple-700 hover:via-pink-700 hover:to-red-600 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <Instagram size={20} />
            View More on Instagram
          </a>
        </motion.div>

        {/* Instagram Embed Placeholder */}
        <motion.div
          className="mt-12 bg-white rounded-2xl p-8 border-2 border-pink-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-gray-600 mb-4">
            Follow us on Instagram for the latest product updates, deals, and
            customer stories!
          </p>
          <p className="text-sm text-gray-500">@sf.infotech_jabalpur</p>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
