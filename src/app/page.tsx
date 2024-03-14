import { HeroSection } from '@/components/hero-section/hero-section';
import { AboutUsSection } from '@/components/about-us-section/about-us-section';
import { ReasonSection } from '@/components/reason-section/reason-section';
import { CompaniesSection } from '@/components/companies-section/companies-section';
import { ContactUs } from '@/components/contact-us/contact-us';
import { Footer } from '@/components/footer/footer';

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutUsSection/>
      <ReasonSection/>
      <CompaniesSection/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
