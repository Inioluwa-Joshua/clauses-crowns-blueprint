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
  image: string;
  slug: string;
  content: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    title: "Business Advisory",
    description:
      "Strategic legal guidance for businesses at every stage of their lifecycle, from formation to scaling and market entry.",
    icon: "Briefcase",
    image: "/hero-practice.jpg",
    slug: "business-advisory",
    content: [
      "At Clauses & Crowns, we provide holistic business advisory services that go beyond traditional legal counsel. We partner with our clients to understand their commercial objectives and provide legal strategies that drive growth and mitigate risk.",
      "Our team advises on corporate governance, joint ventures, and strategic partnerships. We help businesses navigate the complexities of local and international markets, ensuring that their operations are built on a solid legal foundation.",
      "Whether you are a startup looking for your first round of funding or an established enterprise expanding into new territories, our experts provide the insights needed to make informed decisions and achieve long-term success.",
    ],
  },
  {
    title: "Tech Law",
    description:
      "Navigating the complex legal landscape of technology, including software licensing, fintech regulations, and digital transformation.",
    icon: "Cpu",
    image: "/hero-practice.jpg",
    slug: "tech-law",
    content: [
      "The technology sector moves at lightning speed, and our Tech Law practice is designed to keep pace with innovation. We advise tech companies, founders, and investors on the legal challenges unique to the digital age.",
      "Our expertise spans software licensing, SaaS agreements, and technology transfers. We have deep experience in the Fintech space, helping clients navigate the regulatory requirements of central banks and financial authorities.",
      "We also advise on emerging technologies such as blockchain, AI, and e-commerce. From drafting terms of service to handling complex tech-related disputes, we ensure your technology business is legally resilient and ready for scale.",
    ],
  },
  {
    title: "Immigration Law",
    description:
      "Comprehensive support for corporate and individual immigration, including visas, work permits, and residency requirements.",
    icon: "Globe",
    image: "/hero-practice.jpg",
    slug: "immigration-law",
    content: [
      "Navigating immigration laws can be a daunting process for both businesses and individuals. Our Immigration Law practice provides clear, efficient, and reliable support for all types of immigration matters.",
      "We assist multinational corporations in securing work permits and expatriate quotas for their staff. Our team handles the entire process, from initial applications to renewals and compliance audits, ensuring a smooth transition for your workforce.",
      "For individuals, we provide advice on residency, citizenship applications, and family reunification. We understand the personal importance of these matters and provide tailored guidance to help you achieve your immigration goals with confidence.",
    ],
  },
  {
    title: "Data Privacy",
    description:
      "Ensuring compliance with data protection regulations and safeguarding sensitive information in an increasingly digital world.",
    icon: "Shield",
    image: "/hero-practice.jpg",
    slug: "data-privacy",
    content: [
      "In an era of increasing digital threats and stringent regulations, data privacy is a top priority for every organization. We help clients navigate the complexities of data protection laws, including the NDPR and GDPR.",
      "Our services include conducting data privacy audits, drafting privacy policies, and advising on data breach response plans. We work closely with your IT and operations teams to ensure that data protection is integrated into your business processes.",
      "We also provide training for staff and advise on cross-border data transfers. By ensuring compliance, we not only protect you from legal penalties but also help you build trust with your customers and partners.",
    ],
  },
  {
    title: "Intellectual Property",
    description:
      "Protecting your innovations, trademarks, and creative works through registration, enforcement, and strategic advisory.",
    icon: "Lightbulb",
    image: "/hero-practice.jpg",
    slug: "intellectual-property",
    content: [
      "Your intellectual property is often your most valuable asset. Our IP practice is dedicated to protecting and maximizing the value of your innovations, brands, and creative outputs.",
      "We handle the registration of trademarks, patents, and designs both locally and internationally. Our team also advises on copyright protection and the management of IP portfolios, ensuring your brand identity remains secure.",
      "In the event of infringement, we provide robust enforcement services, including litigation and alternative dispute resolution. We also draft and negotiate licensing and franchising agreements to help you monetize your IP effectively.",
    ],
  },
  {
    title: "Real Estate",
    description:
      "Expert counsel on property acquisitions, developments, leasing, and resolving complex real estate disputes.",
    icon: "Home",
    image: "/hero-practice.jpg",
    slug: "real-estate",
    content: [
      "The real estate market offers significant opportunities but requires careful legal navigation. Our Real Estate practice provides comprehensive support for property transactions, developments, and management.",
      "We conduct thorough due diligence for property acquisitions, ensuring clear titles and compliance with zoning laws. Our team identifies potential risks early in the process, protecting your investment from future disputes.",
      "From drafting lease agreements to advising on large-scale construction projects and real estate financing, we cover every aspect of the property lifecycle. We also represent clients in property-related disputes, providing strategic counsel to achieve favorable resolutions.",
    ],
  },
  {
    title: "Company Secretarial",
    description:
      "Ensuring corporate compliance, board support, and regulatory filings to maintain your company's good standing.",
    icon: "FileText",
    image: "/hero-practice.jpg",
    slug: "company-secretarial",
    content: [
      "Maintaining good corporate standing is essential for any business. Our Company Secretarial services ensure that your organization remains compliant with all regulatory requirements and governance best practices.",
      "We handle the filing of annual returns, maintenance of statutory registers, and the scheduling of board and shareholder meetings. Our team provides professional minute-taking and ensures that all corporate actions are properly documented.",
      "Beyond routine filings, we offer strategic board advisory services, helping directors understand their duties and responsibilities. We act as a trusted partner, allowing your management team to focus on core business activities while we handle the administrative complexities.",
    ],
  },
  {
    title: "Administration of Estates",
    description:
      "Compassionate and expert legal assistance in probate, estate planning, and the distribution of assets.",
    icon: "Scale",
    image: "/hero-practice.jpg",
    slug: "administration-of-estates",
    content: [
      "Managing the affairs of a loved one can be emotionally and legally challenging. Our Administration of Estates practice provides compassionate and professional support to help you navigate the probate and distribution process.",
      "We assist in the drafting of wills, the creation of trusts, and comprehensive estate planning to ensure your assets are protected and your wishes are honored. Our goal is to provide peace of mind for you and your family.",
      "When the time comes, we guide executors and administrators through the probate process, handling all legal formalities and the distribution of assets to beneficiaries. We aim to resolve estate matters efficiently and with the utmost sensitivity.",
    ],
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
    category: "Business Advisory",
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
    category: "Business Advisory",
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
    category: "Data Privacy",
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
  {
    id: "7",
    slug: "intellectual-property-strategies-tech-startups",
    title: "IP Strategies for Tech Startups: Beyond Trademarks",
    excerpt:
      "How tech startups can leverage patents, trade secrets, and copyright to protect their innovations.",
    content: ["Content..."],
    date: "November 5, 2025",
    category: "Intellectual Property",
  },
  {
    id: "8",
    slug: "agriculture-investment-legal-risks",
    title: "Agriculture Investment in Nigeria: Navigating Legal Risks",
    excerpt:
      "Key legal considerations for investors looking to capitalize on Nigeria's agricultural sector.",
    content: ["Content..."],
    date: "October 28, 2025",
    category: "Agriculture",
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
