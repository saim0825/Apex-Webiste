import { DecisionGuidePage } from "@/components/site/decision-guide-page";

export default function SellingGuidePage() {
  return <DecisionGuidePage
    eyebrow="Selling guidance"
    title="Sell with a strategy built around your goals."
    intro="Apex prepares the opportunity, reaches qualified buyers, and guides the transaction from the first conversation through closing."
    businessTitle="Selling a business"
    businessSections={[
      { title: "Analyze and prepare the business", description: "Apex works with your trusted advisers to prepare the business for sale and present the details buyers need to see." },
      { title: "Estimate value and structure the deal", description: "We provide an opinion of value and present deal structures for you and your financial advisers to consider." },
      { title: "Develop the marketing assets", description: "Our team creates confidential business profiles, reviews, and supporting materials designed to attract serious buyers." },
      { title: "Manage buyers and evaluate offers", description: "We help solicit strong offers, compare the pros and cons of each, and choose the structure that best supports your upside." },
      { title: "Facilitate due diligence", description: "Once an offer is accepted, Apex manages controlled information sharing with accountants, attorneys, and lenders to keep the deal focused." },
      { title: "Prepare documents and close", description: "We coordinate closing documents, information exchange, and logistics so the transition stays efficient and organized." },
    ]}
    homeTitle="Selling a home"
    homeSections={[
      { title: "Choose the right Realtor", description: "An Apex Realtor evaluates your goals, explains the selling process, and creates a strategy for your home and timeline." },
      { title: "Price the home accurately", description: "A comparative market analysis uses recent sales, market conditions, and buyer demand to set a competitive listing price." },
      { title: "Prepare and stage the home", description: "Apex advises on repairs, improvements, and staging so the property is ready to stand out to qualified buyers." },
      { title: "Market the property", description: "Professional photography, online listings, open houses, digital advertising, and agent-to-agent promotion build exposure." },
      { title: "Show the home", description: "Your Realtor coordinates showings, open houses, feedback, and presentation throughout the listing period." },
      { title: "Review and negotiate offers", description: "We help evaluate price, contingencies, financing, and timelines to secure the best overall terms." },
      { title: "Manage inspection and appraisal", description: "Apex coordinates inspections and appraisals, negotiates repair requests, and keeps the transaction on track." },
      { title: "Close the sale", description: "We guide the final paperwork and coordination with attorneys, lenders, and title companies through a smooth closing." },
    ]}
  />;
}
