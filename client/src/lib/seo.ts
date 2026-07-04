import { COMPANY_INFO, PARTNER_BRANDS, PRODUCT_CATEGORIES } from "@/const";
import { AUTHORITY_BRANDS, SERVICE_LOCATIONS } from "@/lib/seoContent";
import {
  AI_SEARCH_TOPICS,
  COMMERCIAL_INTENTS,
  INDUSTRIES_SERVED,
  ROUTES,
  SERVICE_AREAS,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "@/lib/site";

export type JsonLd = Record<string, unknown>;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

function absoluteAssetUrl(path: string) {
  return path.startsWith("http") ? path : new URL(path, SITE_URL).toString();
}

const businessId = `${SITE_URL}/#business`;
const organizationId = `${SITE_URL}/#organization`;
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
    "@type": "ElectricalSupplyStore",
    "@id": businessId,
    name: COMPANY_INFO.name,
    alternateName: SITE_NAME,
    url: SITE_URL,
    image: SITE_OG_IMAGE,
    logo: SITE_OG_IMAGE,
    description: SITE_DESCRIPTION,
    keywords: SITE_KEYWORDS,
    knowsAbout: AI_SEARCH_TOPICS,
    sameAs: Object.values(COMPANY_INFO.profiles),
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
    audience: INDUSTRIES_SERVED.map((industry) => ({
      "@type": "BusinessAudience",
      audienceType: industry,
    })),
    additionalProperty: COMMERCIAL_INTENTS.map((intent) => ({
      "@type": "PropertyValue",
      propertyID: "commercialIntent",
      value: intent,
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Electrical and Automation Supply",
      itemListElement: PRODUCT_CATEGORIES.map((category) => ({
        "@type": "OfferCatalog",
        name: category.name,
        url: absoluteUrl(`/products/${category.slug}`),
      })),
    },
  };
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: COMPANY_INFO.name,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: SITE_OG_IMAGE,
    image: SITE_OG_IMAGE,
    description: SITE_DESCRIPTION,
    keywords: SITE_KEYWORDS,
    knowsAbout: AI_SEARCH_TOPICS,
    sameAs: Object.values(COMPANY_INFO.profiles),
    email: COMPANY_INFO.contact.email,
    telephone: COMPANY_INFO.contact.primary,
    address: postalAddress,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_INFO.contact.primary,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
    ],
    brand: PARTNER_BRANDS.map((name) => ({
      "@type": "Brand",
      name,
    })),
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    keywords: SITE_KEYWORDS,
    about: AI_SEARCH_TOPICS.map((topic) => ({
      "@type": "Thing",
      name: topic,
    })),
    publisher: {
      "@id": businessId,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSummarySchema(summary: string, topics: string[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    name: "Business Summary",
    description: summary,
    about: topics.map((topic) => ({
      "@type": "Thing",
      name: topic,
    })),
    isPartOf: {
      "@id": websiteId,
    },
  };
}

export function itemListSchema(name: string, items: string[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item,
    })),
  };
}

export function imageObjectSchema(name: string, imageUrl = SITE_OG_IMAGE, caption = SITE_DESCRIPTION): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name,
    url: absoluteAssetUrl(imageUrl),
    contentUrl: absoluteAssetUrl(imageUrl),
    caption,
    representativeOfPage: true,
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

export function faqSchema(items: Array<{ question: string; answer: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function defaultPageFaqSchema(pageTopic: string): JsonLd {
  return faqSchema([
    {
      question: `What does ${SITE_NAME} provide for ${pageTopic}?`,
      answer:
        "JK Electricals supplies genuine industrial electrical and automation products for factories, contractors, panel builders, OEMs, and maintenance teams.",
    },
    {
      question: "Which areas does JK Electricals serve?",
      answer: `JK Electricals serves ${SERVICE_AREAS.slice(0, 8).join(", ")} and nearby South Gujarat industrial regions.`,
    },
    {
      question: "How can buyers request a quotation?",
      answer:
        "Buyers can share product names, model numbers, ratings, quantities, preferred brands, application details, and urgency through phone, WhatsApp, email, or the contact form.",
    },
  ]);
}

export function productSchema(name: string, description: string, path: string, brands: string[] = []): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    category: "Industrial Electrical Products",
    url: absoluteUrl(path),
    image: SITE_OG_IMAGE,
    brand: brands.map((brand) => ({
      "@type": "Brand",
      name: brand,
    })),
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: {
        "@id": businessId,
      },
    },
    areaServed: SERVICE_AREAS.map((name) => ({
      "@type": "Place",
      name,
    })),
  };
}

