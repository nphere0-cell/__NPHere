// src/App.jsx
import React from "react";
import { motion } from "framer-motion";

// ===== Navbar =====
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">MyBusiness</h1>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {["Home", "About", "Services", "Features", "Contact"].map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <button className="md:hidden px-3 py-2 border rounded-lg">Menu</button>
      </div>
    </nav>
  );
}

// ===== Hero Section =====
function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6"
      >
        Grow Your Business With Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl max-w-2xl mb-8"
      >
        We provide premium solutions to take your business to the next level.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-white text-indigo-600 px-6 py-3 rounded-full shadow-lg font-semibold"
      >
        Get Started
      </motion.button>
    </section>
  );
}

// ===== About Section =====
function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://via.placeholder.com/500"
          alt="About"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-2xl shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Our Company
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to delivering the best business solutions with
            modern design, powerful features, and premium support to help our
            clients achieve success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ===== Services Section =====
function Services() {
  const services = [
    { title: "Web Development", desc: "Modern and scalable web solutions." },
    { title: "Digital Marketing", desc: "Grow your online presence." },
    { title: "Business Consulting", desc: "Expert advice for your success." },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Features Section =====
function Features() {
  const features = [
    "Premium Quality Design",
    "Smooth Animations",
    "Responsive Layout",
    "Fast Performance",
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-lg font-medium text-gray-700">{f}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Contact Section =====
function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl border shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-4 rounded-xl border shadow-sm focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}

// ===== Footer =====
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <p>© 2025 MyBusiness. All rights reserved.</p>
        <div className="flex gap-4">
          {["Facebook", "Twitter", "LinkedIn"].map((s, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-white transition"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ===== Main App =====
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
