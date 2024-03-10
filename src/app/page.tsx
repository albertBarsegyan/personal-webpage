import { HeroSection } from '@/components/hero-section/hero-section';
import { AboutUsSection } from '@/components/about-us-section/about-us-section';
import { ReasonSection } from '@/components/reason-section/reason-section';
import { CompaniesSection } from '@/components/companies-section/companies-section';
import { ContactUs } from '@/components/contact-us/contact-us';

export default function Home() {
  return (
    <div className='h-full'>
      <HeroSection/>
      <AboutUsSection/>
      <ReasonSection/>
      <CompaniesSection/>
      <ContactUs/>
      {/*<Footer/>*/}
    </div>
  );
}
