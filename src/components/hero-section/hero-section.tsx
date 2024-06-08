'use client';
import Image from 'next/image';

import { InformationBlock } from '@/components/common/information-block/information-block';
import {
  technologiesFirstLine,
  technologiesSecondLine,
  technologiesThirdLine,
} from '@/components/hero-section/hero-section-constants';
import { SectionLayout } from '@/components/layout/section-layout/section-layout';
import { RoundIcon } from '@/icons/round-icon';
import { WaveIllustration } from '@/icons/wave-illustration';

const separator = <div className="bg-forth my-4 h-px w-full rounded-3xl md:my-0 md:h-28 md:w-px" />;

interface HeroSectionProps {
  data: {
    header: string;
    description: string;
    technologiesHeader: string;
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  const { header = '', description = '', technologiesHeader } = data ?? {};

  const headerParts = header.split('\n').map((part, index) => {
    const isSecondItem = index === 1;
    return (
      <>
        <span key={part}>{part}</span>
        {isSecondItem && <WaveIllustration />}
        {!isSecondItem && <br className="my-2" />}
      </>
    );
  });

  return (
    <div className="-mt-10 bg-blue-dark-1">
      <div className="absolute right-0 top-0">
        <RoundIcon />
      </div>
      <SectionLayout>
        <div className="mt-48 flex w-full flex-col md:flex-row md:items-center md:justify-between">
          <div className="mr-4">
            <h1 className="text-5xl leading-normal md:text-5xl">{headerParts}</h1>
            <p className="mt-5 max-w-xl text-lg not-italic leading-7 text-grey-light-1 md:text-xl">{description}</p>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden md:block">
            <div className="text-secondary">
              <Image
                width={400}
                height={320}
                src={'/static/img/hero-section/hero-section-illustration.png'}
                alt={'Illustration'}
              />
            </div>
          </div>
        </div>

        <div className="mb-20 mt-5 md:mt-10">
          <h2 className="text-center text-4xl font-bold uppercase">{technologiesHeader}</h2>

          <div className="mt-8">
            <div className="flex justify-center gap-12">
              {technologiesFirstLine.map((iconData) => (
                <InformationBlock key={iconData.id} icon={iconData.icon} text={iconData.text} />
              ))}
            </div>
            <div className="mt-14 flex justify-center gap-12">
              {technologiesSecondLine.map((iconData) => (
                <InformationBlock key={iconData.id} icon={iconData.icon} text={iconData.text} />
              ))}
            </div>
            <div className="mt-14 flex justify-center gap-12">
              {technologiesThirdLine.map((iconData) => (
                <InformationBlock key={iconData.id} icon={iconData.icon} text={iconData.text} />
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
