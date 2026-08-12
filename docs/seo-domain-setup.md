# คำแนะนำสำหรับผู้ดูแลโดเมน: เปลี่ยน koimartfarm.com จาก iframe เป็นเสิร์ฟเว็บจริง (เพื่อ SEO)

> **✅ แก้เรียบร้อยแล้ว (ตรวจสอบ 13 สิงหาคม 2026)**
> `koimartfarm.com` เสิร์ฟ HTML ของ Next.js จริงแล้ว ไม่มี iframe wrapper อีกต่อไป
> เอกสารนี้เก็บไว้เป็นบันทึกอ้างอิงเท่านั้น — **ไม่ต้องทำตามขั้นตอนด้านล่างซ้ำ**
> ส่วน "SEO follow-up" ท้ายเอกสารยังใช้ได้ และ redirect `koimartfarm.vercel.app` → `koimartfarm.com`
> ถูกเพิ่มใน `next.config.mjs` แล้ว

> เอกสารนี้เขียนสำหรับผู้ดูแล Cloudflare / เซิร์ฟเวอร์ของโดเมน koimartfarm.com
> จัดทำ: กรกฎาคม 2026

## ปัญหาเดิม (แก้แล้ว)

ตอนนี้ `koimartfarm.com` เสิร์ฟหน้า HTML ที่มีแค่ `<iframe src="https://koimartfarm.vercel.app/">` ครอบเว็บจริงไว้ ผลคือ:

- Google เห็นโดเมนหลักเป็นหน้าเกือบเปล่า (เนื้อหาใน iframe ไม่ถูกนับเป็นของ koimartfarm.com)
- เนื้อหาจริงถูก index ภายใต้ `koimartfarm.vercel.app` แทน
- canonical ของเว็บชี้ไป `https://koimartfarm.com` แต่โดเมนนั้นไม่มีเนื้อหาจริง → SEO เสียทั้งสองทาง

**เป้าหมาย:** ให้ request ที่เข้า `koimartfarm.com` ได้ HTML จริงของเว็บ (ที่รันอยู่บน Vercel) กลับไปตรงๆ โดยไม่มี iframe

ข้อมูลที่ตรวจแล้ว: DNS ของโดเมนอยู่บน Cloudflare (NS: `asa.ns.cloudflare.com` / `leonard.ns.cloudflare.com`) และ `@` + `www` เปิด Cloudflare proxy อยู่

---

## ขั้นแรก: ตรวจสอบก่อนเลือกแผน

ตอบ 2 ข้อนี้ก่อน:

1. **ใน Cloudflare DNS ของ koimartfarm.com มี record อะไรบ้าง?**
   ถ้า record `@` และ `www` ใช้เสิร์ฟเฉพาะหน้า wrapper นี้ (โปรเจกต์อื่นอยู่บน subdomain อื่น เช่น `xxx.koimartfarm.com` หรือโดเมนอื่นไปเลย) → ใช้ **แผน A**
2. **มีเว็บ/ระบบอื่นเสิร์ฟอยู่ใต้ path ของโดเมนหลักไหม?** (เช่น `koimartfarm.com/otherapp`)
   ถ้ามี → ใช้ **แผน B**

ถ้าไม่มีสิทธิ์เข้า Cloudflare เลย มีแค่ cPanel → ใช้ **แผน C** (ทางสุดท้าย)

> ⚠️ ทุกแผน: **ห้ามลบ/แก้ MX และ record อื่นๆ** ที่ไม่เกี่ยวกับ `@` / `www` — อีเมลและ subdomain อื่นต้องไม่กระทบ

---

## แผน A (แนะนำที่สุด): ชี้โดเมนตรงเข้า Vercel

เร็วที่สุด ไม่มี proxy คั่นกลาง ไม่ต้องดูแลโค้ดเพิ่ม HTTPS จัดการโดย Vercel อัตโนมัติ และ **ไม่กระทบ subdomain อื่นหรือ MX ใดๆ**

### ฝั่ง Vercel (ทีม dev ทำได้)
1. เปิด Vercel dashboard → project ของเว็บ → **Settings → Domains**
2. เพิ่ม `koimartfarm.com` และ `www.koimartfarm.com`
3. ตั้ง `www.koimartfarm.com` เป็น **Redirect to koimartfarm.com** (308) — ให้ตรงกับ canonical ที่เป็น non-www
4. Vercel จะแสดงค่า DNS ที่ต้องตั้ง — ส่งให้ผู้ดูแล Cloudflare

