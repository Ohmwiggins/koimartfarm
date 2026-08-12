import {
  ADDRESS,
  GEO,
  KEYWORDS,
  LEGAL_NAME,
  LOGO_IMAGE,
  NAV_PAGES,
  OG_IMAGE,
  PHONE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "../../lib/seo";

const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
const CEO_ID = `${SITE_URL}/#ceo`;
const WEBSITE_ID = `${SITE_URL}/#website`;

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PetStore"],
  "@id": BUSINESS_ID,
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  alternateName: ["KoiMart Farm", "Koimartfarm", "KOIMART FARM", "Koimart Group"],
  description: SITE_DESCRIPTION,
  url: `${SITE_URL}/`,
  telephone: PHONE,
  priceRange: "฿฿฿",
  currenciesAccepted: "THB",
  paymentAccepted: "Cash, Bank Transfer",
  areaServed: { "@type": "Country", name: "Thailand" },
  image: [`${SITE_URL}${OG_IMAGE}`, `${SITE_URL}${LOGO_IMAGE}`],
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}${LOGO_IMAGE}`,
    width: 400,
    height: 400,
  },
  address: { "@type": "PostalAddress", ...ADDRESS },
  geo: { "@type": "GeoCoordinates", ...GEO },
  hasMap:
    "https://maps.google.com/?q=46/81+Moo+2+Chaengwattana+28+Bangtalad+Pak+Kret+Nonthaburi+11120",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  founder: { "@id": CEO_ID },
  employee: { "@id": CEO_ID },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "sales",
      availableLanguage: ["Thai", "English"],
      areaServed: "TH",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://lin.ee/nTAFJe2",
      availableLanguage: "Thai",
      areaServed: "TH",
    },
  ],
  sameAs: SOCIAL_PROFILES,
  knowsAbout: KEYWORDS,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fancy Carp — สายพันธุ์ปลาคาร์พที่จำหน่าย",
    url: `${SITE_URL}/blog/koi-varieties`,
    numberOfItems: 7,
  },
};

const ceo = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": CEO_ID,
  name: "Boonsak Supatorn",
  alternateName: "บวรศักดิ์ ศุภทนต์",
  jobTitle: "Founder & CEO",
  worksFor: { "@id": BUSINESS_ID },
  knowsAbout: [
    "Koi Breeding",
    "Japanese Koi Import",
    "Fancy Carp",
    "Koi Aquaculture",
  ],
  sameAs: SOCIAL_PROFILES.slice(0, 2),
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": BUSINESS_ID },
  inLanguage: ["th", "en"],
};

/**
 * Tells Google the site's primary sections. Combined with the matching navbar
 * links and sitemap entries, this is the signal set Google draws on when
 * generating sitelinks.
 */
const siteNavigation = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: NAV_PAGES.map((page, i) => ({
    "@type": "SiteNavigationElement",
    position: i + 1,
    name: page.label,
    url: `${SITE_URL}${page.path === "/" ? "/" : page.path}`,
  })),
};

/** Site-wide structured data. Rendered once, from the root layout. */
function StructuredData() {
  return (
    <>
      <JsonLd data={localBusiness} />
      <JsonLd data={ceo} />
      <JsonLd data={website} />
      <JsonLd data={siteNavigation} />
    </>
  );
}

/** Per-page breadcrumb trail. `items` excludes the implicit "หน้าหลัก" root. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "หน้าหลัก",
            item: `${SITE_URL}/`,
          },
          ...items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: item.name,
            item: `${SITE_URL}${item.path}`,
          })),
        ],
      }}
    />
  );
}

export default StructuredData;
