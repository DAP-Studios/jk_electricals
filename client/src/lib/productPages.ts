import { PRODUCT_CATEGORIES, getProductImage } from "@/const";

export function productSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function productDetails(name: string, categoryName: string) {
  const normalized = name.trim();

  return {
    description: `${normalized} supplied by JK Electricals Vapi are industrial-grade products for factories, control panels, OEMs, contractors, and maintenance teams. Buyers can request ${normalized.toLowerCase()} with preferred brand, rating, model number, quantity, and application details for Vapi, Daman, Silvassa, Valsad, Navsari, and South Gujarat procurement.`,
    features: [
      "Genuine industrial product sourcing for factory and panel applications",
      "Brand, model, rating, and quantity-based quotation support",
      "Suitable for maintenance, replacement, project, and bulk procurement",
      "Local inquiry support for Vapi GIDC and nearby industrial regions",
    ],
    application: `${normalized} are commonly used in ${categoryName.toLowerCase()} applications, electrical panels, machinery, utilities, industrial automation, plant maintenance, and project installations.`,
  };
}

export const PRODUCT_PAGES = PRODUCT_CATEGORIES.flatMap((category) =>
  category.description.split(",").map((item) => {
    const name = item.trim();
    const details = productDetails(name, category.name);

    return {
      name,
      slug: productSlug(name),
      path: `/products/${category.slug}/${productSlug(name)}`,
      parentCategory: category.name,
      parentSlug: category.slug,
      brands: category.brands,
      image: getProductImage(category.slug, name, category.image),
      description: details.description,
      features: details.features,
      application: details.application,
    };
  }),
);

export function getProductPage(categorySlug?: string, slug?: string) {
  return PRODUCT_PAGES.find((product) => product.parentSlug === categorySlug && product.slug === slug);
}

export function getRelatedProducts(categorySlug: string, currentSlug: string, limit = 6) {
  return PRODUCT_PAGES.filter((product) => product.parentSlug === categorySlug && product.slug !== currentSlug).slice(0, limit);
}
