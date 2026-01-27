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
                {/* Header and Disclaimer */}
                <Section id="resources-header" className="w-full">
                    <div className="max-w-5xl mx-auto">
                        <PageHeader 
                            pageTitle="Resources" 
                            pageSubtitle="Links to professional organizations, regulatory bodies, and reinsurance glossary" 
                        />
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800 mt-6">
                            <strong>Note:</strong> The links below lead to external third-party websites. 
                            Butterfly Financial Consultants is not responsible for the content, accuracy, 
                            or availability of these external sites.
                        </div>
                    </div>
                </Section>

                {/* Professional Organizations */}
                <Section id="professional-organizations" className="w-full">
                    <div className="max-w-5xl mx-auto">
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
                    </div>
                </Section>

                {/* International Regulatory Bodies */}
                <Section id="international-regulatory-bodies" className="w-full bg-gray-200">
                    <div className="max-w-5xl mx-auto">
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
                    </div>
                </Section>

                {/* Glossary */}
                <Section id="glossary" className="w-full">
                    <div className="max-w-5xl mx-auto">
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
                    </div>
                </Section>
            </MainPageLayout>
        </Main>
    );
}
