import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  { name: "Adebayo Ogunlesi, SAN", role: "Managing Partner", image: team1 },
  { name: "Chidinma Nwosu", role: "Head of Corporate & Commercial", image: team2 },
  { name: "Oluwaseun Adeyemi", role: "Senior Associate — Real Estate", image: team3 },
  { name: "Ngozi Ekechi", role: "Associate — Startup Advisory", image: team4 },
  { name: "Emeka Obiora, SAN", role: "Of Counsel", image: team5 },
  { name: "Folake Adesanya", role: "Senior Associate — Litigation", image: team6 },
];

export interface PracticeArea {
  title: string;
  description: string;
  icon: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    title: "Corporate & Commercial Law",
    description:
      "We advise on mergers and acquisitions, joint ventures, corporate restructuring, regulatory compliance, and complex commercial transactions across diverse industries.",
    icon: "Building2",
  },
  {
    title: "Real Estate & Construction",
    description:
      "Our team provides comprehensive legal counsel on property acquisitions, construction contracts, land use planning, real estate finance, and dispute resolution.",
    icon: "Home",
  },
  {
    title: "Startup Advisory",
    description:
      "We partner with founders and investors to navigate incorporation, fundraising, intellectual property protection, regulatory compliance, and strategic growth.",
    icon: "Rocket",
  },
];

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Navigating Nigeria's New Companies and Allied Matters Act",
    excerpt:
      "An in-depth analysis of the key amendments under CAMA 2020 and their implications for businesses operating in Nigeria.",
    date: "February 10, 2026",
    category: "Corporate Law",
    featured: true,
  },
  {
    id: "2",
    title: "Real Estate Due Diligence in Lagos: A Comprehensive Guide",
    excerpt:
      "Essential steps and legal considerations for conducting due diligence on property transactions in Lagos State.",
    date: "January 28, 2026",
    category: "Real Estate",
    featured: true,
  },
  {
    id: "3",
    title: "Venture Capital in Africa: Legal Frameworks and Opportunities",
    excerpt:
      "Exploring the evolving legal landscape for venture capital investments across the African continent.",
    date: "January 15, 2026",
    category: "Startup Advisory",
    featured: true,
  },
  {
    id: "4",
    title: "Arbitration vs Litigation: Choosing the Right Dispute Resolution Path",
    excerpt:
      "A comparative analysis of arbitration and litigation as dispute resolution mechanisms in Nigerian commercial law.",
    date: "December 20, 2025",
    category: "Dispute Resolution",
  },
  {
    id: "5",
    title: "Data Protection Compliance for Nigerian Businesses",
    excerpt:
      "Understanding the Nigeria Data Protection Regulation and its requirements for data controllers and processors.",
    date: "December 5, 2025",
    category: "Regulatory",
  },
  {
    id: "6",
    title: "Construction Law: Managing Risk in Large-Scale Projects",
    excerpt:
      "Key contractual provisions and legal strategies for mitigating risk in major construction projects in Nigeria.",
    date: "November 18, 2025",
    category: "Construction",
  },
];

export interface GlobalInsight {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  region: string;
}

export const globalInsights: GlobalInsight[] = [
  {
    id: "1",
    title: "AfCFTA Implementation: Progress and Legal Implications",
    excerpt:
      "Assessing the African Continental Free Trade Area's impact on cross-border commerce and legal harmonisation across the continent.",
    date: "February 5, 2026",
    region: "Africa",
  },
  {
    id: "2",
    title: "ESG Regulations in Emerging Markets: A Comparative View",
    excerpt:
      "How environmental, social, and governance frameworks are shaping corporate responsibility in developing economies.",
    date: "January 20, 2026",
    region: "Global",
  },
  {
    id: "3",
    title: "International Arbitration Trends: London, Singapore, and Lagos",
    excerpt:
      "A comparative analysis of arbitration centres and their growing relevance for African disputes.",
    date: "January 8, 2026",
    region: "International",
  },
  {
    id: "4",
    title: "Foreign Direct Investment in West Africa: Legal Considerations",
    excerpt:
      "Navigating the regulatory landscape for foreign investors seeking opportunities in the West African region.",
    date: "December 15, 2025",
    region: "West Africa",
  },
];