### ฝั่ง Cloudflare (ผู้ดูแลโดเมนทำ)
1. DNS → แก้ record ของ `@` (apex):
   - Type `A`, Name `@`, Value `76.76.21.21` (หรือค่าที่ Vercel แสดง)
2. แก้ record ของ `www`:
   - Type `CNAME`, Name `www`, Value `cname.vercel-dns.com` (หรือค่าที่ Vercel แสดง)
3. **Proxy status ของ 2 record นี้: ตั้งเป็น DNS only (เมฆเทา)** — ง่ายและชัวร์ที่สุด
   - ถ้าจำเป็นต้องคงเมฆส้ม (proxied) ไว้: ต้องตั้ง SSL/TLS mode เป็น **Full (Strict)** มิฉะนั้นจะเกิด redirect loop
4. record อื่นทั้งหมด (MX, subdomain อื่นๆ) **ไม่ต้องแตะ**

### ผลลัพธ์
- `koimartfarm.com` เสิร์ฟเว็บจริงจาก Vercel edge โดยตรง
- หน้า wrapper บน cPanel ไม่ถูกใช้อีก (ปล่อยทิ้งไว้ได้ ไม่มีผล)

---

## แผน B: Cloudflare Worker reverse proxy (ถ้าชี้โดเมนตรงไม่ได้)

ใช้เมื่อโดเมนหลักมีเว็บอื่นอยู่ใต้ path หรือย้าย DNS ไม่ได้ — ไม่ต้องแตะ cPanel และไม่ต้องแก้ DNS record (เมฆส้มต้องเปิดอยู่ ซึ่งตอนนี้เปิดอยู่แล้ว)

### สร้าง Worker
Cloudflare dashboard → **Workers & Pages → Create Worker** วางโค้ดนี้:

```js
export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "koimartfarm.vercel.app";
    url.protocol = "https:";
    url.port = "";

    // คง method / headers / body เดิมทั้งหมด และไม่ follow redirect เอง
    // (ปล่อย redirect กลับไปให้ browser จัดการ)
    const upstream = new Request(url, request);
    return fetch(upstream, { redirect: "manual" });
  },
};
```

จุดสำคัญของโค้ดนี้ (ต่างจากเวอร์ชัน PHP ที่เคยได้รับมา):
- **ไม่แตะ Content-Type** — response ทุกชนิด (HTML, JS, CSS, รูป, ฟอนต์) ส่งกลับตาม header เดิมจาก Vercel
- **forward ทุก method** — contact form ที่ POST ไป `/api/contact` ใช้งานได้
- Host header ถูกตั้งเป็น `koimartfarm.vercel.app` อัตโนมัติตาม URL ปลายทาง

### ผูก Route
Worker → **Settings → Triggers → Routes** เพิ่ม:
- `koimartfarm.com/*`
- `www.koimartfarm.com/*` (หรือดีกว่า: สร้าง Redirect Rule `www.koimartfarm.com/*` → `https://koimartfarm.com/$1` แบบ 301 ให้ตรง canonical)

ถ้ามีเว็บอื่นใต้ path เช่น `koimartfarm.com/otherapp` — สร้าง route `koimartfarm.com/otherapp*` เพิ่มอีกอัน แล้วตั้ง Worker เป็น **None** (route ที่เจาะจงกว่าชนะ ทำให้ path นั้นวิ่งไป origin เดิมตามปกติ ไม่ผ่าน proxy)

### ค่าใช้จ่าย
Workers free tier = 100,000 requests/วัน — เหลือเฟือสำหรับเว็บนี้

---

## แผน C (ทางสุดท้าย): PHP proxy บน cPanel — เวอร์ชันแก้บั๊กแล้ว

> ⚠️ ใช้เฉพาะเมื่อไม่มีสิทธิ์ Cloudflare เลย
> ข้อเสีย: ทุก request วิ่ง 2 ต่อ (ผู้ใช้ → shared host → Vercel) ช้ากว่าแผน A/B ชัดเจน และจำกัดด้วย PHP concurrency ของ shared hosting

