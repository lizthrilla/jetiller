import { Main, MainPageLayout } from "../components/Main";
import { PageHeader, SectionHeader } from "../components/Headers";
import Section from "../components/Section";
import Collapsible from "../components/Collapsible";
import { bibliographyData } from "./BibliographyData";
import Image from "next/image";

export default function Book() {
    return (
        <Main>
            <MainPageLayout>
                <Section id="book-header" className="w-full">
                    <PageHeader 
                        pageTitle="Life, Health and Annuity Reinsurance" 
                        pageSubtitle="Fourth Edition | John E. Tiller, Jr. and Denise Fagerberg Tiller" 
                    />
                </Section>

                <Section id="book-description">
                    <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
                        <div className="flex justify-center md:justify-start">
                            <Image 
                                src="/LHAReinsurance-4ed.jpg" 
                                alt="Life, Health and Annuity Reinsurance, Fourth Edition book cover" 
                                width={250} 
                                height={400} 
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                    <SectionHeader>About This Edition</SectionHeader>
                    <p>
                        This fourth edition of Life, Health and Annuity Reinsurance is now available through ACTEX Learning. This edition had a long gestation period, largely because it features the most revisions since the first edition twenty-five years ago. Several factors contributed to the volume of changes.
                    </p>
                    <p className="mt-4">
                        The Financial Crisis of 2008 is the most critical factor as it affected the financial services industry in the US and abroad. In the US, Congress enacted the Dodd-Frank Wall Street Reform and Consumer Protection Act which created the Federal Insurance Office to collect and analyze data on the insurance industry and identify risky insurers for Federal Reserve supervision.
                    </p>
                    <p className="mt-4">
                        The second factor was a long needed decision to expand content relating to Canada. Two new chapters were added: <em>Canadian Regulation of Reinsurance</em> and <em>Canadian Reinsurance Accounting and Tax Considerations</em>. The Reinsurance Treaty chapter was expanded to compare and contrast treaty provisions between Canada and the US.
                    </p>
                    <p className="mt-4">
                        The third factor was the decision to expand the history sections. In conversations with other actuaries, the authors realized that the backstory surrounding the development of regulation, taxes, and the reinsurance industry itself is worthy of preservation in one text.
                    </p>
                    <p className="mt-4">
                        It is important to note that, despite the twenty-five years since the first edition, the fundamental principles of life, health, and annuity reinsurance have not changed. Risk transfer is still the cornerstone of a reinsurance transaction. The three basic forms of reinsurance: yearly renewable term, coinsurance, and modified coinsurance are still the building blocks.
                    </p>
                        </div>
                    </div>
                </Section>

                <Section id="book-contents" className="bg-gray-200">
                    <SectionHeader>Book Contents</SectionHeader>
                    <p>The chapters are organized into six parts:</p>
                    <ol className="list-decimal px-10 mt-4 space-y-2">
                        <li>Introduction to Life, Health, and Annuity Reinsurance</li>
                        <li>Methods and Applications of Reinsurance</li>
                        <li>Treaties and Risk Considerations</li>
                        <li>Regulatory, Accounting, and Tax Considerations</li>
                        <li>Additional Products and Topics</li>
                        <li>Administration and Management Considerations</li>
                    </ol>
                </Section>

                <Section id="purchase" className="text-center">
                    <SectionHeader>Purchase the Book</SectionHeader>
                    <p className="mb-6">
                        Available in digital and print formats from ACTEX Learning.
                    </p>
                    <a 
                        href="https://www.actexmadriver.com/orderselection.aspx?id=453138573"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-bf-blue text-white font-bf-display font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
                    >
                        Purchase from ACTEX Learning
                    </a>
                </Section>

                <Section id="bibliography" className="bg-gray-200">
                    <SectionHeader>Bibliography</SectionHeader>
                    <p className="mb-4">
                        The bibliography has been expanded to reflect contributions from professional organizations, regulatory entities, and academic sources.
                    </p>
                    <Collapsible title="View Complete Bibliography">
                        <div className="space-y-8 pt-4">
                            {bibliographyData.map((category, idx) => (
                                <div key={idx}>
                                    <h4 className="font-bf-display font-semibold text-lg mb-3">{category.name}</h4>
                                    <ul className="space-y-2 text-sm">
                                        {category.entries.map((entry, entryIdx) => (
                                            <li key={entryIdx} className="pl-4 border-l-2 border-gray-300">
                                                {entry.url ? (
                                                    <a 
                                                        href={entry.url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="text-bf-blue hover:underline"
                                                    >
                                                        {entry.citation}
                                                    </a>
                                                ) : (
                                                    entry.citation
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Collapsible>
                </Section>
            </MainPageLayout>
        </Main>
    );
}
