// 'use client';
import { HeroSection } from '@/components/hero-section/hero-section';
import { AboutUsSection } from '@/components/about-us-section/about-us-section';
import { ReasonSection } from '@/components/reason-section/reason-section';
import { CompaniesSection } from '@/components/companies-section/companies-section';
import { ContactUs } from '@/components/contact-us/contact-us';
import { Footer } from '@/components/footer/footer';

function scrollToSmoothly(pos: number, time: number) {
  const currentPos = window.scrollY;
  let start: null | number = null;
  if (time === null) time = 500;
  (pos = +pos), (time = +time);
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    const progress = currentTime - start;
    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, pos);
    }
  });
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ReasonSection />
      <CompaniesSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
