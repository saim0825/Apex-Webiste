export type ServiceSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ServiceContent = {
  title: string;
  eyebrow: string;
  description: string;
  body: string;
  sections: ServiceSection[];
};

export const siteServices: Record<string, ServiceContent> = {
  "residential-real-estate": {
    title: "Residential Real Estate",
    eyebrow: "Buying or selling your dream home",
    description: "Find your Dream Home",
    body: "We are here to help you find the perfect home that meets your needs and budget. Our team of experienced agents will guide you through the entire process, from searching for homes to closing the deal.",
    sections: [
      { heading: "Get a Free Home Valuation", paragraphs: ["If you are thinking of selling your home, we can provide you with a free home valuation to help you determine the best price for your property. Our team has a deep understanding of the local real estate market and can provide you with accurate and up-to-date information."] },
      { heading: "Connect with an Agent", paragraphs: ["Our team of agents is dedicated to providing you with the best possible service. Whether you are buying or selling a home, we will work tirelessly to ensure that your needs are met and that you have a hassle-free experience."] },
      { heading: "Explore Local Neighborhoods", paragraphs: ["We have a wealth of information on local neighborhoods, including schools, amenities, and real estate trends. Use our website to explore different neighborhoods and find the one that is right for you."] },
      { heading: "Stay Up-to-Date with the Latest Real Estate News", paragraphs: ["Our Social Media is a great resource for anyone interested in the real estate market. We provide regular updates on local market trends, tips for buyers and sellers, and much more."] },
      { heading: "Join Our Newsletter", paragraphs: ["Stay informed about the latest real estate news and trends by subscribing to our newsletter. We promise not to spam you and will only send you relevant and useful information."] },
    ],
  },
  "commercial-real-estate": {
    title: "Commercial Real Estate",
    eyebrow: "Commercial services",
    description: "Buying or selling a business",
    body: "We help find the commercial rental space that fits your budget and needs. Whether it be renewing or restructuring your current leases, we review and negotiate on behalf of our clients to maximize value.",
    sections: [
      { heading: "Commercial Tenant Representation Services", paragraphs: ["Looking to expand, relocate or open a business? We help find the commercial rental space that fits your budget and needs."], bullets: ["Investigate additional space alternatives", "Run comparisons and analyze financial commitments", "Negotiate with landlords for the client’s benefit", "Handle improvements, construction, or renovations", "Evaluate operating expenses and lease audits", "Provide a comprehensive property evaluation", "Evaluate and review lease contracts"] },
      { heading: "Landlord Representation", paragraphs: ["We have a proven track record representing landlords in the industrial and retail space verticals while protecting the value of their assets. Exceeding our clients’ expectations by increasing occupancy rates is one of our specialties."], bullets: ["Detailed and customized market analysis", "Create and implement strategic marketing plans", "Provide plans to enhance the value of the asset", "Review leasing documents and provide financial underwriting", "Create comprehensive traffic reports and industry-specific demographics"] },
      { heading: "Commercial Property Management", paragraphs: ["Our professionals provide property and construction management direction that leads clients into businesses that are efficient and profitable. We cover every aspect of the transaction from start to finish."], bullets: ["Financial analysis", "Overseeing and ensuring successful operations", "Construction management and improvement projects", "Construction and build-out management", "Maximizing return on investment"] },
      { heading: "Receivership Services", paragraphs: ["We provide a comprehensive solution for owners, lenders, and the courts."], bullets: ["Rapid rollout to stabilize operations and retain tenants", "Direction of the property management team", "Property-specific marketing, leasing, and sale strategies", "Strategic asset monetization plans", "Turnaround assistance for large property portfolios", "Lender and investor consultation", "Lender workout and restructuring advice", "Due diligence for commercial mortgage-backed securities", "Broker Opinions of Value", "REO asset management, leasing, redevelopment, or liquidation"] },
      { heading: "Commercial & Retail Leasing", bullets: ["Warehouse", "Commercial office space and lease workouts", "Franchise", "Purchase office buildings", "Purchase strip centers", "Retail or office lease renewals", "Vacant land purchase and development"] },
      { heading: "Apartment Buildings, Commercial Leases, Land, Hotels & Motels, Mobile Home Parks, Warehouses", paragraphs: ["We represent landlords, tenants, buyers, and sellers in the sales and leasing of office, retail, industrial, multi-family, and investment properties in Broward, Dade, and Palm Beach County."] },
    ],
  },
  "probate-services": {
    title: "Probate Services",
    eyebrow: "Compassionate estate guidance",
    description: "A trusted resource for families, executors, trustees, and legal professionals navigating probate.",
    body: "At Apex Real Estate Consultants, our mission is to provide compassionate, knowledgeable, and results-driven real estate and advisory services to families, executors, trustees, and legal professionals navigating the probate process.",
    sections: [
      { heading: "Our Mission", paragraphs: ["Probate is not merely a transaction, but a deeply personal and often emotional responsibility following the loss of a loved one. Our role is to reduce uncertainty, ease the burden on families, and protect estate assets at every stage.", "Our services include accurate property valuation, strategic listing and marketing, court-compliant transaction management, and coordination with attorneys, accountants, and other professionals. We also provide estate preservation and property management services, including property lock-down and security coordination, repairs and maintenance oversight, estate clean-outs, debris and trash hauling, and property preparation for sale or transfer."] },
      { heading: "Wide Range of Services", paragraphs: ["Our mission is grounded in education, transparency, and advocacy. We empower executors and heirs with clear guidance, realistic timelines, and strategic options so they can make confident, informed decisions during a challenging time."] },
      { heading: "Coordination with Personal Representatives & Probate Attorneys", paragraphs: ["We work closely with personal representatives and probate attorneys to ease the burden during an emotional time, ensuring clear communication and thoughtful handling of every detail."] },
      { heading: "Securing & Protecting the Home", paragraphs: ["We take immediate steps to protect the property, giving families peace of mind that the home is safe, cared for, and respected."] },
      { heading: "Home Clean-Out & Trash Hauling", paragraphs: ["We approach every clean-out with sensitivity, helping families sort, remove, and responsibly dispose of belongings with dignity and care."] },
      { heading: "Ongoing Property Maintenance", paragraphs: ["We manage routine upkeep to preserve the home’s condition and prevent unnecessary stress, so families do not have to worry about day-to-day responsibilities."] },
      { heading: "Repairs & Light Remodeling", paragraphs: ["When updates are needed, we coordinate trusted professionals and guide decisions thoughtfully, always focused on what best serves the estate."] },
      { heading: "Preparing the Home for Sale", paragraphs: ["We gently guide the process of preparing the home for market, helping present it in the best possible light while honoring its history."] },
      { heading: "Guidance Through Every Step", paragraphs: ["From start to finish, we provide steady guidance, clear updates, and compassionate support—so families never feel alone during the probate process."] },
    ],
  },
  "apex-guide": {
    title: "Apex Guide",
    eyebrow: "How we help",
    description: "A practical guide for making important property decisions.",
    body: "Apex Guide content is being prepared. Contact an Apex consultant for guidance tailored to your property goals.",
    sections: [],
  },
  "deal-structure": {
    title: "Deal Structure",
    eyebrow: "Commercial real estate strategy",
    description: "Understand the legal and financial framework behind a commercial real estate transaction.",
    body: "Deal structure refers to the legal and financial framework of a commercial real estate transaction. In investments involving multiple investors, partners, or real estate firms, it defines each party’s roles, responsibilities, rights, and economic interests.",
    sections: [
      { heading: "A Commercial Real Estate Deal Structure Typically Addresses", bullets: ["Property management responsibilities", "Cash flow distribution and profit splits", "Debt and loan obligation responsibility", "Risk allocation and financial liability", "Ownership percentages and control rights"] },
      { heading: "Why It’s Important", paragraphs: ["Understanding deal structure is critical for real estate investors because it directly impacts risk exposure, cash flow, and long-term returns. A clearly defined and well-aligned deal structure helps ensure transparency, accountability, and investor confidence throughout the life of the investment.", "Before committing capital, investors should carefully evaluate the deal structure to understand how profits are generated, how decisions are made, and how financial performance affects their returns.", "A clear deal structure ensures everyone understands their rights, responsibilities, and potential returns, preventing disputes and aligning incentives for a successful investment."] },
      { heading: "Comprehensive Market Analysis", paragraphs: ["Our team conducts a comprehensive market analysis to help you determine the best price for your property. We take into account factors such as location, size, condition, and recent sales to ensure that you get the most value for your investment."] },
    ],
  },
  "lease-negotation": {
    title: "Lease Negotiation",
    eyebrow: "Commercial real estate strategy",
    description: "Protect your business interests and define long-term obligations before a lease is finalized.",
    body: "Lease negotiation is the process by which tenants and landlords discuss and refine the terms of a rental agreement before it is finalized. In commercial real estate, many terms are negotiable beyond just rent.",
    sections: [
      { heading: "Key Areas of Lease Negotiation", bullets: ["Base rent and rent escalations", "Lease term and renewal options", "Tenant improvement or build-out allowances", "Maintenance and repair responsibilities", "Security deposits and guarantees", "Exit, expansion, and termination clauses"] },
      { heading: "Specialized Services", paragraphs: ["We offer specialized services such as property valuation, market analysis, and investment advice to help you make the best decisions for your real estate investments."] },
      { heading: "Comprehensive Solutions", paragraphs: ["Our comprehensive solutions include property management, sales, leasing, and more. We can handle all of your real estate needs under one roof."] },
    ],
  },
  "property-management": {
    title: "Property Management",
    eyebrow: "Commercial real estate services",
    description: "Professional management that protects property value, supports tenants, and improves long-term returns.",
    body: "Property management is the professional management of real estate on behalf of a property owner. It focuses on overseeing daily operations, maintaining the property, and maximizing its financial performance.",
    sections: [
      { heading: "Property Management in Commercial Real Estate", paragraphs: ["In commercial real estate, property management ensures that buildings operate efficiently while meeting tenant needs and owner objectives."] },
      { heading: "Core Property Management Responsibilities", bullets: ["Leasing and tenant relations", "Rent collection and financial reporting", "Maintenance, repairs, and vendor coordination", "Budgeting, expense control, and capital planning", "Lease compliance and regulatory oversight"] },
      { heading: "Innovative Technology", paragraphs: ["We use innovative technology to provide our clients with the best possible service. From virtual tours and 3D floor plans to online document signing and remote consultations, we make your real estate experience as seamless and efficient as possible."] },
    ],
  },
  "new-construction": {
    title: "New Construction",
    eyebrow: "Luxury South Florida development",
    description: "Invest in South Florida’s new construction market.",
    body: "In South Florida, new building projects go beyond simple architectural progress, representing a blend of creativity, artistry, and lifestyle evolution. Each home captures the opulent essence of the region, offering stunning ocean views, exceptional design, and a seamless integration of indoor and outdoor spaces.",
    sections: [
      { heading: "Innovation and Elegance", paragraphs: ["South Florida, stretching from the idyllic Keys, Miami and Fort Lauderdale to vibrant West Palm Beach, and the charming coastal cities of Naples and Fort Myers, is a beacon of innovation and elegance. This region attracts investors, families, and global entrepreneurs drawn to its unique blend of aesthetic allure and enduring value."] },
      { heading: "New Construction Transcends Lifestyle", paragraphs: ["Step into a fully completed masterpiece where there are no delays or uncertainties. Discover the seamless integration of smart home technology, wellness-focused design, and resort-style amenities that redefine luxury living.", "We partner with esteemed developers in South Florida known for their commitment to quality, timely delivery, and integrity. Global investors continue to seek opportunities for strong appreciation in brand-new luxury properties."] },
    ],
  },
};

export type ServiceSlug = keyof typeof siteServices;

