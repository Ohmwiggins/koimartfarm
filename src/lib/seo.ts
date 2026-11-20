/**
 * Single source of truth for site-wide SEO values.
 *
 * NAP data, social profiles and Thai marketing copy were ported from the
 * legacy static `index.html` at the repo root (no longer served). All URLs are
 * non-www to match `metadataBase` and `public/robots.txt`.
 */

export const SITE_URL = "https://koimartfarm.com";

export const SITE_NAME = "Koi Mart Farm";
export const LEGAL_NAME = "Koi Mart Farm Co., LTD";

/**
 * Thai users search "ปลาคาร์ฟ" (ฟ) almost exclusively — Google Trends TH shows
 * ปลาคาร์พ/ปลาคาร์ป near zero, and Google returns different results for each
 * spelling. Lead with ฟ; mention the other spellings once, naturally, in body
 * copy. Don't stack every variant in titles (keyword stuffing).
 */
export const SITE_TITLE =
  "ฟาร์มปลาคาร์ฟ ปากเกร็ด นนทบุรี | ปลาคาร์ฟญี่ปุ่นแท้ - Koi Mart Farm";

export const SITE_DESCRIPTION =
  "ฟาร์มปลาคาร์ฟนำเข้า ปากเกร็ด นนทบุรี ขายปลาคาร์ฟ (ปลาคาร์พ) ญี่ปุ่นแท้จาก Dainichi, Sakai, Isa, Momotaro, Marudo มีงานประมูล เปิดอังคาร–อาทิตย์ โทร 083-615-5250";

export const PHONE = "+66-83-615-5250";
export const PHONE_LOCAL = "083-615-5250";

export const ADDRESS = {
  streetAddress: "46/81 Moo 2 Chaengwattana 28",
  addressLocality: "Bangtalad, Pak Kret",
  addressRegion: "Nonthaburi",
  postalCode: "11120",
  addressCountry: "TH",
} as const;

export const ADDRESS_TH =
  "46/81 หมู่ 2 แจ้งวัฒนะ 28 บางตลาด ปากเกร็ด นนทบุรี 11120";

/**
 * Must match the Google Business Profile exactly (NAP consistency).
 * Source: GBP listing as of 2026-11-18 — closed Monday.
 */
export const OPENING_HOURS = [
  {
    days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "17:00",
  },
  { days: ["Sunday"], opens: "09:00", closes: "18:00" },
] as const;

export const OPENING_HOURS_TH = "อังคาร–เสาร์ 09:00–17:00 น. · อาทิตย์ 09:00–18:00 น. · ปิดวันจันทร์";

export const GEO = { latitude: 13.9011, longitude: 100.52 } as const;

export const OG_IMAGE = "/img/banner.png";
export const LOGO_IMAGE = "/img/logo-circle.png";

export const SOCIAL_PROFILES = [
  "https://www.facebook.com/koimartfarm",
  "https://www.instagram.com/tong.koimart",
  "https://www.tiktok.com/@koimart.farm",
  "https://lin.ee/nTAFJe2",
  "https://line.me/ti/g2/5OnDbvvr0Sz3jW7Dvt7wECbG4l1dJQFjwfcNcA",
  "https://m.me/koimartfarm",
];

export const KEYWORDS = [
  "koi mart farm",
  "ฟาร์มปลาคาร์ฟ",
  "ฟาร์มปลาคาร์ฟ นนทบุรี",
  "ฟาร์มปลาคาร์ฟ ปากเกร็ด",
  "ปลาคาร์ฟ",
  "ปลาคาร์ฟญี่ปุ่น",
  "ขายปลาคาร์ฟ",
  "ปลาคาร์ฟนำเข้า",
  "ปลาคาร์พ",
  "fancy carp",
  "koi farm thailand",
  "Dainichi",
  "Sakai",
  "Isa",
  "Momotaro",
  "Marudo",
  "Kohaku",
  "Taisho Sanke",
  "Showa Sanshoku",
  "Tancho",
  "Ogon",
  "Butterfly koi",
  "ฟาร์มปลา นนทบุรี",
  "ปากเกร็ด",
];

