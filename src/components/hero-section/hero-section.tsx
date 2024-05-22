'use client';
import { Button } from '@/components/common/button/button';
import { PcIcon } from '@/icons/pc-icon';
import { MapCheckIcon } from '@/icons/map-check-icon';
import { MailIcon } from '@/icons/mail-icon';
import { PhoneIcon } from '@/icons/phone-icon';
import { LogoIcon } from '@/icons/logo.icon';
import { SectionLayout } from '@/components/layout/section-layout/section-layout';

const separator = <div className="bg-forth my-4 h-px w-full rounded-3xl md:my-0 md:h-28 md:w-px" />;

export function HeroSection() {
  return (
    <div className="-mt-10 bg-blue-dark-1">
      <SectionLayout>
        <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
          <div className="mr-4">
            <h1 className="text-2xl md:text-5xl">Lorem ipsum dolor sit.</h1>
            <p className="mt-5 max-w-xl text-sm md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim et eveniet maiores nam nobis,
              quibusdam rem! Culpa, earum error fuga incidunt numquam pariatur sit!
            </p>
            <div className="mt-5 md:mt-10">
              <Button className="text-sm md:text-xl" variant="secondary" type="button" onClick={() => {}}>
                Click me
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden md:block">
            <div className="text-secondary">
              <PcIcon className="md:w-100 w-full" size={400} />
            </div>
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-55%]">
              <LogoIcon className="md:w-70 w-full" />
            </div>
          </div>
        </div>

        <div className="bg-secondary mt-10 flex flex-col items-start rounded-3xl px-4 py-6 md:mt-20 md:flex-row md:items-center md:justify-between md:rounded-full md:px-16">
          <div className="flex w-full flex-row items-center gap-x-2 md:w-fit">
            <div className="ml-1 sm:ml-0">
              <MapCheckIcon />
            </div>
            <div>
              <span>Meet Us</span>
              <p>Everywhere in Armenia, Yerevan</p>
            </div>
          </div>
          {separator}
          <div className="flex w-full flex-row items-center gap-x-2 md:w-fit">
            <div>
              <MailIcon />
            </div>
            <div className="overflow-hidden">
              <span>Mail us</span>
              <a href="mailto:albertbarsegyan6@gmail.com" className="block overflow-hidden text-ellipsis underline">
                albertbarsegyan6@gmail.com
              </a>
            </div>
          </div>
          {separator}
          <div className="flex w-full flex-row items-center gap-x-2 md:w-fit">
            <div>
              <PhoneIcon />
            </div>
            <div>
              <span>Call us</span>
              <p>+374 (94)-77-07-13</p>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
