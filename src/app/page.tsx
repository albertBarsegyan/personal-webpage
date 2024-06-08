import { HeroSection } from '@/components/hero-section/hero-section';
import { Path } from '@/constants/path-constants';
import { readStaticData } from '@/utils/file-utils';

// function scrollToSmoothly(pos: number, time: number) {
//   const currentPos = window.scrollY;
//   let start: null | number = null;
//   if (time === null) time = 500;
//   (pos = +pos), (time = +time);
//   window.requestAnimationFrame(function step(currentTime) {
//     start = !start ? currentTime : start;
//     const progress = currentTime - start;
//     if (currentPos < pos) {
//       window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
//     } else {
//       window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
//     }
//     if (progress < time) {
//       window.requestAnimationFrame(step);
//     } else {
//       window.scrollTo(0, pos);
//     }
//   });
// }

export default async function Home() {
  const { heroSection } = await readStaticData(Path.GetStaticPath('home-page-content.json'));

  return (
    <div>
      <HeroSection data={heroSection} />
      {/*<AboutUsSection />*/}
      {/*<ReasonSection />*/}
      {/*<CompaniesSection />*/}
      {/*<ContactUs />*/}
      {/*<Footer />*/}
    </div>
  );
}
