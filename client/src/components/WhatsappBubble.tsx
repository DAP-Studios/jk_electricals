import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/const";
import mailIcon from "../assets/mail.png";
import whatsappIcon from "../assets/whatsaap.png";

export default function WhatsappBubble() {
  // Format WhatsApp number: remove spaces and +
  const waNumber = COMPANY_INFO.contact.primary.replace(/[^0-9]/g, "");

  return (
    <div className="fixed bottom-[clamp(1rem,4vw,1.5rem)] right-[clamp(1rem,4vw,1.5rem)] z-50 flex flex-col gap-[clamp(0.65rem,2vw,1rem)]">
      <motion.a
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        href={`mailto:${COMPANY_INFO.contact.email}`}
        className="rounded-full shadow-lg flex items-center justify-center group relative"
        aria-label="Send Email"
      >
        <img
          src={mailIcon}
          alt="Email"
          className="h-[clamp(2.75rem,10vw,3.5rem)] w-[clamp(2.75rem,10vw,3.5rem)] rounded-full object-contain drop-shadow-xl"
        />
        <span className="absolute right-[115%] rounded-xl border border-slate-700 bg-slate-900/90 px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.45rem,1.2vw,0.5rem)] text-[clamp(0.72rem,1vw,0.875rem)] font-semibold text-white opacity-0 shadow-2xl backdrop-blur-md transition-opacity duration-300 pointer-events-none whitespace-nowrap group-hover:opacity-100">
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
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="relative z-10 h-[clamp(2.75rem,10vw,3.5rem)] w-[clamp(2.75rem,10vw,3.5rem)] rounded-full object-contain drop-shadow-xl"
        />
        <span className="absolute right-[115%] rounded-xl border border-slate-700 bg-slate-900/90 px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.45rem,1.2vw,0.5rem)] text-[clamp(0.72rem,1vw,0.875rem)] font-semibold text-white opacity-0 shadow-2xl backdrop-blur-md transition-opacity duration-300 pointer-events-none whitespace-nowrap group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
