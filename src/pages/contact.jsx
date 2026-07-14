import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  // Animation Variants
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const slideLeft = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideRight = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-5xl font-bold text-gray-800">
              Contact Us
            </h1>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We'd love to hear from you. Whether you're planning a wedding,
              birthday, corporate event, or any special occasion, feel free to
              reach out.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Card */}
            <motion.div
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Get in Touch
              </h2>

              <motion.div
                className="space-y-8"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Phone */}
                <motion.div
                  variants={item}
                  className="flex items-center gap-5"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="bg-red-100 p-4 rounded-full"
                  >
                    <FaPhoneAlt className="text-red-600 text-xl" />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">
                      +977 9808244699
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={item}
                  className="flex items-center gap-5"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="bg-red-100 p-4 rounded-full"
                  >
                    <FaEnvelope className="text-red-600 text-xl" />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600 break-all">
                      nepalfloweranddecor7@gmail.com
                    </p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  variants={item}
                  className="flex items-center gap-5"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="bg-red-100 p-4 rounded-full"
                  >
                    <FaMapMarkerAlt className="text-red-600 text-xl" />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">
                      New Baneshwor <br />
                      Kathmandu, Nepal
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Send a Message
              </h2>

              <motion.form
                className="space-y-6"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={item}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition resize-none"
                  ></textarea>
                </motion.div>

                <motion.div variants={item}>
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#b91c1c",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-red-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md"
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}