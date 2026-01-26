// Resources Data - Links and Glossary Terms

export interface ResourceLink {
  name: string;
  url: string;
}

export interface GlossaryEntry {
  term: string;
  definition: string;
}

export interface GlossarySection {
  letter: string;
  entries: GlossaryEntry[];
}

// Professional Organizations
export const professionalOrganizations: ResourceLink[] = [
  { name: "ACTEX Publications", url: "https://www.actexmadriver.com/" },
  { name: "Actuarial Standards Board", url: "https://www.actuarialstandardsboard.org/" },
  { name: "American Academy of Actuaries", url: "https://www.actuary.org/" },
  { name: "American Council of Life Insurers", url: "https://www.acli.com/" },
  { name: "AIDA Reinsurance and Insurance Arbitration Society-US", url: "https://www.arias-us.org/" },
  { name: "American Arbitration Association", url: "https://www.adr.org/" },
  { name: "Association for Cooperative Operations Research and Development", url: "https://www.acordloma.org/" },
  { name: "Assuris", url: "https://www.assuris.ca/" },
  { name: "Canada Revenue Agency", url: "https://www.canada.ca/en/revenue-agency.html" },
  { name: "Canadian Council of Insurance Regulators", url: "https://www.ccir-ccrra.org/" },
  { name: "Canadian Institute of Actuaries", url: "https://www.cia-ica.ca/" },
  { name: "Canadian Insurance Services Regulatory Organizations", url: "https://www.cisro-ocra.com/" },
  { name: "Canadian Life and Health Insurance Association", url: "https://www.clhia.ca/" },
  { name: "Canadian Reinsurance Conference", url: "https://www.canadianreinsuranceconference.com/" },
  { name: "European Union", url: "https://european-union.europa.eu/" },
  { name: "Financial Accounting Standards Board", url: "https://www.fasb.org/" },
  { name: "Government of Canada", url: "https://www.canada.ca/" },
  { name: "International Association of Insurance Supervisors", url: "https://www.iaisweb.org/" },
  { name: "International Financial Reporting Standards", url: "https://www.ifrs.org/" },
  { name: "Internal Revenue Service", url: "https://www.irs.gov/" },
  { name: "National Association of Insurance Commissioners", url: "https://www.naic.org/" },
  { name: "National Organization of Life and Health Insurance Guaranty Associations", url: "https://www.nolhga.com/" },
  { name: "Office of the Superintendent of Financial Institutions", url: "https://www.osfi-bsif.gc.ca/" },
  { name: "Organization for Economic Cooperation and Development", url: "https://www.oecd.org/" },
  { name: "Reinsurance Administration Professionals Association", url: "https://www.reinsadmin.org/" },
  { name: "Reinsurance Section, Society of Actuaries", url: "https://www.soa.org/sections/reinsurance/" },
  { name: "Reinsurance Association of America", url: "https://www.reinsurance.org/" },
  { name: "Society of Actuaries", url: "https://www.soa.org/" },
];

// International Regulatory Bodies
export const internationalRegulatoryBodies: ResourceLink[] = [
  { name: "Australian Prudential Regulatory Authority (APRA)", url: "https://www.apra.gov.au/" },
  { name: "Insurance Commission of the Bahamas", url: "https://www.icb.gov.bs/" },
  { name: "Barbados Financial Services Commission (FSC)", url: "https://www.fsc.gov.bb/" },
  { name: "Bermuda Monetary Authority (BMA)", url: "https://www.bma.bm/" },
  { name: "British Virgin Islands Financial Services Commission (FSC)", url: "https://www.bvifsc.vg/" },
  { name: "Cayman Islands Monetary Authority", url: "https://www.cima.ky/" },
  { name: "China Banking and Insurance Regulatory Commission", url: "http://www.cbirc.gov.cn/" },
  { name: "Germany: Federal Financial Supervisory Authority (BaFin)", url: "https://www.bafin.de/" },
  { name: "Guernsey Financial Services Commission", url: "https://www.gfsc.gg/" },
  { name: "Italy: Institute for Supervision of Insurance Companies (IVASS)", url: "https://www.ivass.it/" },
  { name: "Central Bank of Ireland", url: "https://www.centralbank.ie/" },
  { name: "Japan: Financial Services Agency", url: "https://www.fsa.go.jp/en/" },
  { name: "Luxembourg: Commissariat aux Assurances (CAA)", url: "https://www.caa.lu/" },
  { name: "Swiss Financial Market Supervisory Authority (FINMA)", url: "https://www.finma.ch/" },
  { name: "United Kingdom: Prudential Regulation Authority", url: "https://www.bankofengland.co.uk/prudential-regulation" },
];

