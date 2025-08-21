export interface Service {
    id: string;
    name: string;
    summary: string;
    bullets: string[];
}

export const ServicesData: Service[] = [   
    {
        id: "sellers",
        name: "Sellers or ceding companies",
        summary:
        "Butterfly provides services for sellers and ceding companies, from block identification to transaction structuring.",
        bullets: [
            "Identify blocks or companies that could be marketed",
            "Identify potential risks, both to the transaction and afterwards, in disposing of business",
            "Advice on reorganizing prior to sale in order to optimize continuing operations",
            "Practical assistance in negotiating transaction terms and documents including reps & warranties",
        ],
    },
    {
        id: "buyers",
        name: "Buyers or Reinsurers",
        summary:
        "Guidance for potential acquirers and reinsurers, from target identification to negotiation and administration.",
        bullets: [
        "Identify potential target acquisitions",
        "Identify potential risks in a transaction",
        "Advice on optimizing transaction administration",
        "Assistance negotiating transaction terms and documents including reps & warranties",
        ],
    },
        {
        id: "reinsurance",
        name: "Reinsurance Transactions",
        summary:
        "Butterfly provides services for ceded, assumed, and retroceded reinsurance transactions, backed by decades of expertise.",
        bullets: [
        "Advice on proper structuring of arrangements",
        "Identify potential targets for reinsurance and reinsurers",
        "Assistance negotiating transaction terms and documents including reps & warranties",
        "Identify risks that could prevent or complicate transactions",
        ],
    },
    {
        id: "capital-planning",
        name: "Capital Planning",
        summary:
        "Advisory support to optimize corporate structures, business organization, and capital allocation.",
        bullets: [
        "Optimize capital allocation through structure and organization",
        "Use of reinsurance and M&A to improve capital position",
        "Practical means of managing capital",
        ],
    },
    {
        id: "expert-witness",
        name: "Expert Witness",
        summary:
        "Independent expertise and testimony across disputes, arbitration, and litigation in reinsurance matters.",
        bullets: [
        "Arbitration and litigation support",
        "Representation for reinsurers, ceding companies, regulators, and more",
        "Independent consulting and reports not involving testimony",
        "Active participation as part of a legal team",
        ],
    },
    {
        id: "arbitrator",
        name: "Reinsurance Arbitrator",
        summary:
        "John is currently pursuing certification by ARIAS to provide arbitration services.",
        bullets: [
        "Certification in progress (ARIAS)",
        "Arbitration in complex reinsurance matters",
        ],
    },
    {
        id: "strategic-planning",
        name: "Strategic Planning",
        summary:
        "Comprehensive strategy services to maximize returns and guide business direction.",
        bullets: [
        "Advice on optimizing return on capital",
        "Entering or exiting businesses",
        "Guidance on international operations",
        "Capital allocation strategies",
        ],
    },
    {
        id: "business-mgmt",
        name: "Business Management",
        summary:
        "Hands-on management support from profit improvement to staff performance and global expertise.",
        bullets: [
        "Profit improvement (close or grow lines of business)",
        "Turnarounds and refocusing business plans",
        "Improving staff performance with existing and new staff",
        "Establishing clear standards for staff",
        "Aligning business actions with corporate objectives",
        "US and global business expertise",
        ],
    },
    {
        id: "erm",
        name: "Enterprise Risk Management",
        summary:
        "Practical risk management advisory for executives and boards, delivered by a Chartered Enterprise Risk Analyst.",
        bullets: [
        "Practical advice on managing enterprise risk",
        "Advising executives and boards on pragmatic ERM",
        "Identification of risks and mitigants",
        ],
    },
]