/**
 * The site's primary sections. Drives the navbar, the sitemap and the
 * SiteNavigationElement structured data so all three stay in sync — Google
 * uses that combination when deciding which pages become sitelinks.
 */
export const NAV_PAGES = [
  { path: "/", label: "Home" },
  { path: "/events", label: "Events" },
  { path: "/blog", label: "Blog" },
  { path: "/blog/koi-varieties", label: "Koi Varieties" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
] as const;

/** Thai copy shown under each section heading, and reused as meta descriptions. */
export const SECTION_DESCRIPTIONS = {
  events:
    "รวมกิจกรรมประมูลปลาคาร์ฟ งานโชว์ และทริปดูปลาที่ญี่ปุ่นของ Koi Mart Farm อัปเดตล่าสุด",
  blog: "บทความและความรู้เรื่องปลาคาร์ฟญี่ปุ่น การเลือกซื้อ การดูฟอร์ม และประสบการณ์ตรงจากการไปคัดปลาที่ฟาร์มญี่ปุ่น",
  about:
    "Koi Mart Farm ฟาร์มปลาคาร์ฟ ปากเกร็ด นนทบุรี นำเข้าและจัดจำหน่ายปลาคาร์ฟ (Fancy Carp) คุณภาพสูงจากฟาร์มชั้นนำในญี่ปุ่น Dainichi, Sakai, Isa, Momotaro และ Marudo ก่อตั้งโดยคุณบวรศักดิ์ ศุภทนต์",
  koiVarieties:
    "สายพันธุ์ปลาคาร์ฟคุณภาพจาก Koi Mart Farm — ลักษณะเด่น และความหมายเชิงสัญลักษณ์ของแต่ละสายพันธุ์",
  contact:
    "ติดต่อสอบถามราคาปลาคาร์ฟ และนัดชมปลาที่ฟาร์ม ปากเกร็ด นนทบุรี โทร 083-615-5250 เปิดอังคาร–อาทิตย์ ปิดวันจันทร์",
} as const;

/**
 * Homepage intro, rendered as visible body copy under a Thai H2. It carries
 * the local-intent phrases (ฟาร์มปลาคาร์ฟ + ปากเกร็ด/นนทบุรี) and the
 * ปลาคาร์พ/ปลาคาร์ป spellings once each. Only claims the client has confirmed.
 */
export const HOME_INTRO = {
  heading: "ฟาร์มปลาคาร์ฟญี่ปุ่นนำเข้า ปากเกร็ด นนทบุรี",
  body: "Koi Mart Farm คือฟาร์มปลาคาร์ฟนำเข้าที่ตั้งอยู่ในซอยแจ้งวัฒนะ 28 อำเภอปากเกร็ด จังหวัดนนทบุรี เราคัดเลือกปลาคาร์ฟญี่ปุ่นแท้จากฟาร์มชั้นนำอย่าง Dainichi, Sakai, Isa, Momotaro และ Marudo มีให้เลือกหลายสายพันธุ์และหลายขนาด ตั้งแต่ปลาสำหรับมือใหม่ไปจนถึงปลาเกรดประกวด หลายคนรู้จักในชื่อปลาคาร์พหรือปลาคาร์ป ซึ่งก็คือปลาชนิดเดียวกัน ลูกค้าในนนทบุรี กรุงเทพฯ และปทุมธานีแวะมาเลือกปลาที่ฟาร์มได้วันอังคาร–อาทิตย์ (ปิดวันจันทร์) หรือสอบถามราคาปลาคาร์ฟ การจัดส่ง และงานประมูลปลาคาร์ฟผ่าน LINE หรือโทร 083-615-5250",
} as const;
