import { COMPANY_INFO } from "@/const";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact({ hideHeader = false }: { hideHeader?: boolean }) {
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
    <section id="contact" className="relative bg-[#f8fafc] pt-24 pb-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="block h-16 w-full md:h-28"
        >
          <path
            fill="#ffffff"
            d="M0,0H1440V58.7C1320,98,1200,128,1080,128C920,128,800,80,640,74.7C480,69,320,107,160,117.3C80,122.7,40,117.3,0,112V0Z"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        {!hideHeader && (
          <div className="max-w-3xl mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
              Get in <span className="text-[#00a896]">Touch</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
              Have questions? Our team is ready to assist you. Fill the quick form and we'll respond fast — or start a WhatsApp chat for instant help.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-left">
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#00a896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
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
                    <p className="font-semibold text-slate-900">Email</p>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#475569] hover:text-[#00a896] transition-colors">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#00a896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Address</p>
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
                    <p className="font-semibold text-slate-900">WhatsApp</p>
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
              <p className="text-xl font-bold text-slate-900">{COMPANY_INFO.gstin}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right">
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl border border-[#e6eef0] shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 rounded-lg border border-transparent bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#00a896] transition-all"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-4 top-2 text-sm text-slate-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all">Full name</label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 rounded-lg border border-transparent bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#00a896] transition-all"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-4 top-2 text-sm text-slate-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all">Email address</label>
                </div>

                <div className="relative md:col-span-2">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 rounded-lg border border-transparent bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#00a896] transition-all"
                    placeholder=" "
                  />
                  <label htmlFor="phone" className="absolute left-4 top-2 text-sm text-slate-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all">Phone number</label>
                </div>

                <div className="relative md:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="peer w-full px-4 py-3 rounded-lg border border-transparent bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#00a896] transition-all resize-none"
                    placeholder=" "
                  />
                  <label htmlFor="message" className="absolute left-4 top-2 text-sm text-slate-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all">Tell us about your requirement</label>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <button type="submit" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00a896] to-[#00d4aa] text-white font-extrabold rounded-lg shadow-lg hover:scale-[1.02] transition-transform">
                  Send Inquiry
                </button>
                <a href={`https://wa.me/917383095063`} target="_blank" rel="noreferrer" className="ml-2 inline-flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-lg text-slate-700 font-semibold hover:bg-slate-50">
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
