/* eslint-disable react/no-unescaped-entities */
import Section from "./components/Section";
import { SectionHeader, LogoHeader } from "./components/Headers";
import {  Main, MainPageLayout  } from "./components/Main";

export default function Home() {
  return (
    <Main>
      <LogoHeader pageTitle="Butterfly Financial Consultants" pageSubtitle="Reinsurance and Acquisition solutions" />
      <MainPageLayout>
        <Section id="about" className="bg-gray-200"> 
        <p>
            Butterfly Financial Consultants provides consulting services for mergers and acquisitions with respect to blocks of insurance, entire companies, and reinsurance for both buyers and sellers.  John Tiller, and his wife, Denise, literally wrote the book on reinsurance and can help analyze and structure reinsurance arrangements.  Other services include capital planning, strategic planning, business management, enterprise risk management, as well as expert witness and arbitration.  See our Services page for more information.
        </p>
        </Section>
        <Section id="book">
          <SectionHeader> Life, Health and Annuity Reinsurance, Fourth Edition</SectionHeader>
          <p>We are very excited to announce the fourth edition of our book, Life, Health, and Annuity Reinsurance.  Four new chapters have been added: </p>
          <ul className="px-10">
            <li className="list-disc">Canadian Regulation of Reinsurance</li>
            <li className="list-disc">Canadian Reinsurance Accounting and Tax Considerations</li>
            <li className="list-disc">Risk Transfer Considerations</li>
            <li className="list-disc">Reinsurance of Inforce Policies</li>
          </ul>
          <p>The Reinsurance Treaty chapter has been greatly expanded to compare and contrast US and Canadian treaty language.  The Reinsurance in Other than the US and Canada has also been expanded.</p>
          <p>For more information about the text and the bibliography, please visit the Life, Health, and Annuity Reinsurance page.   For links to the professional and regulatory organization website and for the Glossary of Reinsurance Terms, please visit our Resources page.
          To purchase it, go to ACTEX Learning.</p>
        </Section>
        <Section id="why-butterfly" className="bg-gray-200">
          <SectionHeader>Why "Butterfly"</SectionHeader>
          <p>Ray Bradbury introduced the idea that the flap of a butterfly's wings. often called the "Butterfly Effect," could have a ripple effect on history in his 1952 short story, The Sound of Thunder. In 1961, Edward Norton Lorenz, an early proponent of chaos theory, noted that tiny variations in data could have a major effect on weather models and likened it to the flap of a butterfly's wing in one part of the world causing tornadoes in another part. John Tiller named his consulting firm Butterfly Financial Consultants because he believes that small actions can have major effects in the insurance world. John's experience, leadership, and creativity provide innovative insurance and reinsurance solutions for problems and clients of all sizes.</p>
        </Section>
      </MainPageLayout> 
      <footer className="row-start-3 flex gap-[24px] font-bf-display flex-wrap items-center justify-center">
        Butterfly Financial Consultants - John Tiller -2025
      </footer>
    </Main>
  );
}
