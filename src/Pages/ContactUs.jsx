import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-linear-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">
            We’re here to help you. Feel free to reach out for any medical
            appointment related queries.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions about doctors, appointments, or bookings? Our support
            team is always ready to assist you.
          </p>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">+880 1234 567 890</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">support@medicare.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-gray-600">
                123 Healthcare Road, Dhanmondi, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
