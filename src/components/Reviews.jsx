import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      city: "Jabalpur",
      rating: 5,
      text: "Excellent quality laptop at a very reasonable price. The team was very helpful and honest about the device condition. Highly recommended!",
      avatar: "👨‍💼",
    },
    {
      id: 2,
      name: "Priya Verma",
      city: "Indore",
      rating: 5,
      text: "Best deal on laptops I found! Great customer service and fast delivery. My Dell laptop works perfectly. Thank you, Shafan Infotech!",
      avatar: "👩‍💻",
    },
    {
      id: 3,
      name: "Aman Tiwari",
      city: "Bhopal",
      rating: 5,
      text: "Professional service from start to finish. The laptop is in excellent condition. I am very satisfied with the warranty support provided.",
      avatar: "👨‍🎓",
    },
    {
      id: 4,
      name: "Neha Gupta",
      city: "Jbalpur",
      rating: 5,
      text: "Great experience! Found the exact specs I needed at a fraction of the retail price. Will definitely recommend to my friends and family.",
      avatar: "👩‍💼",
    },
    {
      id: 5,
      name: "Vikram Singh",
      city: "Ujjain",
      rating: 5,
      text: "Superb after-sales support and genuine products. My HP laptop is running smoothly after 6 months. Keep up the good work!",
      avatar: "👨‍💻",
    },
  ];

  // Auto-scroll carousel
  useEffect(() => {
    if (!autoPlayEnabled) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [autoPlayEnabled, reviews.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    );
    setAutoPlayEnabled(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    setAutoPlayEnabled(false);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="section bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
            Customer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Reviews
            </span>
          </h2>
          <p className="text-gray-600 text-lg font-body">
            What our satisfied customers have to say
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          onMouseEnter={() => setAutoPlayEnabled(false)}
          onMouseLeave={() => setAutoPlayEnabled(true)}
        >
          {/* Carousel Container */}
          <div className="relative h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center max-w-2xl">
                  {/* Avatar and Stars */}
                  <div className="mb-6">
                    <div className="text-5xl mb-4">
                      {reviews[currentIndex].avatar}
                    </div>
                    <div className="flex justify-center mb-4">
                      {renderStars(reviews[currentIndex].rating)}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{reviews[currentIndex].text}"
                  </p>

                  {/* Reviewer Name and City */}
                  <div>
                    <p className="text-xl font-bold text-gray-900">
                      {reviews[currentIndex].name}
                    </p>
                    <p className="text-gray-600">
                      {reviews[currentIndex].city}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-600 hover:text-white text-gray-900 rounded-full p-2 transition-all shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-600 hover:text-white text-gray-900 rounded-full p-2 transition-all shadow-lg"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoPlayEnabled(false);
                }}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { label: "Happy Customers", value: "1000+" },
            { label: "Average Rating", value: "4.9★" },
            { label: "Returning Rate", value: "95%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="card p-6 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
            >
              <p className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
