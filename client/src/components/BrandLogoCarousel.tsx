const brandLogoModules = import.meta.glob("../assets/brands/*.png", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const brandNameOverrides: Record<string, string> = {
  "abb": "ABB",
  "c&s": "C&S",
  "invt": "INVT",
  "kei": "KEI",
  "lk": "Lauritz Knudsen",
  "pf": "Pepperl+Fuchs",
  "rr": "RR Kabel",
};

function formatBrandName(path: string) {
  const filename = path.split("/").pop()?.replace(".png", "") ?? "brand";
  const normalized = filename.toLowerCase();

  if (brandNameOverrides[normalized]) {
    return brandNameOverrides[normalized];
  }

  return filename
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export const BRAND_LOGOS = Object.entries(brandLogoModules)
  .map(([path, src]) => ({
    name: formatBrandName(path),
    src,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

type BrandLogoCarouselProps = {
  className?: string;
  rows?: 1 | 2;
  cardClassName?: string;
};

export default function BrandLogoCarousel({
  className = "",
  rows = 2,
  cardClassName = "",
}: BrandLogoCarouselProps) {
  const rowConfigs = rows === 1
    ? [{ direction: "normal", duration: "34s" }]
    : [
        { direction: "normal", duration: "40s" },
        { direction: "reverse", duration: "48s" },
      ];

  return (
    <div className={`space-y-5 md:space-y-7 overflow-hidden ${className}`}>
      {rowConfigs.map((row, rowIndex) => {
        const logos = rowIndex % 2 === 0 ? BRAND_LOGOS : [...BRAND_LOGOS].reverse();

        return (
          <div key={rowIndex} className="relative overflow-hidden">
            <div
              className="flex w-max gap-4 md:gap-6"
              style={{
                animation: `heroMarquee ${row.duration} linear infinite`,
                animationDirection: row.direction,
              }}
            >
              {[0, 1].map((setIndex) => (
                <div key={setIndex} className="flex shrink-0 gap-4 md:gap-6">
                  {logos.map((brand) => (
                    <div
                      key={`${brand.name}-${setIndex}`}
                      className={`flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-sm md:h-28 md:w-48 ${cardClassName}`}
                    >
                      <img
                        src={brand.src}
                        alt={`${brand.name} authorized dealer supplier logo in Vapi`}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
