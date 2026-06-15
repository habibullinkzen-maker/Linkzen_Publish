const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public');

// ─── Brand Colors (RGB) ───────────────────────────────────────────────────────
const CYAN   = '#00F2FE';
const PURPLE = '#9B51E0';
const DARK   = '#0F1424';
const LIGHT  = '#F3F4F6';
const MUTED  = '#9CA3AF';
const WHITE  = '#FFFFFF';
const ACCENT_CYAN_BG   = '#0e2a30';
const ACCENT_PURPLE_BG = '#1e1030';

// ─── Product Definitions ──────────────────────────────────────────────────────
const products = [
  {
    id: 'restaurant',
    filename: 'Restaurant-ERP-Brochure.pdf',
    title: 'Restaurant ERP',
    tagline: 'DineIn Master',
    color: CYAN,
    bgColor: ACCENT_CYAN_BG,
    overview: `DineIn Master is Linkzen's flagship Restaurant ERP solution — a comprehensive, real-time management platform engineered for modern food-service businesses. From quick-service cafes to multi-branch fine-dining establishments, DineIn Master unifies every operational touchpoint into one seamless digital ecosystem.`,
    sections: [
      {
        title: 'Core Features',
        items: [
          { label: 'Real-time Kitchen Display System (KDS)', desc: 'Instantly relay customer orders from POS terminals to kitchen screens, eliminating paper tickets and reducing preparation errors by up to 90%.' },
          { label: 'Multi-table Management & Billing', desc: 'Manage floor layouts, table assignments, split bills, and merge orders with an intuitive drag-and-drop interface.' },
          { label: 'Raw Ingredient Inventory Logs', desc: 'Track ingredients at a granular level with automated deduction on every sale, real-time stock levels, and supplier reorder alerts.' },
          { label: 'Waiter Order App Sync', desc: 'Mobile app for floor staff to take orders tableside; syncs instantly with KDS and billing systems.' },
          { label: 'Reservations & Queue Management', desc: 'Online and walk-in reservation handling with automated SMS confirmations and waitlist notifications.' },
          { label: 'GST & Tax Compliance', desc: 'Automated GST calculation, FSSAI-compliant billing, and one-click tax reports.' },
        ]
      },
      {
        title: 'Technical Specifications',
        items: [
          { label: 'Architecture', desc: 'Cloud-native microservices with offline-first local sync (under 100ms latency).' },
          { label: 'Platforms', desc: 'Web dashboard, Android/iOS waiter app, Windows KDS terminal.' },
          { label: 'Database', desc: 'PostgreSQL with real-time replication across all terminals.' },
          { label: 'Security', desc: 'AES-256 data encryption, role-based access control (RBAC), and audit logs.' },
          { label: 'Integrations', desc: 'Zomato, Swiggy, payment gateways (Razorpay, PayTM), accounting tools.' },
        ]
      },
      {
        title: 'Use Cases',
        items: [
          { label: 'Multi-branch Chains', desc: 'Centralized dashboard to monitor all branches, compare sales, and manage menus from HQ.' },
          { label: 'Cloud Kitchens', desc: 'Handle multiple virtual brands from a single kitchen with separate KDS queues per brand.' },
          { label: 'Hotel Restaurants', desc: 'Integration with room billing systems for seamless in-room dining charges.' },
        ]
      },
      {
        title: 'Why DineIn Master?',
        items: [
          { label: 'Proven ROI', desc: 'Restaurants report 30% reduction in order errors and 25% faster table turnover within 60 days.' },
          { label: 'Local Support', desc: '24/7 dedicated support from our Barpeta, Assam engineering team.' },
          { label: 'Custom Development', desc: 'Fully customizable to your brand, menu structure, and operational workflow.' },
        ]
      }
    ]
  },

  {
    id: 'billing',
    filename: 'Billing-ERP-Brochure.pdf',
    title: 'Billing ERP',
    tagline: 'Financify POS',
    color: PURPLE,
    bgColor: ACCENT_PURPLE_BG,
    overview: `Financify POS is a high-performance Point-of-Sale and billing management solution designed for retail stores, wholesale businesses, and service enterprises. Built for speed and compliance, it converts complex billing workflows into one-click operations.`,
    sections: [
      {
        title: 'Core Features',
        items: [
          { label: '1-Click Invoice Generation', desc: 'Generate GST-compliant invoices in under 2 seconds with automatic item lookup, discount application, and tax calculation.' },
          { label: 'Automatic GST & VAT Calculations', desc: 'Supports CGST, SGST, IGST, and VAT rules. Auto-populates correct tax slabs based on HSN/SAC codes.' },
          { label: 'Daily Ledger Analytics', desc: 'Real-time profit & loss, cash flow summaries, and daily closing reports with visual charts.' },
          { label: 'Payment Gateway Integration', desc: 'Accept UPI, card, net banking, and cash with auto-reconciliation across payment modes.' },
          { label: 'Customer Credit Management', desc: 'Track customer outstanding balances, set credit limits, and send automated payment reminders.' },
          { label: 'Barcode & QR Scanning', desc: 'USB/Bluetooth barcode scanner support for rapid item entry; QR code generation for products.' },
        ]
      },
      {
        title: 'Technical Specifications',
        items: [
          { label: 'Architecture', desc: 'Desktop-first with cloud backup; works fully offline with auto-sync when connected.' },
          { label: 'Platforms', desc: 'Windows desktop application + web dashboard for management.' },
          { label: 'Database', desc: 'SQLite (local) synced to PostgreSQL (cloud).' },
          { label: 'Security', desc: 'PIN-based user access, transaction audit logs, role-based permissions.' },
          { label: 'Reports', desc: 'GSTR-1, GSTR-3B ready exports; Excel/PDF report generation.' },
        ]
      },
      {
        title: 'Use Cases',
        items: [
          { label: 'Retail Stores', desc: 'From single-counter shops to multi-counter supermarkets with centralized inventory.' },
          { label: 'Wholesale & Distribution', desc: 'Bulk billing, quantity-based pricing tiers, and party ledger management.' },
          { label: 'Service Businesses', desc: 'Service invoice creation with labor charges, spare parts, and warranty tracking.' },
        ]
      },
      {
        title: 'Business Benefits',
        items: [
          { label: 'Tax Ready', desc: '100% GST-compliant with one-click filing exports — no manual spreadsheet work.' },
          { label: 'Fast Billing', desc: 'Average billing time reduced from 4 minutes to under 30 seconds.' },
          { label: 'Error-Free', desc: 'Automated calculation eliminates human billing errors and disputes.' },
        ]
      }
    ]
  },

  {
    id: 'pharmacy',
    filename: 'Pharmacy-ERP-Brochure.pdf',
    title: 'Pharmacy ERP',
    tagline: 'PharmaFlow',
    color: CYAN,
    bgColor: ACCENT_CYAN_BG,
    overview: `PharmaFlow is Linkzen's specialized pharmacy management system — a regulatory-compliant, intelligent ERP built for retail pharmacies, hospital dispensaries, and wholesale drug distributors. It combines precision inventory control with drug safety intelligence.`,
    sections: [
      {
        title: 'Core Features',
        items: [
          { label: 'Live Batch & Stock Level Updates', desc: 'Track each medicine batch separately with real-time quantity updates on every sale and purchase.' },
          { label: 'Low Stock Triggers & Auto-Reorder', desc: 'Configure minimum stock thresholds; system auto-generates purchase orders to suppliers when stock falls below limit.' },
          { label: 'Expiry Date Tracking System', desc: 'Color-coded expiry alerts (30/60/90 day warnings) with automatic near-expiry product flagging.' },
          { label: 'Prescription Digital Archiving', desc: 'Scan and store doctor prescriptions digitally, linked to each sale record for compliance auditing.' },
          { label: 'Drug Interaction Alerts', desc: 'Built-in drug interaction database warns pharmacists of dangerous medication combinations at point of sale.' },
          { label: 'Schedule H/H1/X Drug Control', desc: 'Mandatory prescription validation and quantity limits enforced for controlled substances.' },
        ]
      },
      {
        title: 'Technical Specifications',
        items: [
          { label: 'Architecture', desc: 'Offline-capable desktop app with cloud backup and multi-terminal support.' },
          { label: 'Compliance', desc: 'CDSCO-compliant; supports Schedule H, H1, X drug regulations.' },
          { label: 'Database', desc: 'Drug database with 50,000+ medicines; regular regulatory updates.' },
          { label: 'Security', desc: 'SHA-256 encrypted prescription records; pharmacist-level access controls.' },
          { label: 'Integrations', desc: 'Supplier EDI, GSTN for billing, insurance claim portals.' },
        ]
      },
      {
        title: 'Use Cases',
        items: [
          { label: 'Retail Pharmacies', desc: 'Complete billing, stock, and prescription management for standalone pharmacies.' },
          { label: 'Hospital Dispensaries', desc: 'Ward-wise medicine dispensing with integration to patient management systems.' },
          { label: 'Wholesale Drug Distributors', desc: 'Bulk purchase management, distributor ledgers, and multi-branch stock transfers.' },
        ]
      },
      {
        title: 'Compliance & Safety',
        items: [
          { label: 'Zero Expired Medicine', desc: 'Automated expiry tracking ensures no expired medicine reaches customers.' },
          { label: 'Full Audit Trail', desc: 'Every transaction linked to staff ID and timestamp for regulatory inspections.' },
          { label: 'Drug Safety', desc: 'Real-time drug interaction checks prevent dangerous prescription combinations.' },
        ]
      }
    ]
  },

  {
    id: 'webdev',
    filename: 'WebDev-Brochure.pdf',
    title: 'Web Development',
    tagline: 'WebCraft Engine',
    color: PURPLE,
    bgColor: ACCENT_PURPLE_BG,
    overview: `Linkzen's WebCraft Engine service delivers enterprise-grade web development — from blazing-fast corporate websites to complex custom web portals. Our engineering team combines cutting-edge frontend technology with robust backend architecture to build scalable digital products.`,
    sections: [
      {
        title: 'Service Offerings',
        items: [
          { label: 'Corporate Website Development', desc: 'Professionally designed, SEO-optimized company websites with CMS integration, multi-language support, and analytics dashboards.' },
          { label: 'Custom Web Portal Development', desc: 'Complex multi-role portals — client portals, vendor management systems, admin dashboards — built to exact specifications.' },
          { label: 'E-Commerce Platforms', desc: 'Full-stack online stores with payment integration, inventory sync, and order management.' },
          { label: 'API Development & Integration', desc: 'RESTful and GraphQL API design, third-party API integrations, and microservices architecture.' },
          { label: 'Progressive Web Apps (PWA)', desc: 'Mobile-first, installable web applications with offline capabilities and push notifications.' },
          { label: 'UI/UX Design', desc: 'Research-driven interface design with wireframing, prototyping, and user testing.' },
        ]
      },
      {
        title: 'Technology Stack',
        items: [
          { label: 'Frontend', desc: 'React.js, Next.js, Vue.js — modern frameworks with TypeScript for type-safe development.' },
          { label: 'Backend', desc: 'Node.js, Python (Django/FastAPI), PHP (Laravel) based on project requirements.' },
          { label: 'Database', desc: 'PostgreSQL, MongoDB, MySQL with Redis caching for high-performance applications.' },
          { label: 'DevOps', desc: 'CI/CD pipelines, Docker containerization, AWS/Azure/GCP cloud deployment.' },
          { label: 'Performance', desc: 'Google PageSpeed 90+ scores, Core Web Vitals optimized, CDN-accelerated delivery.' },
        ]
      },
      {
        title: 'Development Process',
        items: [
          { label: 'Discovery & Planning', desc: 'Requirements gathering, technical architecture design, and project roadmap creation.' },
          { label: 'Design Phase', desc: 'Wireframes, UI mockups, and design system creation with client approval at each stage.' },
          { label: 'Development', desc: 'Agile sprints with weekly demos, code reviews, and continuous testing.' },
          { label: 'Deployment & Support', desc: '3 months free post-launch support, 99.9% uptime SLA, and performance monitoring.' },
        ]
      },
      {
        title: 'Our Commitment',
        items: [
          { label: 'SEO-First Approach', desc: 'Every project built with technical SEO best practices from day one.' },
          { label: 'Mobile-First Design', desc: 'Fully responsive across all devices — tested on 50+ screen sizes.' },
          { label: 'Ownership', desc: 'Full source code ownership, no vendor lock-in. You own everything we build.' },
        ]
      }
    ]
  },

  {
    id: 'ecommerce',
    filename: 'Ecommerce-ERP-Brochure.pdf',
    title: 'E-Commerce Software',
    tagline: 'CartEngine',
    color: CYAN,
    bgColor: ACCENT_CYAN_BG,
    overview: `CartEngine is Linkzen's complete e-commerce platform solution — a high-performance, feature-rich online selling system built for businesses of all sizes. From single-product stores to multi-vendor marketplaces, CartEngine provides everything needed to sell online at scale.`,
    sections: [
      {
        title: 'Core Features',
        items: [
          { label: 'High-Speed Product Listings', desc: 'Bulk product upload (CSV/Excel), variant management (size, color, weight), and category organization with smart search.' },
          { label: 'Interactive Shopping Cart Module', desc: 'Persistent cart with saved items, quantity updates, coupon application, and abandoned cart recovery emails.' },
          { label: 'Secure Checkout Pipeline', desc: 'Multi-step checkout with address management, delivery slot selection, and order summary confirmation.' },
          { label: 'Auto-Generated Invoice Emails', desc: 'Professional invoice PDFs automatically emailed to customers on order confirmation and delivery.' },
          { label: 'Inventory & Warehouse Management', desc: 'Real-time stock tracking across multiple warehouses with low-stock alerts and auto-reorder triggers.' },
          { label: 'Multi-Payment Gateway Support', desc: 'UPI, credit/debit cards, net banking, COD, and EMI options through Razorpay, PayTM, Stripe integration.' },
        ]
      },
      {
        title: 'Technical Specifications',
        items: [
          { label: 'Architecture', desc: 'Headless e-commerce architecture — decoupled frontend for maximum performance and flexibility.' },
          { label: 'Performance', desc: 'Sub-2 second page loads; handles 10,000+ concurrent users with auto-scaling.' },
          { label: 'Mobile', desc: 'Native iOS and Android apps available; PWA support for lightweight mobile experience.' },
          { label: 'Security', desc: 'PCI DSS compliant payment processing; SSL encryption; fraud detection algorithms.' },
          { label: 'SEO', desc: 'Server-side rendering, structured data markup, sitemap generation, and canonical URL management.' },
        ]
      },
      {
        title: 'Seller Tools',
        items: [
          { label: 'Vendor Dashboard', desc: 'Complete analytics — revenue, orders, top products, customer insights, and conversion funnels.' },
          { label: 'Marketing Tools', desc: 'Built-in email campaigns, discount codes, flash sale scheduler, and loyalty points system.' },
          { label: 'Shipping Integration', desc: 'Delhivery, BlueDart, Shiprocket integration with real-time tracking updates to customers.' },
        ]
      },
      {
        title: 'Business Impact',
        items: [
          { label: 'Conversion Optimized', desc: 'Checkout optimized to reduce cart abandonment — average 3.5% conversion rate for our clients.' },
          { label: 'Scalable', desc: 'Start with a basic store and scale to a full multi-vendor marketplace without migration.' },
          { label: 'Analytics-Driven', desc: 'Google Analytics 4, Meta Pixel, and custom event tracking built in from day one.' },
        ]
      }
    ]
  },
];

