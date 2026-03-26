import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Cpu, Wrench, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Trusted Quality",
      description: "Every laptop is thoroughly tested and certified",
    },
    {
      icon: Cpu,
      title: "Latest Models",
      description: "Premium refurbished laptops from top brands",
    },
    {
      icon: Award,
      title: "Warranty Covered",
      description: "Comprehensive warranty on all devices",
    },
    {
      icon: Wrench,
      title: "Accessories Available",
      description: "Complete range of laptop accessories and upgrades",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="section-gradient">
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
            About <span className="text-gradient">Shafan Infotech</span>
          </h2>
          <p className="text-gray-600 text-lg font-body font-medium">
            Your trusted partner for affordable, quality refurbished laptops
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-3xl font-display text-gray-900 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg font-body">
              Shafan Infotech is a leading refurbished laptop seller based in
              Jabalpur, Madhya Pradesh. With years of experience in the tech
              industry, we specialize in providing certified, quality-tested
              laptops at unbeatable prices.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Our commitment is to make quality computing accessible to
              everyone. Every device in our inventory undergoes rigorous quality
              checks and comes with comprehensive warranty support.
            </p>
            <div className="space-y-3">
              <p className="flex items-start gap-3 text-gray-800 font-medium">
                <CheckCircle
                  className="text-cyan-600 flex-shrink-0 mt-1"
                  size={22}
                />
                <span>Trusted by thousands of satisfied customers</span>
              </p>
              <p className="flex items-start gap-3 text-gray-800 font-medium">
                <CheckCircle
                  className="text-cyan-600 flex-shrink-0 mt-1"
                  size={22}
                />
                <span>Best pricing in the region</span>
              </p>
              <p className="flex items-start gap-3 text-gray-800 font-medium">
                <CheckCircle
                  className="text-cyan-600 flex-shrink-0 mt-1"
                  size={22}
                />
                <span>Full warranty and after-sales support</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image Placeholder */}
          <motion.div
            className="bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 rounded-3xl aspect-square flex items-center justify-center shadow-2xl glow-cyan"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center text-white">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Cpu size={100} className="mx-auto mb-6" />
              </motion.div>
              <p className="text-3xl font-bold leading-tight">
                Premium
                <br />
                Refurbished
                <br />
                Laptops
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="card-accent p-8 text-center hover:border-cyan-400 group"
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  boxShadow: "0 20px 40px rgba(0, 188, 212, 0.15)",
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-base">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