export function productCollectionSchema(path: string, title = "Industrial Electrical Products"): JsonLd {
  const products = PRODUCT_CATEGORIES.flatMap((category) =>
    category.description.split(",").map((component) => ({
      component: component.trim(),
      category,
    })),
  );

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    url: absoluteUrl(path),
    itemListElement: products.map(({ component, category }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: component,
          category: category.name,
          description: `${component} supplied for industrial electrical and automation buyers by JK Electricals Vapi.`,
          image: absoluteAssetUrl(category.image),
          url: absoluteUrl(`/products/${category.slug}`),
          brand: category.brands.map((brand) => ({
            "@type": "Brand",
            name: brand,
          })),
          seller: {
            "@id": businessId,
          },
        },
      })),
  };
}

export function categoryProductItemListSchema(categorySlug: string, path: string): JsonLd {
  const category = PRODUCT_CATEGORIES.find((entry) => entry.slug === categorySlug);
  if (!category) {
    return itemListSchema("Industrial products", []);
  }

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} products supplied by JK Electricals Vapi`,
    url: absoluteUrl(path),
    itemListElement: category.description.split(",").map((component, index) => {
      const productName = component.trim();
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: productName,
          category: category.name,
          description: `${productName} supplied for industrial projects, control panels, maintenance, OEM, and bulk procurement by JK Electricals Vapi.`,
          image: absoluteAssetUrl(category.image),
          url: absoluteUrl(path),
          brand: category.brands.map((brand) => ({
            "@type": "Brand",
            name: brand,
          })),
          seller: {
            "@id": businessId,
          },
          areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
        },
      };
    }),
  };
}

export function brandRelationshipSchema(brandName: string, brandSlug: string, focus: readonly string[]): JsonLd {
  const relatedCategories = PRODUCT_CATEGORIES.filter((category) =>
    category.brands.some((item) => item.toLowerCase().includes(brandName.toLowerCase().split(" ")[0])) ||
    focus.some((item) => category.description.toLowerCase().includes(item.split(" ")[0].toLowerCase())),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandName,
    url: absoluteUrl(`/brands/${brandSlug}`),
    brand: {
      "@type": "Brand",
      name: brandName,
    },
    subjectOf: {
      "@id": `${absoluteUrl(`/brands/${brandSlug}`)}#webpage`,
    },
    makesOffer: relatedCategories.map((category) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: `${brandName} ${category.name}`,
        category: category.name,
        url: absoluteUrl(`/products/${category.slug}`),
      },
      offeredBy: {
        "@id": businessId,
      },
    })),
  };
}

export function internalLinkGraphSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Primary commercial internal links",
    hasPart: [
      ...PRODUCT_CATEGORIES.map((category) => ({
        "@type": "WebPage",
        name: category.name,
        url: absoluteUrl(`/products/${category.slug}`),
        about: category.brands.map((brand) => ({ "@type": "Brand", name: brand })),
      })),
      ...AUTHORITY_BRANDS.map((brand) => ({
        "@type": "WebPage",
        name: `${brand.name} product inquiries`,
        url: absoluteUrl(`/brands/${brand.slug}`),
        about: brand.focus.map((focus) => ({ "@type": "Thing", name: focus })),
      })),
      ...SERVICE_LOCATIONS.map((location) => ({
        "@type": "WebPage",
        name: `Industrial supply in ${location.name}`,
        url: absoluteUrl(`/electrical-supplier-${location.slug}`),
        areaServed: { "@type": "Place", name: location.name },
      })),
    ],
  };
}

export function localServiceSchema(locationName: string, path: string, description: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Industrial electrical and automation supply in ${locationName}`,
    description,
    areaServed: {
      "@type": "Place",
      name: locationName,
    },
    provider: {
      "@id": businessId,
    },
    serviceType: "Industrial Electrical & Automation Solutions Supplier",
    url: absoluteUrl(path),
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
        description: `${component.trim()} supplied by JK Electricals Vapi for industrial buyers looking for dealers, suppliers, sellers, stockists, and resellers.`,
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
