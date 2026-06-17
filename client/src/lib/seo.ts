import { COMPANY_INFO, PARTNER_BRANDS, PRODUCT_CATEGORIES } from "@/const";
import { ROUTES, SERVICE_AREAS, SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/site";

export type JsonLd = Record<string, unknown>;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

function absoluteAssetUrl(path: string) {
  return path.startsWith("http") ? path : new URL(path, SITE_URL).toString();
}

const businessId = `${SITE_URL}/#business`;
const websiteId = `${SITE_URL}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.area}`,
  addressLocality: COMPANY_INFO.address.city,
  addressRegion: COMPANY_INFO.address.state,
  postalCode: COMPANY_INFO.address.zip,
  addressCountry: "IN",
};

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    "@id": businessId,
    name: COMPANY_INFO.name,
    alternateName: SITE_NAME,
    url: SITE_URL,
    image: SITE_OG_IMAGE,
    logo: SITE_OG_IMAGE,
    description: SITE_DESCRIPTION,
    telephone: COMPANY_INFO.contact.primary,
    email: COMPANY_INFO.contact.email,
    priceRange: "$$",
    address: postalAddress,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: SERVICE_AREAS.map((name) => ({
      "@type": "Place",
      name,
    })),
    brand: PARTNER_BRANDS.map((name) => ({
      "@type": "Brand",
      name,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_INFO.contact.primary,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": businessId,
    },
  };
}

export function webPageSchema(path: string, title: string, description: string, pageType = "WebPage"): JsonLd {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": businessId,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: SITE_OG_IMAGE,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productCatalogSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Industrial Electrical Products",
    url: absoluteUrl("/products"),
    provider: {
      "@id": businessId,
    },
    itemListElement: PRODUCT_CATEGORIES.map((category) => ({
      "@type": "OfferCatalog",
      name: category.name,
      description: category.description,
      url: `${absoluteUrl("/products")}#${category.slug}`,
      image: absoluteAssetUrl(category.image),
      brand: category.brands.map((name) => ({
        "@type": "Brand",
        name,
      })),
      itemListElement: category.description.split(",").map((component) => ({
        "@type": "Product",
        name: `${component.trim()} in Vapi`,
        category: category.name,
        image: absoluteAssetUrl(category.image),
        description: `${component.trim()} supplied by JK Electricals Vapi for industrial buyers looking for authorized dealers, suppliers, and sellers.`,
        brand: category.brands.map((name) => ({
          "@type": "Brand",
          name,
        })),
        seller: {
          "@id": businessId,
        },
      })),
    })),
  };
}

export function routeByPath(path: string) {
  return ROUTES.find((route) => route.path === path) ?? ROUTES[0];
}