**โค้ดเวอร์ชันที่เคยได้รับมามีบั๊กร้ายแรง ห้ามใช้ตามนั้น:** มันบังคับ `Content-Type: text/html` กับทุกไฟล์ (JS/CSS จะพังทั้งเว็บ) และไม่ส่งต่อ POST (ฟอร์มติดต่อพัง) เวอร์ชันด้านล่างแก้แล้ว:

`index.php`:

```php
<?php
$target = 'https://koimartfarm.vercel.app' . $_SERVER['REQUEST_URI'];

$ch = curl_init($target);

// ── forward method + body (POST/PUT ฯลฯ) ──
$method = $_SERVER['REQUEST_METHOD'];
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
if (!in_array($method, ['GET', 'HEAD'], true)) {
    curl_setopt($ch, CURLOPT_POSTFIELDS, file_get_contents('php://input'));
}

// ── forward request headers ที่จำเป็น ──
$fwd = [];
if (!empty($_SERVER['CONTENT_TYPE']))         $fwd[] = 'Content-Type: '    . $_SERVER['CONTENT_TYPE'];
if (!empty($_SERVER['HTTP_ACCEPT']))          $fwd[] = 'Accept: '          . $_SERVER['HTTP_ACCEPT'];
if (!empty($_SERVER['HTTP_ACCEPT_LANGUAGE'])) $fwd[] = 'Accept-Language: ' . $_SERVER['HTTP_ACCEPT_LANGUAGE'];
if (!empty($_SERVER['HTTP_USER_AGENT']))      $fwd[] = 'User-Agent: '      . $_SERVER['HTTP_USER_AGENT'];
curl_setopt($ch, CURLOPT_HTTPHEADER, $fwd);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, true);          // ต้องการ header จาก upstream
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false); // ส่ง redirect กลับให้ browser เอง
curl_setopt($ch, CURLOPT_ENCODING, '');          // ให้ cURL จัดการ gzip
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$resp = curl_exec($ch);
if ($resp === false) {
    http_response_code(502);
    curl_close($ch);
    exit('Upstream unavailable');
}

$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$status     = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$rawHeaders = substr($resp, 0, $headerSize);
$body       = substr($resp, $headerSize);

http_response_code($status);
// ── ส่งต่อ header สำคัญจาก upstream ตามจริง (ไม่ hardcode Content-Type) ──
foreach (explode("\r\n", $rawHeaders) as $line) {
    if (preg_match('/^(Content-Type|Cache-Control|Location|Vary|ETag|Last-Modified|Content-Language):/i', $line)) {
        header($line, false);
    }
}
echo $body;
```

`.htaccess` (เหมือนเดิม — อันนี้ถูกต้องแล้ว):

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php [L,QSA]
```

---

## หลังเปลี่ยนเสร็จ (ทุกแผน)

### วิธีตรวจว่าสำเร็จ
```bash
curl -s https://koimartfarm.com/ | head -30
```
- ✅ ต้องเห็น HTML ของ Next.js (มี `/_next/static/...`)
- ❌ ถ้ายังเห็น `<iframe id="main-frame">` = ยังไม่สำเร็จ

จากนั้นเปิดเว็บจริงบน browser: แบนเนอร์รูปปลาโหลด, ดีไซน์ถูกต้อง (CSS ทำงาน), ทดลองส่งฟอร์มติดต่อ 1 ครั้ง

### SEO follow-up
1. Google Search Console: ยืนยันความเป็นเจ้าของ `koimartfarm.com` (ถ้ายัง) → **URL Inspection → Request Indexing** สำหรับหน้าแรกและหน้า blog หลักๆ
2. แจ้งทีม dev เมื่อ cutover เสร็จ — ฝั่งโค้ดจะเพิ่ม redirect `koimartfarm.vercel.app` → `koimartfarm.com` ตามหลัง เพื่อกัน duplicate content (ทำก่อน cutover ไม่ได้ เพราะ iframe เดิมจะ redirect วน)

### สิ่งที่พร้อมอยู่แล้วฝั่งเว็บ (ไม่ต้องทำอะไร)
- canonical / metadataBase ชี้ `https://koimartfarm.com` (non-www) แล้ว
- robots.txt และ llms.txt ใช้ URL non-www แล้ว
