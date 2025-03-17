import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or backend API
    console.log("Form submitted:", { name, email, message });
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="text-center bg-amber-300 p-20">
      <h2 className="text-4xl font-bold text-black mb-6">Get in Touch</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-black mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full p-2 mb-4 border border-gray-400 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 mb-4 border border-gray-400 rounded-lg"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full p-2 mb-4 border border-gray-400 rounded-lg h-40"
            />
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
            >
              Send Message
            </button>
            {success && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-black mb-4">Contact Information</h3>
          <p className="text-lg font-medium text-black mb-2">
            <strong>Address:</strong> Kondi, NH 65, Solapur - Pune Hwy, near Hotel Sunil,
            Kondi, Solapur, Maharashtra 413255
          </p>
          <p className="text-lg font-medium text-black mb-2">
            <strong>Phone:</strong> +91 88885 18876
          </p>
          <p className="text-lg font-medium text-black mb-2">
          <strong>Owner:</strong> Vinay More
          
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook text-2xl text-blue-600" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram text-2xl text-pink-600" aria-hidden="true"></i>
            </a>
            <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter text-2xl text-blue-400" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
