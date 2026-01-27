"use client";

import { Main, MainPageLayout } from "../components/Main";
import { PageHeader, SectionHeader } from "../components/Headers";
import Section from "../components/Section";
import Collapsible from "../components/Collapsible";
import { professionalOrganizations, internationalRegulatoryBodies, glossary } from "./ResourcesData";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Resources() {
    return (
        <Main>
            <MainPageLayout>
                <Section id="resources-header" className="w-full">
                    <PageHeader 
                        pageTitle="Resources" 
                        pageSubtitle="Links to professional organizations, regulatory bodies, and reinsurance glossary" 
                    />
                </Section>

                {/* Disclaimer */}
                <Section id="disclaimer" className="w-full">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                        <strong>Note:</strong> The links below lead to external third-party websites. 
                        Butterfly Financial Consultants is not responsible for the content, accuracy, 
                        or availability of these external sites.
                    </div>
                </Section>

                {/* Professional Organizations */}
                <Section id="professional-organizations">
                    <SectionHeader>Professional Organizations</SectionHeader>
                    <p className="mb-4">Links to professional and regulatory organization websites.</p>
                    <ul className="space-y-2">
                        {professionalOrganizations.map((link, idx) => (
                            <li key={idx}>
                                <a 
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-bf-blue-text inline-flex items-center gap-2"
                                >
                                    {link.name}
                                    <FaExternalLinkAlt className="text-xs opacity-60" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* International Regulatory Bodies */}
                <Section id="international-regulatory-bodies" className="bg-gray-200">
                    <SectionHeader>International Regulatory Bodies</SectionHeader>
                    <p className="mb-4">Links to international insurance regulatory authorities.</p>
                    <ul className="space-y-2">
                        {internationalRegulatoryBodies.map((link, idx) => (
                            <li key={idx}>
                                <a 
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-bf-blue-text inline-flex items-center gap-2"
                                >
                                    {link.name}
                                    <FaExternalLinkAlt className="text-xs opacity-60" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* Glossary */}
                <Section id="glossary">
                    <SectionHeader>Glossary of Reinsurance Terms</SectionHeader>
                    <p className="mb-6">
                        A comprehensive glossary of terms commonly used in life, health, and annuity reinsurance. 
                        Click on a letter to expand and view terms.
                    </p>
                    <div className="space-y-2">
                        {glossary.map((section) => (
                            <Collapsible 
                                key={section.letter} 
                                title={`${section.letter} (${section.entries.length} terms)`}
                            >
                                <div className="space-y-4 py-4 pl-4 border-l-2 border-gray-300">
                                    {section.entries.map((entry, idx) => (
                                        <div key={idx}>
                                            <dt className="font-bf-display font-bold text-neutral-800">
                                                {entry.term}
                                            </dt>
                                            <dd className="text-neutral-600 mt-1">
                                                {entry.definition}
                                            </dd>
                                        </div>
                                    ))}
                                </div>
                            </Collapsible>
                        ))}
                    </div>
                </Section>
            </MainPageLayout>
        </Main>
    );
}
