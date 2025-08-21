"use client"
import { PageHeader } from "../components/Headers";
import { Main, MainPageLayout } from "../components/Main";
import Section from "../components/Section";
import Card from "../components/Card";
import { ServicesData } from "./ServicesData";

export default function Services() {    
    return (
        <Main>
            <MainPageLayout>
                <Section id="services-header" className="w-full">
                    <PageHeader pageTitle="Services" pageSubtitle="Butterfly provides consulting services for mergers and acquisitions with respect to blocks of insurance, entire companies, and reinsurance for both buyers and sellers." />
                </Section>
           
                <Section id="service-cards" className=""> 
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">    
                        {ServicesData.map((service) => (
                            <Card key={service.id} title={service.name} description={service.summary} bullets={service.bullets} />
                        ))}
                    </div>
                </Section>
            </MainPageLayout>
        </Main>
    )
}       