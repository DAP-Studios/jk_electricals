import { useEffect } from "react";
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/site";

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

function setMetaTag(attribute: string, content: string, isProperty = false) {
  const selector = isProperty ? `meta[property="${attribute}"]` : `meta[name="${attribute}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    if (isProperty) {
      element.setAttribute("property", attribute);
    } else {
      element.setAttribute("name", attribute);
    }
    document.head.appendChild(element);
  }

  element.setAttribute(isProperty ? "property" : "name", attribute);
  element.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function toAbsoluteUrl(value: string) {
  try {
    return new URL(value, SITE_URL).toString();
  } catch {
    return value;
  }
}

export default function Seo({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image = SITE_OG_IMAGE,
  noindex = false,
  schema,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) || title.includes("JK Electricals") ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = new URL(path, SITE_URL).toString();
    const imageUrl = toAbsoluteUrl(image);

    document.title = fullTitle;
    setLinkTag("canonical", canonicalUrl);
    setMetaTag("description", description);
    setMetaTag("keywords", SITE_KEYWORDS.join(", "));
    setMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");
    setMetaTag("googlebot", noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMetaTag("theme-color", "#000080");

    setMetaTag("og:type", "website", true);
    setMetaTag("og:locale", "en_IN", true);
    setMetaTag("og:site_name", SITE_NAME, true);
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:url", canonicalUrl, true);
    setMetaTag("og:image", imageUrl, true);
    setMetaTag("og:image:alt", `${SITE_NAME} industrial electrical products`, true);

    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", imageUrl);

    document.head.querySelectorAll("script[data-seo-schema]").forEach((element) => element.remove());

    if (schema) {
      const schemaBlocks = Array.isArray(schema) ? schema : [schema];
      const schemaElement = document.createElement("script");
      schemaElement.type = "application/ld+json";
      schemaElement.id = "page-schema";
      schemaElement.setAttribute("data-seo-schema", "true");
      schemaElement.text = JSON.stringify(schemaBlocks.length === 1 ? schemaBlocks[0] : schemaBlocks);
      document.head.appendChild(schemaElement);
    }
  }, [description, image, noindex, path, schema, title]);

  return null;
}
