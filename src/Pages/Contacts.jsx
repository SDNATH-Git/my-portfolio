import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Please fill all the fields.");
            return;
        }

        setStatus("Sending...");

        setTimeout(() => {
            setStatus("Thanks for your message! I will get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
        }, 1500);

        // TODO: Backend/API integration here
    };

    return (
        <section id="contacts" className="bg-gradient-to-r from-gray-900 to-gray-800 mx-5 lg:mx-10 py-12 px-6 rounded-2xl">
            <h2 className="text-2xl lg:text-4xl py-6 mb-3 text-center text-orange-500 font-bold  items-center gap-3">
                📞 Contact Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info & Address */}

                <div className="space-y-10 text-gray-100 ">


                    {/* Email, Phone, WhatsApp */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
                            <FaEnvelope className="text-orange-500 text-3xl" />
                            <a
                                href="mailto:sd.nath13158@gmail.com"
                                className="text-lg font-medium hover:underline"
                            >
                                sd.nath13158@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
                            <FaPhone className="text-green-600 text-3xl" />
                            <a
                                href="tel:+8801234567890"
                                className="text-lg font-medium hover:underline"
                            >
                                +880 1818970141
                            </a>
                        </div>
                        <div className="flex items-center gap-4 bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
                            <FaWhatsapp className="text-green-500 text-3xl" />
                            <a
                                href="https://wa.me/880 1818970141"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-medium hover:underline"
                            >
                                +880 1818970141
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-4 bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition">
                        <FaMapMarkerAlt className="text-orange-500 text-3xl" />
                        <div>
                            <h3 className="text-xl font-semibold">Address</h3>
                            <p className="text-gray-300">
                                123, Road koil, chattogram, Bangladesh - 1234
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-3xl font-bold mb-3 text-white">
                        Send a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
                        >
                            Send Message
                        </button>
                    </form>
                    {status && (
                        <p
                            className={`mt-4 text-center ${status.startsWith("Thanks") ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {status}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
