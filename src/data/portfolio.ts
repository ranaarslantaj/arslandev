// Portfolio data — single source of truth

export const personalInfo = {
  name: "Muhammad Arslan",
  firstName: "Muhammad",
  lastName: "Arslan",
  title: "Web / Frontend Developer",
  subtitle: "WordPress · React · Next.js",
  email: "ranaarslantaj@gmail.com",
  phone: "+92 306 1597797",
  linkedin: "ranaarslantajj",
  linkedinUrl: "https://linkedin.com/in/ranaarslantajj",
  github: "github.com/arslandev",
  experience: "2.5+",
  location: "Islamabad, Pakistan",
  bio: `I am a web and frontend developer with over 2.5 years of experience building fast, mobile-first, and SEO-ready websites. My core expertise centers on WordPress, WooCommerce, and modern JavaScript frameworks like React and Next.js. I have delivered solutions for businesses worldwide, ranging from custom e-commerce stores to high-traffic streaming platforms.

Alongside web development, my work as a Technical Consultant in enterprise performance monitoring—using tools like Dynatrace and SolarWinds—gives me a unique technical edge. I do not just build interfaces; I understand what happens under the hood. Whether collaborating with distributed engineering teams or helping independent business owners scale online, I focus on clean code, dependable delivery, and measurable business growth.`,
};

export const stats = [
  { label: "Years Experience", value: "2.5+" },
  { label: "Projects Delivered", value: "20+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Countries Served", value: "5+" },
];

export const skills = {
  Frontend: [
    "HTML5 / CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Responsive Design",
    "Mobile-First",
  ],
  "CMS & E-Commerce": [
    "WordPress",
    "Elementor Pro",
    "WPBakery",
    "Divi",
    "WooCommerce",
    "Shopify",
    "Wix",
    "GoHighLevel",
  ],
  "Cloud & Monitoring": [
    "Dynatrace",
    "SolarWinds",
    "AWS EC2 / S3 / RDS",
    "Firebase",
    "OneAgent Deployment",
  ],
  "Tools & Methods": [
    "Git / GitHub",
    "Figma-to-Web",
    "Core Web Vitals",
    "On-Page Technical SEO",
    "Speed Optimization",
    "REST APIs",
  ],
};

export const services = [
  {
    icon: "🌐",
    title: "Custom WordPress & WooCommerce",
    desc: "Bespoke, responsive websites with seamless payment integrations, automated customer journeys, and scalable store architectures.",
  },
  {
    icon: "⚛️",
    title: "React / Next.js Development",
    desc: "Lightning-fast, dynamic user interfaces with clean component architecture, server-side rendering, and superior user engagement.",
  },
  {
    icon: "⚡",
    title: "Speed & Core Web Vitals",
    desc: "Eliminate slow load times using enterprise-grade monitoring insights. Improve rankings, reduce bounce rates, and convert more visitors.",
  },
  {
    icon: "🎨",
    title: "Figma-to-Web Implementation",
    desc: "Pixel-perfect, accessible, cross-browser compatible conversion of design mockups across all mobile, tablet, and desktop viewports.",
  },
  {
    icon: "🔍",
    title: "Technical SEO & Architecture",
    desc: "Semantic markup, fast indexability, and clean URL hierarchies that give search engines everything they need to rank your content higher.",
  },
  {
    icon: "🔗",
    title: "CMS Migration & Integration",
    desc: "Seamlessly migrate across WordPress, Shopify, Wix, and GoHighLevel with marketing funnels, booking systems, and CRM workflows.",
  },
];

