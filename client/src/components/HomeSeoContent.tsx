import { Link } from "wouter";
import { AUTHORITY_BRANDS, RESOURCE_GUIDES, SERVICE_LOCATIONS } from "@/lib/seoContent";
import { PRODUCT_CATEGORIES } from "@/const";

const industryGroups = [
  "chemical and pharmaceutical plants",
  "textile and packaging units",
  "engineering workshops",
  "OEM machine builders",
  "panel builders and electrical contractors",
  "warehouse and utility maintenance teams",
];

export default function HomeSeoContent() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="max-w-5xl">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00a896]">SEO Resource</p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
            Industrial Electrical & Automation Supplier in Vapi, Gujarat
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            JK Electricals is a Vapi-based industrial electrical and automation supplier serving factories, contractors,
            procurement teams, panel builders, OEMs, and maintenance departments across Vapi, Silvassa, Daman, Sarigam,
            Valsad, and South Gujarat. The business supports industrial buyers who need genuine switchgear, automation
            products, control panel components, industrial cables, electrical distribution products, measurement devices,
            motors, lighting, fans, heaters, and process control products from trusted brands.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <article className="space-y-8 text-slate-600">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">Complete industrial electrical supply support</h3>
              <p className="mt-4 leading-8">
                Industrial procurement is rarely limited to one product. A plant may need MCCBs for a distribution panel, VFD
                drives for a pump or fan application, proximity sensors for a packaging line, temperature controllers for a
                heater or oven, SMPS units for control circuits, and cables for a machine upgrade in the same purchase cycle.
                JK Electricals supports this kind of multi-category buying by keeping the website structured around product
                categories, brands, locations, and application-focused resources. This helps buyers quickly move from a search
                such as electrical supplier Vapi, switchgear supplier Vapi, PLC supplier Vapi, or VFD supplier Vapi into the
                right inquiry path.
              </p>
              <p className="mt-4 leading-8">
                The company supplies products for power distribution, machine control, panel assembly, industrial automation,
                preventive maintenance, plant expansion, and breakdown replacement. Buyers can inquire about industrial cables,
                distribution boards, switchgear, panel accessories, automation systems, process controllers, industrial sensors,
                heavy duty motors, electrical measurement products, industrial lighting, industrial fans, and industrial
                heaters. These categories are relevant for new projects as well as ongoing maintenance inside manufacturing
                facilities that cannot afford long downtime.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">Automation, PLC, VFD, sensors, and process control</h3>
              <p className="mt-4 leading-8">
                Modern factories in Vapi and nearby industrial areas increasingly need automation products in addition to basic
                electrical material. PLC systems, HMI interfaces, SCADA products, VFD drives, sensors, relays, timers, process
                controllers, PID temperature controllers, indicators, counters, and panel accessories all work together in a
                reliable automation system. JK Electricals positions automation as a core part of the business, not as a side
                category. That matters for customers searching for an industrial automation supplier in Vapi or a PLC supplier
                in Vapi who can understand the relationship between control hardware and electrical protection.
              </p>
              <p className="mt-4 leading-8">
                VFD drives are commonly requested for pumps, fans, compressors, conveyors, and motor speed control. PLC systems
                are used in machine sequencing, process logic, packaging lines, utility automation, and factory upgrades.
                Industrial sensors support detection, counting, positioning, level monitoring, temperature sensing, and safety
                related machine feedback. Process controllers support heating, cooling, humidity, pressure, timing, and
                measurement applications. Buyers can use the resource pages for PLC selection, VFD buying, sensor selection,
                MCCB selection, and temperature controller planning before requesting a quote.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">Switchgear, protection, and electrical distribution</h3>
              <p className="mt-4 leading-8">
                Switchgear and electrical distribution products are the foundation of safe industrial power systems. MCBs,
                MCCBs, RCCBs, MPCBs, contactors, overload relays, control relays, fuses, capacitors, isolators, distribution
                boards, enclosures, panel accessories, and metering products help protect equipment and people. The correct
                selection depends on load current, breaking capacity, fault level, duty cycle, upstream and downstream
                coordination, enclosure conditions, and the kind of machinery or utility being protected.
              </p>
              <p className="mt-4 leading-8">
                JK Electricals supports buyers who need switchgear supplier Vapi, Schneider dealer Vapi, Siemens dealer Vapi,
                ABB switchgear inquiry support, or Legrand distribution products. Purchase teams can share BOQs, panel
                schedules, existing model numbers, photos, ratings, and quantity requirements. This reduces the chance of
                mismatch and speeds up quotation preparation for maintenance or project procurement.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">Brands supplied for industrial buyers</h3>
              <p className="mt-4 leading-8">
                Industrial buyers often search by brand because they need compatibility, warranty confidence, or standardization
                across existing plant systems. JK Electricals supports inquiries for Siemens, Schneider Electric, ABB, Delta,
                Mitsubishi, Omron, Polycab, KEI, Legrand, Autonics, Philips, and other trusted industrial brands. Brand-focused
                pages help customers understand which product families are relevant, while category pages organize the same
                products by application and technical requirement.
              </p>
              <p className="mt-4 leading-8">
                For cable procurement, Polycab, KEI, and RR Kabel are commonly requested for power, control, flexible,
                instrumentation, and industrial wiring applications. For automation, Siemens, Delta, Mitsubishi, Omron, and
                Autonics are relevant for PLCs, drives, sensors, controllers, timers, relays, and interfaces. For switchgear and
                distribution, Siemens, Schneider Electric, ABB, L&T, Legrand, and similar brands are frequently compared by
                buyers who need dependable protection and panel compatibility.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">Service areas across South Gujarat</h3>
              <p className="mt-4 leading-8">
                JK Electricals serves Vapi and nearby industrial hubs including Silvassa, Daman, Sarigam, Valsad, and South
                Gujarat. These locations include factories in chemical, pharma, textile, packaging, engineering, plastic,
                infrastructure, machine building, and process manufacturing sectors. Local availability and quick communication
                are important because downtime, delayed maintenance, and incorrect component selection can affect production.
              </p>
              <p className="mt-4 leading-8">
                Buyers from these areas can use the website to move from location-specific pages into product categories and
                brand pages. A maintenance engineer in Daman may begin with industrial sensor supplier Daman, then visit the
                industrial sensors page and Omron or Autonics brand page. A purchase manager in Silvassa may start with
                electrical supplier Silvassa, then compare automation systems, switchgear, industrial cables, or panel
                accessories. This internal linking structure helps both users and search engines understand the full service
                coverage of JK Electricals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">Industries served by JK Electricals</h3>
              <p className="mt-4 leading-8">
                JK Electricals supports a wide range of industrial customers because electrical and automation requirements are
                common across almost every manufacturing environment. Chemical and pharmaceutical plants often need dependable
                process controllers, sensors, MCCBs, flame-safe planning, control panel accessories, cable support, meters, and
                utility distribution products. Textile and packaging facilities often require VFD drives, PLC control, sensors,
                motor protection, relays, timers, lighting, fans, and panel spares for machines that run continuously. Engineering
                and fabrication units need switchgear, cables, motors, measurement products, distribution boards, and safe power
                control for machinery, welding equipment, compressors, cranes, and workshop utilities.
              </p>
              <p className="mt-4 leading-8">
                OEMs and machine builders need a supplier who can understand repeat requirements, model consistency, panel
                compatibility, and availability of brands such as Siemens, Schneider Electric, ABB, Delta, Mitsubishi, Omron,
                Autonics, Polycab, KEI, Legrand, Philips, and related industrial brands. Contractors and panel builders need
                dependable quotation support because every project has a technical schedule, brand preference, and deadline.
                Maintenance teams need fast clarity because a failed VFD, sensor, MCCB, relay, SMPS, contactor, or temperature
                controller can stop a machine or delay production. This mix of requirements is why JK Electricals is structured
                as an industrial electrical and automation supplier rather than a basic retail electrical shop.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">Why local industrial supply matters</h3>
              <p className="mt-4 leading-8">
                Industrial buyers in Vapi, Silvassa, Daman, Sarigam, and Valsad usually work under time pressure. A plant may
                require a replacement MCCB before the next shift, a VFD quote before a pump upgrade, a proximity sensor for a
                production line, or cables and panel accessories for a contractor deadline. Local sourcing reduces the time spent
                searching across unrelated suppliers and gives the buyer a clearer path from requirement to quote. It also helps
                when the buyer needs to compare product options by brand, rating, application, or availability.
              </p>
              <p className="mt-4 leading-8">
                JK Electricals strengthens this local supply advantage by organizing the website around real search patterns:
                electrical supplier Vapi, industrial electrical supplier Vapi, industrial automation supplier Vapi, switchgear
                supplier Vapi, PLC supplier Vapi, VFD supplier Vapi, industrial sensor supplier Vapi, process controller supplier
                Vapi, Siemens dealer Vapi, and Schneider dealer Vapi. These keywords are not only search terms; they represent
                practical procurement needs. Someone searching those terms is usually trying to source material, compare
                availability, request a quote, or identify a supplier who understands industrial applications.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">Maintenance and project procurement use cases</h3>
              <p className="mt-4 leading-8">
                Maintenance procurement focuses on fast replacement, correct matching, and reliable product quality. A buyer may
                need the same model as an installed component, an equivalent brand option, or a higher-rated product that fits
                the same panel. Project procurement is different: the buyer may need a full BOQ, multiple brands, technical
                clarification, and staged supply for panels, machines, utilities, lighting, or automation systems. JK Electricals
                supports both use cases by encouraging buyers to share technical details, model references, panel photos, and
                application information before finalizing an inquiry.
              </p>
              <p className="mt-4 leading-8">
                For a control panel project, a buyer may need PLC hardware, HMI units, SMPS, relays, terminal blocks, push
                buttons, indicators, fuses, contactors, MCBs, MCCBs, wiring, sensors, and meters. For a plant utility project,
                the same buyer may need distribution boards, cables, lighting, fans, motors, and protection products. For a
                process machine, the requirement may include temperature controllers, heaters, thermocouples, SSRs, timers,
                counters, and safety protection. The more complete the inquiry, the easier it becomes to prepare a useful quote.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">Trust, brand quality, and genuine products</h3>
              <p className="mt-4 leading-8">
                Industrial electrical products affect safety, uptime, machine reliability, and energy performance. Genuine
                products matter because counterfeit, mismatched, or poor-quality components can create overheating, nuisance
                tripping, control failure, inaccurate measurement, communication issues, or unexpected downtime. Buyers should
                check product labels, ratings, brand consistency, warranty information, and supplier credibility before placing
                repeat or bulk orders. JK Electricals highlights trusted brands and product categories so buyers can make more
                informed procurement decisions.
              </p>
              <p className="mt-4 leading-8">
                The website structure also supports E-E-A-T signals for search engines and AI search systems. It explains what
                the company supplies, where it serves, which brands are relevant, which product categories are available, and how
                buyers can request quotations. Category pages, brand pages, location pages, resource guides, contact details,
                GST information, and internal links all help search engines understand JK Electricals as a focused industrial
                electrical and automation supplier for Vapi and South Gujarat.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">How to request the right quote</h3>
              <p className="mt-4 leading-8">
                For faster quotations, customers should share the product category, brand preference, model number, rating,
                quantity, application, urgency, and available photos of existing equipment or panel labels. For PLC, VFD, sensor,
                and controller inquiries, application details matter as much as the model number. For switchgear and distribution
                inquiries, current rating, breaking capacity, pole configuration, enclosure needs, and panel context are useful.
                For cables, buyers should share cable type, core count, conductor material, size, insulation, armouring, voltage
                grade, and approximate length.
              </p>
              <p className="mt-4 leading-8">
                JK Electricals provides call, WhatsApp, email, and request quote options so industrial buyers can choose the most
                convenient inquiry path. The sticky WhatsApp button supports urgent communication, while the contact form is
                useful for BOQ-based inquiries and project requirements. The goal is to help factories source genuine material,
                reduce downtime, and keep procurement decisions aligned with technical needs.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">Product Categories</h3>
              <div className="mt-5 grid gap-3 text-sm font-semibold">
                {PRODUCT_CATEGORIES.map((category) => (
                  <Link key={category.slug} href={`/products/${category.slug}`} className="text-slate-700 hover:text-[#00a896]">
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">Brand Pages</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-semibold">
                {AUTHORITY_BRANDS.slice(0, 10).map((brand) => (
                  <Link key={brand.slug} href={`/brands/${brand.slug}`} className="text-slate-700 hover:text-[#00a896]">
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">Service Areas</h3>
              <div className="mt-5 grid gap-3 text-sm font-semibold">
                {SERVICE_LOCATIONS.slice(0, 5).map((location) => (
                  <Link key={location.slug} href={`/electrical-supplier-${location.slug}`} className="text-slate-700 hover:text-[#00a896]">
                    Electrical Supplier {location.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">Technical Resources</h3>
              <div className="mt-5 grid gap-3 text-sm font-semibold">
                {RESOURCE_GUIDES.map((guide) => (
                  <Link key={guide.slug} href={`/resources/${guide.slug}`} className="text-slate-700 hover:text-[#00a896]">
                    {guide.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 rounded border border-[#00a896]/25 bg-[#00a896]/5 p-6 md:p-8">
          <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">Request industrial electrical supply support</h3>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            Contact JK Electricals for switchgear, PLC, VFD, sensors, process controllers, cables, motors, lighting,
            distribution boards, panel accessories, industrial fans, heaters, and electrical measurement products.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+917383095063" className="rounded bg-slate-900 px-5 py-3 text-sm font-black uppercase tracking-widest text-white">
              Call Now
            </a>
            <a href="https://wa.me/917383095063" className="rounded bg-[#00a896] px-5 py-3 text-sm font-black uppercase tracking-widest text-white">
              WhatsApp Quote
            </a>
            <Link href="/contact" className="rounded border border-slate-300 px-5 py-3 text-sm font-black uppercase tracking-widest text-slate-900">
              Request Quote Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
