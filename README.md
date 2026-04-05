# Triple Point — موقع الشركة الرسمي
## Official Company Website

A production-ready, fully bilingual (Arabic/English) Next.js website for Triple Point — a Saudi integrated technology solutions company.

---

## 🚀 Tech Stack

| Tool | Purpose |
|---|---|
| **Next.js 15** (App Router) | Framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **react-intersection-observer** | Scroll-triggered animations |
| **react-countup** | Animated number counters |
| **lucide-react** | Icons |

---

## 📁 Project Structure

```
triplepoint/
├── app/
│   ├── layout.tsx              # Root layout (SEO, i18n, providers)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + CSS variables
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # robots.txt
│   ├── not-found.tsx           # 404 page
│   ├── about/                  # About Us page
│   ├── services/               # Services (main + 4 detail pages)
│   │   ├── meeting-rooms/
│   │   ├── queue-management/
│   │   ├── security-surveillance/
│   │   └── smart-home/
│   ├── projects/               # Portfolio page with filters
│   ├── contact/                # Contact form + map
│   ├── privacy/                # Privacy policy
│   └── terms/                  # Terms & conditions
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky header + language switcher
│   │   └── Footer.tsx          # Footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ClientsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── HowWeWorkSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FinalCtaSection.tsx
│   │   └── ServiceDetailPage.tsx   # Reusable service detail template
│   └── ui/
│       ├── ThemeProvider.tsx    # Dark/light mode
│       ├── WhatsAppButton.tsx   # Floating WhatsApp button
│       └── Section.tsx          # Scroll-reveal wrapper
│
└── lib/
    └── i18n/
        ├── ar.ts               # Arabic translations
        ├── en.ts               # English translations
        └── context.tsx         # Language context + RTL/LTR switcher
```

---

## 🎨 Design System

### Color Palette (extracted from logo)

```css
/* Primary Teal */
--teal-600: #1a4a5c   /* Main brand teal */
--teal-800: #0d2a3a   /* Deep teal */
--teal-950: #060f17   /* Near-black teal */

/* Gold Accent */
--gold-500: #c9a84c   /* Primary gold */
--gold-600: #b8922a   /* Darker gold */

/* Neutrals */
--charcoal-800: #1a1a1a
--silver-400:   #8a9aaa
```

---

## ⚙️ Installation & Setup

```bash
# 1. Navigate to project directory
cd triplepoint

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Build for production
npm run build

# 5. Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🌐 i18n (Bilingual)

- Default: **Arabic (RTL)**
- Secondary: **English (LTR)**
- Language toggle in header (auto-saves to localStorage)
- All content in `lib/i18n/ar.ts` and `lib/i18n/en.ts`
- Direction auto-applied to `<html dir="...">` attribute

---

## 📄 Pages

| Page | URL | Description |
|---|---|---|
| Home | `/` | Full landing with all sections |
| About | `/about` | Story, vision, mission, values, team |
| Services | `/services` | Overview of all services |
| Meeting Rooms | `/services/meeting-rooms` | Detail page |
| Queue Management | `/services/queue-management` | Detail page |
| Security | `/services/security-surveillance` | Detail page |
| Smart Home | `/services/smart-home` | Detail page |
| Projects | `/projects` | Filterable portfolio grid |
| Contact | `/contact` | Form + info + map |

---

## 🔍 SEO

- Metadata (title, description) per page
- OpenGraph + Twitter cards
- JSON-LD structured data (Organization schema)
- Sitemap at `/sitemap.xml`
- robots.txt at `/robots.txt`
- Semantic HTML (H1, H2, H3 hierarchy)
- Canonical URLs

---

## 📱 Features

- ✅ RTL/LTR fully supported
- ✅ Dark/light mode toggle
- ✅ Sticky header with blur effect
- ✅ Floating WhatsApp button
- ✅ Animated counters (scroll-triggered)
- ✅ Project filter by sector
- ✅ Contact form with validation
- ✅ Framer Motion scroll animations
- ✅ Mobile-first responsive design
- ✅ Testimonials carousel

---

## 🔧 Customization

### Update contact info
Edit `lib/i18n/ar.ts` and `lib/i18n/en.ts` → `contactPage.info`

### Add real projects
Edit `projectsPage.items` in both translation files.

### Replace logo placeholder
Add your logo image to `public/logo.png` and update `components/layout/Header.tsx`.

### Add Google Maps embed
Replace the map placeholder in `app/contact/ContactClient.tsx` with an `<iframe>` from Google Maps.

### Update WhatsApp number
Find all `wa.me/966XXXXXXXXX` and replace with your actual number.

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📝 Notes

- Replace `info@triplepoint.sa` with your actual email
- Replace `+966 11 XXX XXXX` with your actual phone
- Add real client logos in `ClientsSection.tsx`
- Add real project images using `next/image` with proper `src`
- Configure Google Analytics or other tracking as needed

---

**Triple Point** | حلول تقنية متكاملة | Riyadh, Saudi Arabia
