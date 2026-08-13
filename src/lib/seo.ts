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

export const SITE_TITLE =
  "Koi Mart Farm | ปลาคาร์พญี่ปุ่นพรีเมียม นำเข้าจากฟาร์มดังญี่ปุ่น";

export const SITE_DESCRIPTION =
  "นำเข้าและจัดจำหน่าย Fancy Carp ปลาคาร์พญี่ปุ่นพรีเมียมจาก Dainichi, Sakai, Isa, Momotaro, Marudo โดย Koi Mart Farm ปากเกร็ด นนทบุรี โทร 083-615-5250 เปิดทุกวัน 09:00–18:00";

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
  "ปลาคาร์พ",
  "ปลาคาร์พญี่ปุ่น",
  "fancy carp",
  "นำเข้าปลาคาร์พ",
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
  "ปลาคาร์พนนทบุรี",
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
    "รวมกิจกรรมประมูลปลาคาร์พ งานโชว์ และทริปดูปลาที่ญี่ปุ่นของ Koi Mart Farm อัปเดตล่าสุด",
  blog: "บทความและความรู้เรื่องปลาคาร์พญี่ปุ่น การเลือกซื้อ การดูฟอร์ม และประสบการณ์ตรงจากการไปคัดปลาที่ฟาร์มญี่ปุ่น",
  about:
    "Koi Mart Farm นำเข้าและจัดจำหน่าย Fancy Carp คุณภาพสูงจากฟาร์มชั้นนำในญี่ปุ่น Dainichi, Sakai, Isa, Momotaro และ Marudo ก่อตั้งโดยคุณบวรศักดิ์ ศุภทนต์",
  koiVarieties:
    "สายพันธุ์ปลาคาร์พคุณภาพจาก Koi Mart Farm — ลักษณะเด่น และความหมายเชิงสัญลักษณ์ของแต่ละสายพันธุ์",
  contact:
    "ติดต่อสอบถามปลาคาร์พ ราคา และนัดชมปลาที่ฟาร์ม ปากเกร็ด นนทบุรี โทร 083-615-5250 เปิดทุกวัน 09:00–18:00",
} as const;
