"use client"
import { LogoHeader } from "../components/Headers";
import { Main, MainPageLayout } from "../components/Main";
import Section from "../components/Section";
import Card from "../components/Card";
import { ServicesData } from "./ServicesData";

export default function Services() {    
    return (
        <Main>
            <LogoHeader pageTitle="Butterfly Financial Consultants" pageSubtitle="Services" />
            <MainPageLayout>
                <Section id="services" className="bg-gray-200">
                    <p>Butterfly provides consulting services for mergers and acquisitions with respect to blocks of insurance, entire companies, and reinsurance for both buyers and sellers.</p>
                </Section>
                <div id="service-cards" className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 w-full">    
                    {ServicesData.map((service) => (
                        <Card key={service.id} title={service.name} description={service.summary} bullets={service.bullets} />
                    ))}
                </div>
            </MainPageLayout>
        </Main>
    )
}