# Marathwada Tiles — Premium Website

A bespoke, editorial, multi-page web application created for **Marathwada Tiles**, an established tile showroom and supplier based in Aurangabad, Maharashtra, India.

---

## 1. Verified Business Information

- **Business Name:** Marathwada Tiles
- **Contact Person:** Aaman Lakhani
- **Phone / Direct Consultations:** `+91 88882 44441`
- **WhatsApp Direct Inquiries:** `https://wa.me/918888244441`
- **Showroom Address:**
  Ranchoddas Girni, Rengtipura,
  Opposite Jincy Police Station,
  Aurangabad, Maharashtra 431001, India.
- **Primary Market:** Aurangabad and surrounding regions, Maharashtra.
- **Google Maps Directions:** [Direct Google Maps Link](https://www.google.com/maps/search/?api=1&query=Ranchoddas+Girni+Rengtipura+Opposite+Jincy+Police+Station+Aurangabad+Maharashtra+431001)

---

## 2. Design System & Brand Palette

The design reflects an understated, warm Indian architectural aesthetic:

| Color Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Warm Ivory** | `#F6F3EC` | Section backgrounds, soft contrast, warm atmosphere |
| **Deep Charcoal** | `#262923` | Display typography, dark architectural footer, high contrast |
| **Muted Terracotta** | `#A85F48` | Primary CTA buttons, interactive accents, brand identifiers |
| **Olive Green** | `#74785B` | Secondary details, specification tags, natural materials |
| **Sand Beige** | `#D8C7B2` | Borders, subtle card accents, neutral dividers |
| **Pure White** | `#FFFFFF` | Product cards, clean showcase containers, forms |
| **Body Text Grey** | `#6F7069` | High-legibility editorial and descriptive copy |
| **Light Border** | `#E3DED5` | Clean hairline dividers and architectural frames |

### Typography
- **Headings & Display:** *Cormorant Garamond* (Google Fonts) — timeless editorial serif.
- **Interface & Body:** *Manrope* (Google Fonts) — clean, readable modern sans-serif.

---

## 3. Implemented Pages & Features

1. **Homepage (`/`)**
   - **Section A (Hero):** Architectural slider with high-res interiors, "Beautiful Surfaces. Better Living.", slide pagination controls, and primary/secondary CTAs.
   - **Section B (Shop by Space):** "Tiles for Every Corner" featuring Living Rooms, Bathrooms, Kitchens, Bedrooms, Balcony & Outdoor, Commercial Spaces.
   - **Section C (Explore Collections):** "Find Your Signature Style" showcasing Marble Look, Stone Look, Wood Look, Concrete Look, Minimal Neutral, and Decorative surfaces.
   - **Section D (Featured Products):** Responsive catalogue grid with filter tabs ("All", "Living", "Bath", "Outdoor"), product details, and enquiry triggers.
   - **Section E (Design Inspiration):** In-situ photographic showcase demonstrating realistic tile surfaces, grout lines, and ambient daylight.
   - **Section F (Why Marathwada Tiles):** Focus on showroom guidance, space-appropriate recommendations, quantity estimations, and personalised assistance from Aaman Lakhani.
   - **Section G (Find Tiles by Finish):** Direct interactive filters for Glossy, Matte, Satin, Textured, Marble, Stone, Wood, and Concrete finishes.
   - **Section H (Inspiration & Resources):** Magazine-style editorial strip featuring practical architectural articles.
   - **Section I (Visit Showroom):** Aurangabad location showcase, Google Maps directions, landmark details, and WhatsApp CTA.
   - **Section J (Closing CTA):** "Let's Find the Right Tiles for You" quotation and WhatsApp action strip.

2. **Products Catalogue (`/products`)**
   - Live multi-dimensional filtering by **Category**, **Space / Application**, **Finish**, and **Look**.
   - Real-time product search with keyword matching.
   - Sort by Featured, Name A–Z, and Name Z–A.
   - Active filter tags with single-click dismissal and "Clear All" action.
   - Responsive desktop filter sidebar and mobile filter drawer.
   - Empty state fallback with one-click filter reset.

3. **Product Detail Page (`/products/:id`)**
   - Dedicated route with breadcrumbs (`Home > Products > Category > Product`).
   - Dual-view switcher (Tile slab macro surface & In-situ room preview).
   - Technical & Architectural Specifications Table:
     * Dimensions, Finish, Thickness, Color Tone.
     * Edge finish (Precision Rectified).
     * Water absorption rating (<0.05% Impervious).
     * Slip resistance rating (R9 / R10 / R11).
     * Coverage per box & suitability list.
   - Direct enquiry button prefilling product name in QuoteModal.
   - Direct WhatsApp button generating product-specific prefilled message.
   - Related products recommendation grid.
   - 404 fallback state for non-existent product IDs.

4. **About Us (`/about`)**
   - "Thoughtful Tile Choices for Everyday Spaces" hero.
   - Showroom philosophy, surface durability principles, and quantity calculation services.
   - Strictly honest narrative with zero fabricated manufacturing claims or awards.

5. **Catalogues (`/catalogues`)**
   - Desktop category sidebar & responsive mobile filter.
   - Detailed collection cards with covers, page counts, and feature breakdowns.
   - "View Details" modal for deep inspection.
   - Real, working specification summary download (`.txt` architectural spec sheet).
   - Direct sample folder and printed binder enquiry actions.

6. **Resources & Guides (`/resources` & `/resources/:slug`)**
   - Categories: Tile Buying Guides, Design Inspiration, Tile Care & Maintenance, FAQs, Project Planning.
   - Comprehensive detail pages with key takeaways, care advice, and related tile links.

7. **Blog & Design Journal (`/blog` & `/blog/:slug`)**
   - Editorial showcase with featured cover story.
   - Articles covering Living Room Statements, Bathroom Selection, Matte vs Glossy finishes, Staircase tiles, and Tile Layout Planning.

8. **Contact Us (`/contact`)**
   - 2-column desktop layout with showroom details and Google Maps links.
   - Client-side validated form (Full Name, 10-digit Phone, Optional Email, Category, Product, Project Type, Message).
   - Inline error messaging and loading state.
   - Submission confirmation with direct WhatsApp forward fallback.

9. **Where to Buy / Visit Us (`/visit-us`)**
   - Full address, landmark near Jincy Police Station, Google Maps directions link, and tips on what to bring to the showroom.

10. **Legal & Compliance (`/privacy` & `/terms`)**
    - Privacy Policy and Terms & Conditions tailored for Indian tile sales and shade variations.

11. **Global Search Modal (`Ctrl+K` / Search icon)**
    - Real-time search across products, categories, spaces, blog articles, and catalogues.
    - Keyboard-accessible with `ESC` to close.

12. **Floating Widgets**
    - Restrained floating WhatsApp icon with showroom tooltip.
    - Desktop fixed side enquiry tab.

---

## 4. Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
```bash
# Clone or navigate to the directory
cd marathwada-Tails

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be available at `http://127.0.0.1:5174/` (or the port specified by Vite).

---

## 5. Production Build & Deployment

### Build Command
```bash
npm run build
```
The optimized static output is generated in the `dist/` directory.

### Deployment Options

1. **Vercel**
   ```bash
   npx vercel
   ```
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`

2. **Netlify**
   - Publish directory: `dist`
   - Build command: `npm run build`
   - Set single-page application redirect rule in `public/_redirects`:
     ```text
     /*    /index.html   200
     ```

3. **Apache / Nginx / Traditional Hosting**
   - Upload the contents of `dist/` to the web root (`public_html`).
   - Configure URL rewriting so all paths point to `index.html` for React Router.

---

## 6. Form Submission Backend Configuration

The enquiry form currently performs comprehensive frontend validation and presents a confirmation state with direct WhatsApp fallback. To connect to an email backend or CRM service:

1. **Formspree / Formspark:**
   Replace the `handleSubmit` simulation in `src/pages/ContactPage.tsx` and `src/components/QuoteModal.tsx` with:
   ```ts
   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

2. **Custom Node / Express / PHP Server:**
   Send a `POST` request with the payload to your secure mail endpoint configured with SMTP credentials (e.g. Nodemailer or SendGrid).
