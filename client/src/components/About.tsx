import { motion } from "framer-motion";
import { COMPANY_INFO, stats } from "@/const";
import { ArrowRight, Building2, Mail, MapPin, Phone, ShieldCheck, UserRound } from "lucide-react";

type AboutVariant = "home" | "page";

type AboutProps = {
  variant?: AboutVariant;
};

const companyFacts = [
  {
    label: "Business",
    value: COMPANY_INFO.description,
    icon: Building2,
  },
  {
    label: "Location",
    value: `${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state}`,
    icon: MapPin,
  },
  {
    label: "Contact",
    value: COMPANY_INFO.contact.primary,
    icon: Phone,
  },
  {
    label: "GSTIN",
    value: COMPANY_INFO.gstin,
    icon: ShieldCheck,
  },
];

const journeySteps = [
  {
    title: "Started with a local need",
    description:
      "JK Electricals was built to make industrial procurement faster, more dependable, and easier to support for businesses in and around Vapi.",
  },
  {
    title: "Expanded into a broader catalog",
    description:
      "The product offering grew across cables, switchgear, automation, lighting, measurement, and control solutions to support more industrial use cases.",
  },
  {
    title: "Focused on trust and availability",
    description:
      "The company continues to prioritise genuine parts, quick response, and practical guidance so project teams can stay on schedule.",
  },
];

function CompanyFactsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {companyFacts.map((fact) => {
        const Icon = fact.icon;

        return (
          <div key={fact.label} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[#00a896] shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{fact.label}</p>
                <p className="text-sm font-semibold text-slate-900 mt-1 leading-snug">{fact.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function HomeAbout() {
  return (
    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-100 relative group shadow-2xl shadow-slate-900/5">
            <img
              src="src/assets/infos.png"
              alt="JK Electricals industrial supply overview"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000613]/75 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-[#00a896] text-[10px] font-black uppercase tracking-[0.3em] mb-3">Quick company view</p>
              <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">Dependable supply. Local support.</h3>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 w-36 h-36 bg-[#00a896]/10 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="space-y-8"
        >
          <div>
            <span className="text-[#00a896] text-xs font-semibold uppercase tracking-[0.28em] mb-3 inline-block">About JK Electricals</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-slate-900">
              Industrial electrical supply, <span className="text-[#00a896]">simplified</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              JK Electricals is an authorized distributor of industrial electrical goods based in Vapi, Gujarat. We help businesses source genuine components quickly, with practical support for day-to-day operations and project requirements.
            </p>
          </div>

          <CompanyFactsGrid />

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${COMPANY_INFO.contact.primary}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#000613] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Call Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-[#00a896] hover:text-[#00a896]"
            >
              <Mail className="w-4 h-4" />
              Email Enquiry
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PageAbout() {
  return (
    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00a896] text-xs font-semibold uppercase tracking-[0.28em] mb-3 inline-block">Our journey</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-slate-900">
              Built for industry, <span className="text-[#00a896]">grown on trust</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              The story of JK Electricals is one of solving practical industrial problems: finding the right products, keeping stock available, and supporting customers with clear communication and dependable service.
            </p>
          </motion.div>

          <div className="space-y-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00a896] text-white flex items-center justify-center font-black shrink-0">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-[#000613] p-6 md:p-8 text-white shadow-xl shadow-slate-900/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#00a896] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/55">Company at a glance</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-white/45 text-[10px] font-black uppercase tracking-[0.22em] mb-1">Address</p>
                <p className="text-sm leading-relaxed text-white/85">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.area}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                </p>
              </div>
              <div>
                <p className="text-white/45 text-[10px] font-black uppercase tracking-[0.22em] mb-1">Website</p>
                <p className="text-sm text-white/85 break-all">{COMPANY_INFO.contact.website}</p>
              </div>
              <div>
                <p className="text-white/45 text-[10px] font-black uppercase tracking-[0.22em] mb-1">Phone</p>
                <p className="text-sm text-white/85">{COMPANY_INFO.contact.primary}</p>
              </div>
              <div>
                <p className="text-white/45 text-[10px] font-black uppercase tracking-[0.22em] mb-1">Email</p>
                <p className="text-sm text-white/85 break-all">{COMPANY_INFO.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:sticky lg:top-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="rounded-[3rem] overflow-hidden border border-slate-100 bg-slate-50 shadow-2xl shadow-slate-900/5"
          >
            <div className="aspect-[4/5] relative">
              <img
                src={`https://i.pravatar.cc/800?u=${encodeURIComponent(COMPANY_INFO.contactPerson)}`}
                alt={COMPANY_INFO.contactPerson}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000613]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-[#00a896] text-[10px] font-black uppercase tracking-[0.3em] mb-2">Owner spotlight</p>
                <h3 className="text-2xl font-black tracking-tight">{COMPANY_INFO.contactPerson}</h3>
                <p className="text-sm text-white/75 mt-1">Owner & Managing Director</p>
              </div>
            </div>
          </motion.div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-[#00a896]">
                <UserRound className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Owner information</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              {COMPANY_INFO.contactPerson} leads JK Electricals with a focus on customer response, sourcing reliability, and support for industrial projects that need quick turnaround.
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#00a896] mt-0.5" />
                <a href={`tel:${COMPANY_INFO.contact.primary}`} className="hover:text-slate-900 transition-colors">
                  {COMPANY_INFO.contact.primary}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00a896] mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-slate-900 transition-colors break-all">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

          <CompanyFactsGrid />
        </div>
      </div>
    </div>
  );
}

export default function About({ variant = "home" }: AboutProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {variant === "home" ? <HomeAbout /> : <PageAbout />}
    </section>
  );
}
