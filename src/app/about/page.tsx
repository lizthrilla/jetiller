import { LogoHeader } from "../components/Headers";
import { Main, MainPageLayout } from "../components/Main";
import Section from "../components/Section";

export default function About() {
    return (
        <Main>
            <LogoHeader pageTitle="About" pageSubtitle="About" />
            <MainPageLayout>
                <Section id="about" className="bg-gray-200 w-full">
                    <p>Butterfly Financial Consultants provides consulting services for mergers and acquisitions with respect to blocks of insurance, entire companies, and reinsurance for both buyers and sellers.  John Tiller, and his wife, Denise, literally wrote the book on reinsurance and can help analyze and structure reinsurance arrangements.  Other services include capital planning, strategic planning, business management, enterprise risk management, as well as expert witness and arbitration.  See our Services page for more information.</p>
                </Section>
            </MainPageLayout>
        </Main>
    )
}