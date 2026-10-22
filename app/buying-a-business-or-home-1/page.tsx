import { DecisionGuidePage } from "@/components/site/decision-guide-page";

export default function BuyingGuidePage() {
  return <DecisionGuidePage
    eyebrow="Buying guidance"
    title="Buy with the right information in front of you."
    intro="Apex helps buyers prepare, evaluate opportunities, and move through the process with clear advice and steady support."
    businessTitle="Buying a business"
    businessSections={[
      { title: "Analyze and prepare", description: "Start with an industry you understand and a business that matches your skills, experience, and goals." },
      { title: "Understand why it is for sale", description: "Understanding the owner’s reason for selling helps you assess the opportunity, its potential, and the work needed to move it forward." },
      { title: "Evaluate the valuation", description: "Review financial statements, future projections, earnings, and valuation methods to decide whether the asking price is justified." },
      { title: "Prepare a letter of intent", description: "A nonbinding letter of intent communicates your offer and can help secure your position while the details are evaluated." },
      { title: "Complete due diligence", description: "Examine legal, tax, financial, and operating records carefully so costly surprises do not appear after the acquisition." },
      { title: "Secure financing", description: "Organize a business plan, profit and loss statements, bank statements, tax returns, and other documents needed by lenders or SBA programs." },
      { title: "Prepare documents and close", description: "Apex coordinates information with accountants, attorneys, and lenders to keep closing documents and logistics moving smoothly." },
    ]}
    homeTitle="Buying a home"
    homeSections={[
      { title: "Choose the right Realtor", description: "An Apex Realtor evaluates your goals, explains the process, and builds a strategy around your market, home, and timeline." },
      { title: "Get mortgage pre-approval", description: "Pre-approval clarifies your borrowing capacity and strengthens your position when you find the right home." },
      { title: "Set a realistic budget", description: "Plan for the down payment, closing costs, property taxes, maintenance, and the other costs of ownership." },
      { title: "See the home", description: "Your Realtor coordinates showings and open houses, manages feedback, and keeps the search focused on your priorities." },
      { title: "Complete a home inspection", description: "A professional inspection helps uncover repairs or red flags before you commit to the purchase." },
      { title: "Compare rates and programs", description: "Compare lenders, interest rates, fees, and first-time buyer programs to find the strongest financing fit." },
      { title: "Review and negotiate the offer", description: "Make a logical offer based on value, facts, contingencies, financing, and long-term goals rather than emotion alone." },
    ]}
  />;
}