export const experience = [
  {
    role: "Junior Technical Consultant",
    company: "Synergy Computers (Pvt) Ltd",
    location: "Islamabad",
    period: "Jul 2026 – Present",
    color: "#7c6fe0",
    bullets: [
      "Deployed Dynatrace OneAgent across distributed environments, reducing diagnostic time for critical incidents by [PLACEHOLDER]%.",
      "Executed distributed trace and log analyses to identify root causes of latency, improving system availability to [PLACEHOLDER]%.",
      "Built centralized SolarWinds and Dynatrace alerting dashboards, enabling proactive resolution of performance bottlenecks.",
    ],
  },
  {
    role: "WordPress Developer / Optimization",
    company: "Digistartup Group",
    location: "Remote",
    period: "Jan 2025 – Apr 2026",
    color: "#4ecdc4",
    bullets: [
      "Developed responsive WordPress/Elementor websites from Figma designs, ensuring 100% cross-device compatibility.",
      "Spearheaded speed and SEO optimization, boosting average Google PageSpeed scores from [PLACEHOLDER] to [PLACEHOLDER].",
      "Built WooCommerce stores and SaaS landing pages, increasing user conversion rates by [PLACEHOLDER]%.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote (International)",
    period: "Apr 2024 – Present",
    color: "#f5a623",
    bullets: [
      "Delivered custom web solutions for international clients, including multilingual storefronts and payment gateway integrations.",
      "Translated client requirements into high-performing websites with sub-[PLACEHOLDER]-second load times.",
      "Managed full technical lifecycle from wireframe translation to post-launch support and maintenance.",
    ],
  },
  {
    role: "AWS Intern",
    company: "NAVTTC",
    location: "Islamabad",
    period: "Mar 2024 – Jun 2024",
    color: "#ff6b6b",
    bullets: [
      "Configured scalable compute instances with EC2 and managed secure object storage using S3.",
      "Assisted in provisioning RDS instances, maintaining automated backups and data integrity.",
      "Applied cloud architectural fundamentals to streamline local-to-cloud application deployments.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "SamarMart",
    tagline: "UK wholesale e-commerce and dropshipping platform",
    url: "https://samarmart.uk",
    color: "#7c6fe0",
    bgAccent: "#ede9ff",
    tech: ["WordPress", "WooCommerce", "Role-Based Access", "PHP"],
    desc: "SamarMart needed a platform to handle wholesale orders and multi-tiered user access. I engineered a responsive storefront alongside role-based dashboards for admins and resellers, streamlining product onboarding and bulk purchasing.",
  },
  {
    id: 2,
    title: "Digistartup",
    tagline: "SaaS features and agency services showcase platform",
    url: "https://digistartup.io",
    color: "#4ecdc4",
    bgAccent: "#e6faf9",
    tech: ["WordPress", "Elementor Pro", "Booking", "SEO"],
    desc: "Built a high-converting agency site with SaaS showcases, service breakdowns, and automated appointment booking, streamlining inbound client consultations and reducing manual scheduling.",
  },
  {
    id: 3,
    title: "ELFA Electric",
    tagline: "Electric motorcycle brand with test-ride booking & savings calculator",
    url: "https://elfaelectric.com",
    color: "#f5a623",
    bgAccent: "#fff8ec",
    tech: ["WooCommerce", "WordPress", "Calculator", "Dealer Locator"],
    desc: "Developed an engaging brand portal with test-ride reservation scheduling, an interactive fuel-savings calculator, and a dynamic dealer locator — driving qualified test-ride bookings and in-store visits.",
  },
  {
    id: 4,
    title: "SoulSearch TV",
    tagline: "US streaming/OTT channel with bookable live readings",
    url: "https://soulsearch.tv",
    color: "#ff6b6b",
    bgAccent: "#fff0f0",
    tech: ["WordPress", "Video/OTT", "Appointment Booking", "CSS"],
    desc: "Combined digital media broadcasting with an automated scheduling system for live reader appointments, letting viewers transition seamlessly from watching content to booking paid one-on-one sessions.",
  },
  {
    id: 5,
    title: "Arabic IPTV",
    tagline: "Performance-tuned streaming service portal",
    url: "https://arabiskiptv.net",
    color: "#45b7d1",
    bgAccent: "#e8f7fc",
    tech: ["WordPress", "Speed Optimization", "Caching", "PHP"],
    desc: "Customized a high-traffic streaming portal with dedicated performance optimizations, structured navigation, and tailored plan selectors ensuring fast load times across all devices.",
  },
  {
    id: 6,
    title: "RT Movers UAE",
    tagline: "Moving and logistics service portal for Dubai",
    url: "https://rtmovers.ae",
    color: "#96ceb4",
    bgAccent: "#f0faf5",
    tech: ["WordPress", "Lead Capture", "Responsive Design"],
    desc: "Developed service catalog pages, location-specific inquiry flows, and clear CTAs for a mobile-first Dubai relocation company, improving navigation clarity and inquiry submission rates.",
  },
  {
    id: 7,
    title: "Salman Sports",
    tagline: "Athletic equipment and sportswear e-commerce store",
    url: "https://salmansports.com",
    color: "#dda0dd",
    bgAccent: "#fdf0ff",
    tech: ["WooCommerce", "Elementor Pro", "WordPress"],
    desc: "Contributed to a high-volume WooCommerce store, refining product filtering, checkout ergonomics, and mobile responsiveness to simplify catalog discovery and checkout experience.",
  },
  {
    id: 8,
    title: "Blue Hills Country Farms",
    tagline: "Real estate portal showcasing luxury farm plots",
    url: "https://bluehills.com.pk",
    color: "#7ec8a0",
    bgAccent: "#edfaf3",
    tech: ["WordPress", "Elementor", "Lead Capture", "Real Estate"],
    desc: "Created a property portal featuring master scheme layouts, interactive imagery, and comprehensive payment schedules, giving investors immediate access to critical plot details.",
  },
];

export const whyMe = [
  {
    icon: "📊",
    title: "Performance-Driven Engineering",
    desc: "Enterprise monitoring expertise (Dynatrace & SolarWinds) means I build sites that eliminate latency and pass Core Web Vitals.",
  },
  {
    icon: "🎯",
    title: "Business-Focused Execution",
    desc: "Every layout, CTA, and query is crafted to convert visitors into paying customers or qualified leads.",
  },
  {
    icon: "🌍",
    title: "Seamless Global Collaboration",
    desc: "Experienced with international client workflows, remote communication, and meeting tight sprint deadlines.",
  },
  {
    icon: "🔄",
    title: "End-to-End Delivery",
    desc: "From Figma translation to custom code, payment setup, speed tuning, and ongoing support — I manage the full lifecycle.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery & Alignment",
    desc: "We define your target audience, core objectives, brand requirements, and project scope.",
  },
  {
    step: "02",
    title: "Design Review & Architecture",
    desc: "I translate your Figma mockups into a responsive technical blueprint or clean component hierarchy.",
  },
  {
    step: "03",
    title: "Development & Integration",
    desc: "Clean, modern code with your CMS or frontend framework, payment gateways, and custom workflows.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    desc: "Cross-device testing, latency diagnostics, Core Web Vitals optimization, and SEO verification.",
  },
  {
    step: "05",
    title: "Launch & Handover",
    desc: "Zero-downtime deployment, admin walkthrough documentation, and ongoing technical support.",
  },
];
