import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/const";
import mailIcon from "../assets/mail.png";
import whatsappIcon from "../assets/whatsaap.png";

export default function WhatsappBubble() {
  // Format WhatsApp number: remove spaces and +
  const waNumber = COMPANY_INFO.contact.primary.replace(/[^0-9]/g, "");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        href={`mailto:${COMPANY_INFO.contact.email}`}
        className="rounded-full shadow-lg flex items-center justify-center group relative"
        aria-label="Send Email"
      >
        <img src={mailIcon} alt="Email" className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-xl rounded-full" />
        <span className="absolute right-[115%] bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-2xl">
          Email Us
        </span>
      </motion.a>

      <motion.a
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15, y: 0 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full shadow-xl flex items-center justify-center group relative"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-xl rounded-full relative z-10" />
        <span className="absolute right-[115%] bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-2xl">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
