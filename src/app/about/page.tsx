
import { Main } from "../components/Main";
import Section from "../components/Section";
import Image from "next/image";


export default function About() {
    return (
        <Main>  
            <Section id="mission" className="py-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-lg">
                            At Butterfly, we believe in delivering pragmatic solutions that balance actuarial rigor with business practicality. Our mission is to help clients structure transactions, optimize capital, manage risk, and build sustainable businesses—always with an eye toward clarity, efficiency, and long‑term value.
                        </p>
                </div>
            </Section>
                         <Section id="profiles" className="py-8">
                 <div className="grid lg:grid-cols-2 gap-8 items-start">
                     <div className="space-y-4">
                         <div className="flex justify-center lg:justify-start">
                             <Image src="/headshots/jet.jpg" alt="John Tiller" width={400} height={500} className="rounded-2xl shadow-md w-full max-w-sm" />
                         </div>
                         <h2 className="text-2xl font-semibold">John E. Tiller, FSA, CERA, MAAA</h2>
                         <p>
                             John E. Tiller, Jr. is the owner of Butterfly Financial Consultants. He has a diverse range of experience and numerous successes in the areas of insurance and financial services with a particular talent for issues centering on reinsurance. John provides a wide array of consulting services including capital and strategic planning, arbitration, business management, and much more.
                         </p>
                         <p>
                             He is a graduate of Harvey Mudd College in Claremont, California. He is a Fellow of the <a href="https://www.soa.org/" target="_blank" rel="noopener noreferrer" className="text-bf-blue"> Society of Actuaries</a>, a <a href="https://www.soa.org/Education/Exam-Req/edu-cera-req.aspx" target="_blank" rel="noopener noreferrer" className="text-bf-blue"> Chartered Enterprise Risk Analyst</a>, and a Member of the <a href="https://actuary.org/" target="_blank" rel="noopener noreferrer" className="text-bf-blue"> American Academy of Actuaries</a>.
                         </p>
                         <p>
                             John has authored multiple books and articles on reinsurance and actuarial practice, and frequently serves as an expert witness and arbitrator in (re)insurance disputes. His perspective bridges technical depth with boardroom clarity.
                         </p>
                         <p>
                             John began his actuarial career at Transamerica Occidental Life Insurance Company where he became Vice-President and Actuary of the reinsurance line of business. During his reinsurance career at Transamerica, John was responsible for product development and pricing, valuation and financial reporting, underwriting, contracts, sales and marketing, and strategic planning. He also was involved in corporate efforts regarding surplus allocation and management, and tax planning.
                         </p>
                         <p>
                             John then joined Tillinghast, Nelson, and Warren, now a part of Towers Watson, where he became a principle shareholder and unit manager for life insurance consulting in Irvine, California. His consulting activities involved a broad range of assignments, many of which were related to accepting or ceding indemnity reinsurance or assumption transactions.
                         </p>
                         <p>
                             He subsequently became Executive Vice President and Chief Actuary for Resource Deployment, Inc., a subsidiary of what is now Travelers Insurance Group. In this role, John oversaw the actuarial functions of over twenty insurance companies, including American Health and Life Insurance Company, Transport Life Insurance Company, Voyager Life Insurance, and Primerica Life Insurance Company.
                         </p>
                         <p>
                             John became National Director of the Life Insurance Actuarial Consulting Practice of KPMG Peat Marwick LLP. While responsible for a wide range of actuarial and general consulting activities, he maintained his leadership role in reinsurance.
                         </p>
                         <p>
                             John joined Employers Reassurance Company (ERC), a subsidiary of GE in November 1998 as the Business Development Leader for North American Life Reinsurance. In September 1999, Tiller was named to lead the newly formed North American Life and Health Reinsurance Segment and in January 2000 he became President and Chief Operating Officer for ERC&apos;s two North American life reinsurance companies. He then served as President and CEO of GE ERC&apos;s Global Life &amp; Health Reinsurance.
                         </p>
                         <p>
                             After GE exited the reinsurance business, John founded Butterfly Financial Consultants, LLC to provide consulting services specializing in reinsurance. He also became part-time President of Unified Life where he directed the acquisition of several blocks of life and health business.
                         </p>
                         <p>
                             John&apos;s other professional activities include:
                             <ul className="list-disc px-10">
                                 <li>Co-author, Life, Health, and Annuity Reinsurance, ACTEX, Winstead, CT</li>
                                 <li>Founding member and officer of the Reinsurance Section Council of the Society of Actuaries</li>
                                 <li>Elected to a second term on the Reinsurance Section council, serving as an officer</li>
                                 <li>Vice-Chair and Chair of the Nontraditional Marketing Section Council</li>
                                 <li>Futurism Section Council</li>
                                 <li>Chair of the Program Committee of the Society of Actuaries</li>
                                 <li>Chair of the Continuing Education Committees of the Society</li>
                                 <li>Member of many Society of Actuaries committees and task forces including Services to Members, Research Policy, Professional Development, and the First Task Force on AIDS</li>
                                 <li>Chair of the ACLI&apos;s special task force on taxation of reinsurance transactions in the early 1980s</li>
                                 <li>Academy of Actuaries task force on risk classification</li>
                                 <li>Faculty, Society of Actuaries Reinsurance Seminars</li>
                                 <li>Frequent speaker at Society of Actuaries meetings and other industry meetings</li>
                             </ul>
                         </p>
                     </div>

                     <div className="space-y-4">
                         <div className="flex justify-center lg:justify-start">
                             <Image src="/headshots/deft.jpg" alt="Denise Tiller" width={400} height={500} className="rounded-2xl shadow-md w-full max-w-sm" />
                         </div>
                         <h2 className="text-2xl font-semibold">Denise Fagerberg Tiller, FSA, MLIS</h2>
                         <p>
                             Denise Fagerberg Tiller is a graduate of the University of Nebraska-Lincoln. She is a Fellow of the Society of Actuaries, a Member of the American Academy of Actuaries, and a Fellow of the Life Office Management Association. She received a Master&apos;s Degree in Library and Information Science from Emporia State University.
                         </p>
                         <p>
                             Denise began her actuarial career with CNA and worked at Maccabees Mutual Life Insurance Company as Manager of the Individual Life Actuarial Department prior to joining Transamerica Occidental Life Insurance Company as Manager of Reinsurance Pricing in 1980 where she developed pricing assumptions and procedures manual and worked closely with the clients to create proposals. She later moved to Tillinghast, Nelson, and Warren,now part of Towers Watson, where she focused her consulting services on individual life insurance product development and reinsurance.
                         </p>
                         <p>
                             Denise&apos;s other professional activities include:
                             <ul className="list-disc px-10">
                                 <li>Co-author, Life, Health, and Annuity Reinsurance, ACTEX, Winstead, CT</li>
                                 <li>President, Los Angeles Actuarial Club</li>
                                 <li>Board of Directors, Los Angeles Junior Chamber of Commerce</li>
                                 <li>Chairman, Professional Development Committee, Society of Actuaries</li>
                                 <li>Treasurer, Reinsurance Section Council, Society of Actuaries</li>
                                 <li>Moderator and organizer of the Society of Actuaries Symposium on HIV an AIDS</li>
                                 <li>Faculty, Society of Actuaries Reinsurance Seminars</li>
                                 <li>Frequent panelist and workshop chairman at Society of Actuaries meetings</li>
                             </ul>
                         </p>
                     </div>
                 </div>
             </Section>
        </Main>
    )
}