// ─── PDF Builder ─────────────────────────────────────────────────────────────
function buildPDF(product) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 0, bufferPages: true });
    const filePath = path.join(outputDir, product.filename);
    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    const W = 595.28;   // A4 width
    const H = 841.89;   // A4 height
    const ML = 50;      // margin left
    const MR = W - 50;  // margin right
    const CW = MR - ML; // content width

    // ── COVER PAGE ──────────────────────────────────────────────────────────
    // Dark background
    doc.rect(0, 0, W, H).fill('#080B12');

    // Accent gradient strip (top)
    doc.rect(0, 0, W, 6).fill(product.color);

    // Company branding block
    doc.fontSize(10).fillColor(product.color).font('Helvetica-Bold')
       .text('LINKZEN TECHNOLOGY AND RESEARCH CENTRE', ML, 50, { width: CW, align: 'left' });

    doc.moveTo(ML, 68).lineTo(MR, 68).lineWidth(0.5).strokeColor(product.color).stroke();

    doc.fontSize(9).fillColor('#9CA3AF').font('Helvetica')
       .text('GSTIN: 18AAFAL0308L1ZN  |  UDYAM: AS-02-0046184  |  PAN: AAFAL0308L', ML, 76, { width: CW });

    // Large product hero area
    const heroY = 160;
    doc.rect(ML - 10, heroY - 20, CW + 20, 220).fill(product.bgColor);

    // Tagline
    doc.fontSize(11).fillColor(product.color).font('Helvetica-Bold')
       .text(product.tagline.toUpperCase(), ML + 10, heroY + 10, { width: CW, align: 'left', characterSpacing: 2 });

    // Product Title
    doc.fontSize(42).fillColor('#F3F4F6').font('Helvetica-Bold')
       .text(product.title, ML + 10, heroY + 35, { width: CW, align: 'left' });

    // Horizontal rule
    doc.moveTo(ML + 10, heroY + 110).lineTo(ML + 10 + 60, heroY + 110)
       .lineWidth(3).strokeColor(product.color).stroke();

    // Overview text
    doc.fontSize(11).fillColor('#9CA3AF').font('Helvetica')
       .text(product.overview, ML + 10, heroY + 128, { width: CW - 20, align: 'left', lineGap: 4 });

    // PRD label bottom right
    doc.fontSize(9).fillColor(product.color).font('Helvetica-Bold')
       .text('PRODUCT REQUIREMENTS DOCUMENT', ML, H - 100, { width: CW, align: 'right', characterSpacing: 1.5 });

    doc.fontSize(9).fillColor('#6B7280').font('Helvetica')
       .text(`Version 1.0  |  Linkzen Technology & Research Centre  |  Barpeta, Assam`, ML, H - 82, { width: CW, align: 'right' });

    // Bottom accent bar
    doc.rect(0, H - 6, W, 6).fill(product.color);

    // ── CONTENT PAGES ────────────────────────────────────────────────────────
    product.sections.forEach((section, sIdx) => {
      doc.addPage();

      // Page background
      doc.rect(0, 0, W, H).fill('#080B12');
      doc.rect(0, 0, W, 6).fill(product.color);
      doc.rect(0, H - 6, W, 6).fill(product.color);

      // Header strip
      doc.rect(0, 6, W, 42).fill('#0F1424');
      doc.fontSize(9).fillColor(product.color).font('Helvetica-Bold')
         .text('LINKZEN', ML, 18, {});
      doc.fontSize(9).fillColor('#6B7280').font('Helvetica')
         .text(product.title + ' — ' + product.tagline, ML + 55, 18, {});
      doc.fontSize(9).fillColor('#6B7280').font('Helvetica')
         .text(`Section ${sIdx + 1} of ${product.sections.length}`, 0, 18, { width: MR, align: 'right' });

      // Section Title
      let y = 75;
      // accent pill
      doc.rect(ML, y - 2, 4, 24).fill(product.color);
      doc.fontSize(18).fillColor('#F3F4F6').font('Helvetica-Bold')
         .text(section.title, ML + 14, y, { width: CW - 14 });

      y += 38;
      doc.moveTo(ML, y).lineTo(MR, y).lineWidth(0.5).strokeColor('#1E2A3A').stroke();
      y += 16;

      // Items
      section.items.forEach((item, iIdx) => {
        // Check if we need a new page
        if (y > H - 120) {
          doc.addPage();
          doc.rect(0, 0, W, H).fill('#080B12');
          doc.rect(0, 0, W, 6).fill(product.color);
          doc.rect(0, H - 6, W, 6).fill(product.color);
          y = 60;
        }

        // Item number badge
        doc.rect(ML, y, 22, 22).fill(product.bgColor);
        doc.fontSize(9).fillColor(product.color).font('Helvetica-Bold')
           .text(String(iIdx + 1).padStart(2, '0'), ML + 4, y + 6, { width: 14, align: 'center' });

        // Item label
        doc.fontSize(12).fillColor('#F3F4F6').font('Helvetica-Bold')
           .text(item.label, ML + 30, y + 4, { width: CW - 30 });

        y += 26;

        // Item description
        doc.fontSize(10.5).fillColor('#9CA3AF').font('Helvetica')
           .text(item.desc, ML + 30, y, { width: CW - 30, align: 'left', lineGap: 2 });

        // Estimate text height
        const textHeight = doc.heightOfString(item.desc, { width: CW - 30, lineGap: 2 });
        y += textHeight + 18;

        // Subtle divider
        if (iIdx < section.items.length - 1) {
          doc.moveTo(ML + 30, y - 10).lineTo(MR, y - 10).lineWidth(0.3).strokeColor('#1E2A3A').stroke();
        }
      });

      // Footer
      doc.fontSize(8).fillColor('#374151').font('Helvetica')
         .text(`© ${new Date().getFullYear()} Linkzen Technology And Research Centre  |  Confidential`, ML, H - 30, { width: CW, align: 'center' });
    });

    // ── CONTACT / BACK PAGE ──────────────────────────────────────────────────
    doc.addPage();
    doc.rect(0, 0, W, H).fill('#080B12');
    doc.rect(0, 0, W, 6).fill(product.color);
    doc.rect(0, H - 6, W, 6).fill(product.color);

    const cY = 200;
    doc.fontSize(24).fillColor('#F3F4F6').font('Helvetica-Bold')
       .text('Get Started with ' + product.tagline, ML, cY, { width: CW, align: 'center' });

    doc.fontSize(13).fillColor('#9CA3AF').font('Helvetica')
       .text('Contact our engineering team to schedule a free demo or request a custom quote.', ML, cY + 48, { width: CW, align: 'center', lineGap: 4 });

    // Contact boxes
    const boxW = (CW - 30) / 3;
    const bX = [ML, ML + boxW + 15, ML + (boxW + 15) * 2];
    const bY = cY + 120;

    [
      { icon: '☎', label: 'Phone', value: '+91 6002552415' },
      { icon: '✉', label: 'Email', value: 'Linkzen@support.in' },
      { icon: '⊙', label: 'Office', value: 'Barpeta, Assam' },
    ].forEach((c, i) => {
      doc.rect(bX[i], bY, boxW, 90).fill(product.bgColor);
      doc.fontSize(20).fillColor(product.color).font('Helvetica').text(c.icon, bX[i], bY + 12, { width: boxW, align: 'center' });
      doc.fontSize(9).fillColor('#6B7280').font('Helvetica-Bold').text(c.label.toUpperCase(), bX[i], bY + 44, { width: boxW, align: 'center', characterSpacing: 1 });
      doc.fontSize(10).fillColor('#F3F4F6').font('Helvetica').text(c.value, bX[i], bY + 60, { width: boxW, align: 'center' });
    });

    doc.fontSize(9).fillColor('#6B7280').font('Helvetica')
       .text('www.linkzentechnology.in  |  Mon–Sat, 9 AM – 6 PM IST', ML, H - 50, { width: CW, align: 'center' });

    doc.end();
    stream.on('finish', () => {
      console.log(`✅ Generated: ${product.filename}`);
      resolve();
    });
    stream.on('error', reject);
  });
}

// ─── Run ─────────────────────────────────────────────────────────────────────
(async () => {
  console.log('\n🚀 Generating PRD Brochures for all Linkzen products...\n');
  for (const p of products) {
    await buildPDF(p);
  }
  console.log('\n✅ All PDFs generated in /public\n');
})();
