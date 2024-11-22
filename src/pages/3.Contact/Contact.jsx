
import React, { useState } from "react";





const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Hero Section */}
      <div
        className="w-[calc(100vw-8px)] text-center py-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('./public/contactbg.webp')",
        }}
      >
        <p className="text-lg text-white mt-2 h-40"></p>
      </div>

      {/* Main Content */}
      <div className="bg-[url('https://mobilesolutions.pt/wp-content/uploads/2016/02/Silver-Blur-Background-Wallpaper.jpg')] w-[calc(100vw-8px)] flex justify-center">
        <div className="flex flex-wrap max-w-6xl  w-full mt-10 gap-8">
          {/* Left Section */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
            <p className="text-gray-600 mt-2">
              We’d love to hear from you! Whether you have questions, need to
              schedule an appointment, or require urgent care, our team is here
              to assist.
            </p>
            <ul className="text-gray-600 space-y-2 mt-2">
              <li>
                📍 <strong>Address:</strong> 1456 Pearl Avenue, Wellness Nagar, Mumbai
              </li>
              <li>
                📞 <strong>Phone:</strong> +91 98765-43210
              </li>
              <li>
                📧 <strong>Email:</strong> contact@trucaredental.in
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700">
                Office Hours
              </h3>
              <ul className="text-gray-600 space-y-2 mt-2">
                <li>
                  <strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM
                </li>
                <li>
                  <strong>Saturday:</strong> 10:00 AM - 2:00 PM
                </li>
                <li>
                  <strong>Sunday:</strong> Closed
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-gray-50 shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="flex-1 bg-white border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Name"
                  className="flex-1 bg-white border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full bg-white border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full bg-white border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-md hover:bg-indigo-700 transition"
              >
                Submit Button
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
