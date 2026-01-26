// Bibliography Data Types and Content

export interface BibliographyEntry {
    citation: string;
    url?: string;
}

export interface BibliographyCategory {
    name: string;
    entries: BibliographyEntry[];
}

// Bibliography organized by category
export const bibliographyData: BibliographyCategory[] = [
    {
        name: "Books, Journals, and Reliable Websites",
        entries: [
            { citation: "Adney, John, JD. \"Federal Tax update: Selected Developments & Issues Affecting Life Insurers.\" Presentation: Society of Actuaries Life and Annuity Symposium, May 6-7, 2012." },
            { citation: "A. M. Best. Best's Insolvency Study: Property/Casualty Insurance 1969-1990. Oldwick: June 1991." },
            { citation: "Antes, Richard, Ernst & Young. \"Federal Income Taxation of Life Insurance Companies.\" New York: Bender, 1988." },
            { citation: "Barth, Michael M, PhD. \"Risk Based Solvency Regulation in the U.S.\" Paper presented at World Bank Contractual Savings Conference, Washington, D.C., November 3-7, 2003." },
            { citation: "Basel Committee on Banking Supervision. Longevity risk transfer markets: market structure, growth drivers and impediments and potential risk. Bank for International Settlements. Basel: December 2013." },
            { citation: "Becker, Joanna, FSA, MAAA. \"Discussion of Reinsurance Provisions in a Life Reinsurance Agreement.\" Treaty Committee-Reinsurance Section, Society of Actuaries, August 1, 1994." },
            { citation: "Bluhm, W.F. Group Insurance, Sixth Edition. Winsted: ACTEX Publications, Inc., 2012." },
            { citation: "Bluhm, W.F. & Leida, Hans. Individual Health Insurance. Winsted: ACTEX Publications, Inc., 2015." },
            { citation: "Bormann, Fred F. J., Swales, Jason A., Welch, Jillian M. Canadian Insurance Taxation, Third Edition. Markham, Ontario, Canada: LexisNexis, 2009." },
            { citation: "Bowers, N.R., et al. Actuarial Mathematics. Schaumburg: Society of Actuaries, 1997." },
            { citation: "Bruggeman, David. \"Life Reinsurance data from the 2013 Munich Re Survey.\" Reinsurance News, 2014." },
        ]
    },
    {
        name: "Professional and Regulatory Organizations",
        entries: [
            { citation: "American Academy of Actuaries", url: "https://www.actuary.org" },
            { citation: "American Council of Life Insurers (ACLI)", url: "https://www.acli.com" },
            { citation: "Actuarial Standards Board (ASB)" },
            { citation: "Canadian Institute of Actuaries (CIA)", url: "https://www.cia-ica.ca" },
            { citation: "International Association of Insurance Supervisors (IAIS)", url: "https://www.iaisweb.org" },
            { citation: "International Accounting Standards Board (IASB)" },
            { citation: "National Association of Insurance Commissioners (NAIC)", url: "https://www.naic.org" },
            { citation: "National Organization of Life and Health Insurance Guaranty Associations (NOLHGA)", url: "https://www.nolhga.com" },
            { citation: "Office of the Superintendent of Financial Institutions-Canada (OSFI)", url: "https://www.osfi-bsif.gc.ca" },
            { citation: "Organization for Economic Cooperation and Development (OECD)", url: "https://www.oecd.org" },
            { citation: "Reinsurance Administration Professionals Association", url: "https://www.reinsadmin.org" },
            { citation: "Society of Actuaries (SOA)", url: "https://www.soa.org" },
            { citation: "United Nations Commission on International Trade Law (UNCITRAL)", url: "https://www.uncitral.org" },
        ]
    },
    {
        name: "United States and Canadian Court Cases",
        entries: [
            { citation: "Alabama Reassurance Company v. Stucher, Statutory Liquidator of Inter-American Insurance Co., Illinois 1st, 1-98-2508." },
            { citation: "Ainsworth v. General Reinsurance Corporation. 751 F.2d 962 (8th Cir. 1985)." },
            { citation: "Baer v. Associated Life Insurance Company, 248 California Reporter 1989." },
            { citation: "Capitol Life Insurance Co. v. The Queen, 84 DTC 6087, [1984] CTC 141 (FCTD), aff'd 86 DTC 6164, [1986] 1 CTC 388 (FCA)." },
            { citation: "Carnation v. Commissioner, 640 F.2d 1010 (9th Cir. 1981)." },
            { citation: "Colonial American Life Insurance Company v. Commissioner of Internal Revenue, 491 U.S.244 (1989)." },
            { citation: "Fidelity & Deposit Company v. Pink, 302 U.S. 224, 82 L.Ed. 213, 58 S. Ct. 162 (1937)." },
            { citation: "First Security Bank Utah v. Commissioner, 405 U.S. 394 (1972)." },
            { citation: "Harper Group v. Commissioner, 979 F.2d 1341 (9th Cir. 1992)." },
            { citation: "Humana, Inc. v. Commissioner, 881 F. 2d 247 (6th Cir. 1989)." },
            { citation: "Koken v. Legion Insurance Company. 831 A.2d 1196 (Pa. Commw. 2003)." },
            { citation: "Paul v. Virginia, 75 U.S. (8 Wall.) 169,169 (1868)." },
            { citation: "Prudential Reinsurance Co. v. Superior Court. 265 California Reporter, 386 (Cal. App. 2 Dist 1989)." },
            { citation: "Sears v. Commissioner 1991, 972 F.2d 858 (7th Cir. 1992)." },
            { citation: "Trans City Life Insurance Company v. Commissioner, 106 T.C.274 (1996)." },
            { citation: "United Parcel Service v. Commissioner. 254 F.3d 1014 (11th Cir. 2001)." },
            { citation: "United States v. South-Eastern Underwriters Association, 51 F. Supp. 712.715 (N.D. Ga. 1943)." },
        ]
    },
    {
        name: "United States Government Sources",
        entries: [
            { citation: "Deficit Reduction Act of 1984, Public Law 98-369 (DEFRA)." },
            { citation: "Dodd-Frank Wall Street Reform and Consumer Protection Act. H.R. 4173. 110th Cong., 2nd sess. January 5, 2010." },
            { citation: "Employee Retirement Income Security Act of 1974 (ERISA), Pub. L. No. 93-406, 88 Stat. 829." },
            { citation: "Federal Liability Risk Retention Act of 1986, 15 USC 3901-3906 (1981 as amended 1986)." },
            { citation: "Foreign Account Tax Compliance Act (FATCA), Internal Revenue Code §1471 et seq." },
            { citation: "Life Insurance Income Tax Act of 1959: Public Law 86-89; June 25, 1959; Sections 801-820 of the Internal Revenue Code." },
            { citation: "Omnibus Budget Reconciliation Act of 1990, Public Law 99-272 (OBRA 90)." },
            { citation: "Omnibus Budget Reconciliation Act of 1993, Public Law 103-66 (OBRA 93)." },
            { citation: "Patient Protection and Affordable Care Act, 42 U.S.C. § 18001 (2010)." },
            { citation: "Tax Equity and Fiscal Responsibility Act of 1982, Public Law 97-248 (TEFRA)." },
            { citation: "United States General Accounting Office. Insurer Failures: Property/Casualty Insurer Insolvencies State Guaranty Funds. GGD-87-100, July 1987." },
            { citation: "United States General Accounting Office. Insurer Failures: Life/Health Insolvencies and Limitations of State Guaranty Funds. GAO/GGD-92-44, March 1992." },
            { citation: "United States General Accounting Office. Insurance Regulation: The NAIC Accreditation Program Can Be Improved. GAO-01-948. August 2001." },
        ]
    }
];
