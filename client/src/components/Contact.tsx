import { COMPANY_INFO } from "@/const";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${COMPANY_INFO.contact.email}?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-padding bg-[#f8fafc]">
      <div className="container">
        <div className="max-w-2xl mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#000080] mb-4">
            Get in <span className="text-[#00a896]">Touch</span>
          </h2>
          <p className="text-lg text-[#475569]">
            Have questions? Our team is ready to assist you. Reach out through any channel that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-left">
            <div>
              <h3 className="text-2xl font-bold text-[#000080] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#00a896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#000080]">Phone</p>
                    <a href={`tel:${COMPANY_INFO.contact.primary}`} className="text-[#475569] hover:text-[#00a896] transition-colors">
                      {COMPANY_INFO.contact.primary}
                    </a>
                    <br />
                    <a href={`tel:${COMPANY_INFO.contact.secondary}`} className="text-[#475569] hover:text-[#00a896] transition-colors">
                      {COMPANY_INFO.contact.secondary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#00a896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#000080]">Email</p>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#475569] hover:text-[#00a896] transition-colors">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#00a896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#000080]">Address</p>
                    <p className="text-[#475569]">
                      {COMPANY_INFO.address.street}
                      <br />
                      {COMPANY_INFO.address.area}
                      <br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                      <br />
                      {COMPANY_INFO.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-[#00a896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#000080]">WhatsApp</p>
                    <a
                      href={`https://wa.me/917383095063`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#475569] hover:text-[#00a896] transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* GSTIN */}
            <div className="p-6 bg-white rounded-lg border border-[#cbd5e1]">
              <p className="text-sm text-[#475569] mb-2">GST Registration Number</p>
              <p className="text-xl font-bold text-[#000080]">{COMPANY_INFO.gstin}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg border border-[#cbd5e1] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#000080] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-[#cbd5e1] rounded-md focus:outline-none focus:border-[#00a896] focus:ring-2 focus:ring-[#00a896] focus:ring-opacity-20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#000080] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-[#cbd5e1] rounded-md focus:outline-none focus:border-[#00a896] focus:ring-2 focus:ring-[#00a896] focus:ring-opacity-20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#000080] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-[#cbd5e1] rounded-md focus:outline-none focus:border-[#00a896] focus:ring-2 focus:ring-[#00a896] focus:ring-opacity-20 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#000080] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 border border-[#cbd5e1] rounded-md focus:outline-none focus:border-[#00a896] focus:ring-2 focus:ring-[#00a896] focus:ring-opacity-20 transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#000080] text-white font-semibold rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
