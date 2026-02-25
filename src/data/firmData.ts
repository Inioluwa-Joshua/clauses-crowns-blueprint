import { StaticImageData } from "next/image";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";

export interface TeamMember {
  name: string;
  role: string;
  image: string | StaticImageData;
}

export const teamMembers: TeamMember[] = [
  { name: "Adebayo Ogunlesi, SAN", role: "Managing Partner", image: team1 },
  {
    name: "Chidinma Nwosu",
    role: "Head of Corporate & Commercial",
    image: team2,
  },
  {
    name: "Oluwaseun Adeyemi",
    role: "Senior Associate — Real Estate",
    image: team3,
  },
  { name: "Ngozi Ekechi", role: "Associate — Startup Advisory", image: team4 },
  { name: "Emeka Obiora, SAN", role: "Of Counsel", image: team5 },
  {
    name: "Folake Adesanya",
    role: "Senior Associate — Litigation",
    image: team6,
  },
];

export interface PracticeArea {
  title: string;
  description: string;
  icon: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    title: "Startup Advisory",
    description:
      "We partner with founders and investors to navigate incorporation, fundraising, intellectual property protection, regulatory compliance, and strategic growth.",
    icon: "Rocket",
  },
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
];

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "navigating-nigerias-new-cama",
    title: "Navigating Nigeria's New Companies and Allied Matters Act",
    excerpt:
      "An in-depth analysis of the key amendments under CAMA 2020 and their implications for businesses operating in Nigeria.",
    content: [
      "The Companies and Allied Matters Act (CAMA) 2020 represents the most significant reform of Nigerian business law in three decades. It introduces several provisions aimed at improving the ease of doing business and enhancing corporate governance.",
      "Key changes include the introduction of single-member companies, the recognition of electronic signatures, and the replacement of the common seal. Furthermore, the act provides for the virtual general meetings for private companies, which has become essential in the post-pandemic era.",
      "For small companies, the audit requirement has been abolished, significantly reducing the compliance burden. The act also introduces the concept of Limited Liability Partnerships (LLPs) and Limited Partnerships (LPs), providing more options for business structures in Nigeria.",
    ],
    date: "February 10, 2026",
    category: "Corporate",
    featured: true,
  },
  {
    id: "2",
    slug: "real-estate-due-diligence-lagos",
    title: "Real Estate Due Diligence in Lagos: A Comprehensive Guide",
    excerpt:
      "Essential steps and legal considerations for conducting due diligence on property transactions in Lagos State.",
    content: [
      "Lagos is Nigeria's most vibrant real estate market, but it also presents unique legal challenges. Conducting thorough due diligence is non-negotiable for any investor or prospective homeowner.",
      "The process starts with a search at the Land Registry to verify the title and ensure there are no existing encumbrances or litigation. It's also crucial to verify the physical boundaries of the land and ensure it matches the survey plan lodged with the government.",
      "Beyond title verification, investors must assess zoning regulations and governor's consent requirements. Failure to obtain the necessary approvals can lead to the revocation of title or demolition of structures built on the land.",
    ],
    date: "January 28, 2026",
    category: "Real Estate",
    featured: true,
  },
  {
    id: "3",
    slug: "venture-capital-africa-legal-frameworks",
    title: "Venture Capital in Africa: Legal Frameworks and Opportunities",
    excerpt:
      "Exploring the evolving legal landscape for venture capital investments across the African continent.",
    content: [
      "Africa's tech ecosystem has seen explosive growth, attracting significant venture capital from around the world. However, the legal frameworks governing these investments vary widely across different jurisdictions.",
      "In markets like Nigeria, Kenya, and Egypt, new 'Startup Acts' are being implemented to provide tax incentives and regulatory clarity for founders and investors. These laws are designed to foster innovation and reduce the friction associated with cross-border investments.",
      "Investors must navigate complex intellectual property laws, foreign exchange regulations, and exit strategies. Understanding the local legal nuances is critical for successful long-term partnerships in the African venture space.",
    ],
    date: "January 15, 2026",
    category: "Corporate",
    featured: true,
  },
  {
    id: "4",
    slug: "arbitration-vs-litigation-dispute-resolution",
    title:
      "Arbitration vs Litigation: Choosing the Right Dispute Resolution Path",
    excerpt:
      "A comparative analysis of arbitration and litigation as dispute resolution mechanisms in Nigerian commercial law.",
    content: [
      "When business disputes arise, choosing between litigation and arbitration can have significant implications for time, cost, and confidentiality.",
      "Litigation in Nigeria can be a lengthy process, often spanning several years through the appellate levels. While it provides a public record and binding precedent, the delays can be detrimental to commercial interests.",
      "Arbitration offers a more flexible and private alternative. Parties can choose experts in the relevant field to adjudicate the dispute, and the process is generally faster than traditional court systems. Most modern commercial contracts now include arbitration clauses as the primary means of resolution.",
    ],
    date: "December 20, 2025",
    category: "Dispute Resolution",
  },
  {
    id: "5",
    slug: "data-protection-compliance-nigeria",
    title: "Data Protection Compliance for Nigerian Businesses",
    excerpt:
      "Understanding the Nigeria Data Protection Regulation and its requirements for data controllers and processors.",
    content: [
      "The Nigeria Data Protection Regulation (NDPR) has transformed how businesses handle personal information. Compliance is no longer optional; it is a critical aspect of risk management.",
      "Organizations must implement technical and organizational measures to protect data, including regular audits and the appointment of Data Protection Officers (DPOs). The regulation applies to all organizations that process the personal data of Nigerian citizens, regardless of where the organization is located.",
      "Non-compliance can lead to heavy fines and reputational damage. Beyond legal requirements, robust data protection builds trust with customers and partners in the digital economy.",
    ],
    date: "December 5, 2025",
    category: "Corporate",
  },
  {
    id: "6",
    slug: "construction-law-managing-risk",
    title: "Construction Law: Managing Risk in Large-Scale Projects",
    excerpt:
      "Key contractual provisions and legal strategies for mitigating risk in major construction projects in Nigeria.",
    content: [
      "Large-scale construction projects are inherently risky, involving multiple stakeholders, long timelines, and significant capital. Effective contract management is the foundation of risk mitigation.",
      "Standard form contracts, such as those provided by FIDIC, are commonly used but must be tailored to the local legal and regulatory environment in Nigeria. Key areas of focus include delay damages, variations, and dispute resolution mechanisms.",
      "Proper insurance coverage and performance bonds are also essential components of a risk management strategy. Ensuring that all permits and approvals are in place before commencement can prevent costly delays and legal disputes.",
    ],
    date: "November 18, 2025",
    category: "Real Estate",
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