// Glossary organized by letter
export const glossary: GlossarySection[] = [
  {
    letter: "A",
    entries: [
      {
        term: "Accredited Reinsurer",
        definition: "A reinsurer which is not licensed in a state may become accredited by showing that it meets the financial conditions of the state; it is licensed in at least one state; it submits to that state's jurisdiction and allows its books and records to be examined; and its directors and management personnel are of acceptable character and experience."
      },
      {
        term: "Acquisition Costs",
        definition: "Expenses incurred by an insurer or reinsurer in the process of writing business, including producer commissions. For some purposes, such as the NAIC and statutory financial reporting, acquisition costs are defined as being only first year acquisition-related expenses."
      },
      {
        term: "Actuarial Opinion",
        definition: "The statement signed by the appointed actuary attesting to the reserves based on an asset adequacy analysis performed in accordance to the applicable Actuarial Standards of Practice."
      },
      {
        term: "Actuarial Standards Board (ASB)",
        definition: "The Actuarial Standards Board is a body of actuaries charged with developing standards of actuarial standards of practice in the United States. ASB number 11 specifically addresses reinsurance transactions."
      },
      {
        term: "Actuarial Standards of Practice",
        definition: "Standards established by the Actuarial Standards Board that define what an actuary should consider, document, and disclose in performing actuarial duties in the US."
      },
      {
        term: "Admitted Assets",
        definition: "Cash and investments that meet criteria for liquidity and safety set by the National Association of Insurance Commissioners and by individual state commissioners. Only admitted assets are used in measuring the capacity and soundness of an insurer."
      },
      {
        term: "Admitted Reinsurance",
        definition: "Reinsurance that is provided by a reinsurer licensed, authorized or accredited in the jurisdiction in question. Ceding companies may automatically take credit in that jurisdiction for admitted reinsurance."
      },
      {
        term: "Aggregate Limit",
        definition: "The maximum sum of recoveries payable under those reinsurance agreements that provide an overall maximum loss limitation."
      },
      {
        term: "Aggregate Retention",
        definition: "A minimum retention sometimes kept by the ceding company of losses regardless of individual amounts that might otherwise be recoverable from the reinsurer. Only after the aggregate retention is exceeded can the ceding company recover from the reinsurer."
      },
      {
        term: "Alien Reinsurer",
        definition: "A non-U.S. domiciled reinsurer writing reinsurance in the U.S."
      },
      {
        term: "Alphabet Split",
        definition: "A method of allocating automatic reinsurance among several reinsurers. Using this method, each reinsurer is assigned a series of letters, and reinsurance is ceded based on the first letter of the insured's surname."
      },
      {
        term: "Appointed Actuary (AA)",
        definition: "The actuary who has the authority to opine on the adequacy of reserves and assets in the insurance company's annual statements."
      },
      {
        term: "Arbitration Clause",
        definition: "A provision in reinsurance agreements that provides for non-judicial but generally binding settlement of disputes between parties."
      },
      {
        term: "Assume",
        definition: "To accept or take over a risk from the ceding company, the converse of cede."
      },
      {
        term: "Assuming Company",
        definition: "See Reinsurer."
      },
      {
        term: "Assumption",
        definition: "A form of reinsurance under which policy administration and the contractual relationship with the insured, as well as all liabilities, are permanently passed to the reinsurer."
      },
      {
        term: "Assumption Certificates",
        definition: "The document given to the policyholders whose policies have been permanently transferred to another company in an assumption transaction."
      },
      {
        term: "Assumption Agreement",
        definition: "The contract between the transferring insurer and the assuming insurer that contains the provisions defining the terms of the agreement."
      },
      {
        term: "Attachment Basis",
        definition: "A provision in many stop loss reinsurance agreements that determines whether, and in what manner, a reinsurance agreement covers a specific loss."
      },
      {
        term: "Attachment Point",
        definition: "In a stop loss reinsurance arrangement, the attachment point is a specified amount of retained claims. The reinsurer reimburses the ceding company for a specified portion of all retained claims over this amount."
      },
      {
        term: "Authorized Reinsurer",
        definition: "A reinsurer which is licensed in the ceding company's state of domicile is said to be authorized."
      },
      {
        term: "Automatic Reinsurance",
        definition: "A reinsurance agreement under which the ceding company must cede and the reinsurer must accept all risks of a defined class."
      },
    ]
  },
  {
    letter: "B",
    entries: [
      {
        term: "Binding Authority",
        definition: "The authority granted to an agent or intermediary to accept risks on behalf of a reinsurer without prior approval."
      },
      {
        term: "Bordereaux",
        definition: "A report providing premium or loss data for specific risks ceded to a reinsurer. Plural: bordereau."
      },
      {
        term: "Broker",
        definition: "An intermediary who negotiates reinsurance contracts between ceding companies and reinsurers."
      },
      {
        term: "Bulk Reinsurance",
        definition: "A form of reinsurance where the ceding company transfers a block of in-force business to a reinsurer."
      },
    ]
  },
  {
    letter: "C",
    entries: [
      {
        term: "Capacity",
        definition: "The maximum amount of insurance or reinsurance that a company can write, usually determined by the relationship between premiums and surplus."
      },
      {
        term: "Captive Insurance Company",
        definition: "An insurance company owned by a parent organization to insure the risks of its owner."
      },
      {
        term: "Catastrophe Reinsurance",
        definition: "A form of excess of loss reinsurance that protects a ceding company against accumulations of losses arising from a single catastrophic event."
      },
      {
        term: "Cede",
        definition: "To transfer all or part of a risk to a reinsurer."
      },
      {
        term: "Ceding Commission",
        definition: "An allowance paid by a reinsurer to a ceding company to cover part of the ceding company's acquisition and other costs."
      },
      {
        term: "Ceding Company",
        definition: "An insurance company that transfers all or part of an insurance risk to a reinsurer through a reinsurance agreement."
      },
      {
        term: "Coinsurance",
        definition: "A form of reinsurance under which the reinsurer shares proportionally in all elements of the original insurance."
      },
      {
        term: "Commutation",
        definition: "An agreement between a ceding company and a reinsurer that provides for the valuation, payment, and complete discharge of all obligations between the parties under a particular reinsurance agreement."
      },
      {
        term: "Contingent Commission",
        definition: "A commission paid by a reinsurer to a ceding company based on the profitability of the business ceded."
      },
      {
        term: "Continuous Mortality Investigation (CMI)",
        definition: "A research program conducted by the Institute and Faculty of Actuaries in the UK that collects and analyzes mortality data."
      },
      {
        term: "Credit for Reinsurance",
        definition: "The reduction in liabilities that a ceding company may take on its statutory financial statements for reinsurance ceded."
      },
      {
        term: "Cut-Through Clause",
        definition: "A clause in a reinsurance agreement that allows the original insured to collect directly from the reinsurer in certain situations."
      },
    ]
  },
  {
    letter: "D",
    entries: [
      {
        term: "Direct Writer",
        definition: "An insurance company that deals directly with the public without using intermediaries or brokers."
      },
      {
        term: "Disability Income Insurance",
        definition: "Insurance that provides periodic payments when an insured is unable to work due to disability."
      },
    ]
  },
  {
    letter: "E",
    entries: [
      {
        term: "Errors and Omissions Clause",
        definition: "A provision in reinsurance agreements that protects both parties from unintentional errors in administering the reinsurance agreement."
      },
      {
        term: "Excess of Loss Reinsurance",
        definition: "A form of reinsurance under which the reinsurer pays losses that exceed a specified amount (retention) retained by the ceding company."
      },
      {
        term: "Experience Rating",
        definition: "A method of determining reinsurance premiums based on the actual loss experience of the ceding company."
      },
      {
        term: "Experience Refund",
        definition: "A return of premium to the ceding company when the actual loss experience is better than expected."
      },
      {
        term: "Expense Allowance",
        definition: "An amount paid by a reinsurer to a ceding company to cover the ceding company's expenses in acquiring and administering the business."
      },
    ]
  },
  {
    letter: "F",
    entries: [
      {
        term: "Facultative Reinsurance",
        definition: "Reinsurance of individual risks by offer and acceptance wherein the reinsurer retains the right to accept or reject each risk offered."
      },
      {
        term: "Financial Reinsurance",
        definition: "Reinsurance transactions that transfer limited underwriting risk but provide financing or other financial benefits to the ceding company."
      },
      {
        term: "Finite Risk Reinsurance",
        definition: "A form of reinsurance that limits the reinsurer's exposure to loss while providing risk transfer over a multi-year period."
      },
      {
        term: "First Dollar Quota Share",
        definition: "A quota share reinsurance arrangement where the reinsurer participates in losses from the first dollar, without a retention by the ceding company."
      },
      {
        term: "Funds Withheld",
        definition: "Assets retained by a ceding company that would otherwise be payable to a reinsurer under a reinsurance agreement."
      },
    ]
  },
  {
    letter: "G",
    entries: [
      {
        term: "GAAP",
        definition: "Generally Accepted Accounting Principles. The common set of accounting principles, standards, and procedures used in the United States."
      },
      {
        term: "Gross Line",
        definition: "The total amount of insurance written by an insurer before deducting reinsurance ceded."
      },
      {
        term: "Gross Premium",
        definition: "The total premium charged for insurance before deducting reinsurance premiums."
      },
      {
        term: "Guaranty Fund",
        definition: "A fund established by state law to pay claims of insolvent insurers."
      },
    ]
  },
  {
    letter: "I",
    entries: [
      {
        term: "Indemnity Reinsurance",
        definition: "The most common form of reinsurance, under which the reinsurer agrees to indemnify the ceding company against all or part of the loss."
      },
      {
        term: "Inforce",
        definition: "Insurance policies that are currently active and have not expired, lapsed, or been terminated."
      },
      {
        term: "Insolvency Clause",
        definition: "A provision in reinsurance agreements that requires the reinsurer to pay claims to the liquidator of an insolvent ceding company."
      },
      {
        term: "Intermediary",
        definition: "A broker or agent who negotiates reinsurance contracts between ceding companies and reinsurers."
      },
    ]
  },
  {
    letter: "L",
    entries: [
      {
        term: "Letter of Credit",
        definition: "A financial instrument issued by a bank that guarantees payment to a beneficiary if certain conditions are met."
      },
      {
        term: "Liability",
        definition: "An obligation to pay for losses or claims."
      },
      {
        term: "Line",
        definition: "The amount of insurance or reinsurance on a particular risk."
      },
      {
        term: "Long-Term Care Insurance",
        definition: "Insurance that provides coverage for services needed due to chronic illness or disability."
      },
      {
        term: "Loss Ratio",
        definition: "The ratio of incurred losses to earned premiums."
      },
      {
        term: "Loss Ratio Coverage",
        definition: "A form of stop loss reinsurance that protects against adverse loss ratios."
      },
    ]
  },
  {
    letter: "M",
    entries: [
      {
        term: "Managing General Agent (MGA)",
        definition: "An agent with authority to bind coverage, issue policies, collect premiums, and handle claims on behalf of an insurer."
      },
      {
        term: "Minimum Cession",
        definition: "The smallest amount that may be ceded under a reinsurance agreement."
      },
      {
        term: "Modified Coinsurance (ModCo)",
        definition: "A form of coinsurance where the reserves are held by the ceding company rather than transferred to the reinsurer."
      },
      {
        term: "Mortality",
        definition: "The rate of death in a given population."
      },
      {
        term: "Mortality Table",
        definition: "A statistical table showing the probability of death at each age."
      },
    ]
  },
  {
    letter: "N",
    entries: [
      {
        term: "NAIC",
        definition: "National Association of Insurance Commissioners. The organization of state insurance regulators in the United States."
      },
      {
        term: "Net Amount at Risk",
        definition: "The difference between the face amount of a life insurance policy and its reserve."
      },
      {
        term: "Net Line",
        definition: "The amount of insurance retained by an insurer after deducting reinsurance ceded."
      },
      {
        term: "Net Premium",
        definition: "The premium after deducting reinsurance premiums."
      },
      {
        term: "Non-Admitted Assets",
        definition: "Assets that do not meet regulatory criteria and cannot be included in determining an insurer's surplus."
      },
      {
        term: "Non-Admitted Reinsurance",
        definition: "Reinsurance provided by a reinsurer that is not licensed, authorized, or accredited in the ceding company's jurisdiction."
      },
      {
        term: "Non-Proportional Reinsurance",
        definition: "Reinsurance where the reinsurer's liability is not based on a fixed percentage of the original risk. Includes excess of loss and stop loss."
      },
      {
        term: "Novation",
        definition: "The substitution of a new contract or obligation for an old one."
      },
    ]
  },
  {
    letter: "O",
    entries: [
      {
        term: "Offset Clause",
        definition: "A provision allowing parties to offset mutual debts and credits arising under reinsurance agreements."
      },
      {
        term: "Original Premium",
        definition: "The premium charged by the direct insurer to the policyholder."
      },
      {
        term: "OSFI",
        definition: "Office of the Superintendent of Financial Institutions. The federal regulator of financial institutions in Canada."
      },
    ]
  },
  {
    letter: "P",
    entries: [
      {
        term: "Participating Policy",
        definition: "A life insurance policy that shares in the insurer's divisible surplus through policy dividends."
      },
      {
        term: "Pool",
        definition: "An association of insurers or reinsurers that share risks according to a predetermined agreement."
      },
      {
        term: "Portfolio",
        definition: "The total of risks or business written or assumed by an insurer or reinsurer."
      },
      {
        term: "Premium",
        definition: "The amount charged for insurance or reinsurance coverage."
      },
      {
        term: "Proportional Reinsurance",
        definition: "Reinsurance where the reinsurer shares a fixed percentage of premiums and losses. Includes quota share and surplus share."
      },
    ]
  },
  {
    letter: "Q",
    entries: [
      {
        term: "Quota Share Reinsurance",
        definition: "A form of proportional reinsurance where the reinsurer accepts a fixed percentage of every risk written by the ceding company."
      },
    ]
  },
  {
    letter: "R",
    entries: [
      {
        term: "Recapture",
        definition: "The process by which a ceding company takes back risks previously ceded to a reinsurer."
      },
      {
        term: "Reinsurance",
        definition: "Insurance purchased by an insurer from another insurer to transfer risk."
      },
      {
        term: "Reinsurance Pool",
        definition: "A group of reinsurers that share risks according to a predetermined arrangement."
      },
      {
        term: "Reinsurance Treaty",
        definition: "The legal contract defining the reinsurance agreement."
      },
      {
        term: "Reinsurer",
        definition: "A company that contractually accepts a portion of the ceding company's risk."
      },
      {
        term: "Reserves",
        definition: "Liabilities established by insurers to reflect estimated future claim payments and related expenses."
      },
      {
        term: "Retention",
        definition: "The amount of risk retained by a ceding company after reinsurance."
      },
      {
        term: "Retrocede",
        definition: "To transfer a reinsurance risk assumed by the reinsurer to another insurance company."
      },
      {
        term: "Retrocessionaire",
        definition: "A reinsurer that contractually accepts from another reinsurer a portion of the ceding company's underlying reinsurance risk."
      },
      {
        term: "Risk Based Capital",
        definition: "A statutory measurement of the minimum amount of capital appropriate for an insurance company to operate safely."
      },
      {
        term: "Risk Charge",
        definition: "An amount identified in some reinsurance agreements as specifically to be retained by the reinsurer for assuming the risk."
      },
      {
        term: "Risk Transfer",
        definition: "The fundamental principle of reinsurance is the transfer of economic insurable risk."
      },
    ]
  },
  {
    letter: "S",
    entries: [
      {
        term: "Self Administration",
        definition: "A reinsurance arrangement where the ceding company provides the reinsurer with periodic reports for reinsurance ceded."
      },
      {
        term: "Sliding Scale Commission",
        definition: "A ceding commission which varies inversely with the loss ratio under the reinsurance agreement."
      },
      {
        term: "Solvency II",
        definition: "An EU directive that codifies and harmonizes insurance regulations in the European Union."
      },
      {
        term: "Special Purpose Vehicle",
        definition: "A limited company used in structured financial transactions, such as asset securitizations."
      },
      {
        term: "Spread Loss",
        definition: "A form of reinsurance under which premiums are paid during good years to build up a fund from which losses are recovered in bad years."
      },
      {
        term: "Stop Loss Reinsurance",
        definition: "A form of reinsurance under which the reinsurer pays some or all of a ceding company's aggregate retained losses in excess of a predetermined amount."
      },
      {
        term: "Surplus",
        definition: "The excess of assets over liabilities. Determines an insurer's capacity to write business."
      },
      {
        term: "Surplus Relief",
        definition: "An increase in the ceding company's surplus through financial reinsurance."
      },
      {
        term: "Surplus Strain",
        definition: "A situation that occurs when the acquisition costs and reserve requirements of newly issued business depresses statutory earnings."
      },
    ]
  },
  {
    letter: "T",
    entries: [
      {
        term: "Termination",
        definition: "The formal ending of a reinsurance agreement by its natural expiry, cancellation or commutation by the parties."
      },
      {
        term: "Third Party Administration",
        definition: "A situation where the direct insurance and reinsurance is administered by a third party."
      },
      {
        term: "Treaty",
        definition: "The legal contract defining the reinsurance agreement."
      },
      {
        term: "Trust Agreement",
        definition: "An agreement under which certain assets are deposited by one party for the sole benefit of another party."
      },
    ]
  },
  {
    letter: "U",
    entries: [
      {
        term: "Unauthorized Reinsurer",
        definition: "A reinsurer not licensed or accredited in the ceding company's state of domicile."
      },
      {
        term: "Underwriting",
        definition: "The process of evaluating and selecting risks for insurance or reinsurance."
      },
      {
        term: "Unusual Expenses",
        definition: "Non-routine expenses of the ceding company for claims investigation, legal defense or rescission actions."
      },
    ]
  },
  {
    letter: "Y",
    entries: [
      {
        term: "Yearly Renewable Term (YRT)",
        definition: "A form of life reinsurance under which the mortality risks of the net amount at risk are transferred to the reinsurer. The premium varies each year with the amount at risk and the ages of the insureds."
      },
    ]
  },
  {
    letter: "Z",
    entries: [
      {
        term: "Zero First Year YRT (ZFT)",
        definition: "A YRT scale with no premium in the first year."
      },
    ]
  },
];
