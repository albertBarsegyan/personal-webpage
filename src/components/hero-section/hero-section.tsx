'use client';
import { Button } from '@/components/common/button/button';
import { PcIcon } from '@/icons/pc-icon';
import { MapCheckIcon } from '@/icons/map-check-icon';
import { MailIcon } from '@/icons/mail-icon';
import { PhoneIcon } from '@/icons/phone-icon';
import { LogoIcon } from '@/icons/logo.icon';

const separator = <div className='h-28 w-px bg-forth rounded-3xl'/>;

  export function HeroSection() {
  return (
    <div className='mt-10'>
      <div className='w-full flex justify-between items-center'>
        <div className='mr-4'>
          <h1 className='text-5xl'>Lorem ipsum dolor sit.</h1>
          <p className='max-w-xl text-xl mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim et eveniet maiores nam nobis, quibusdam rem! Culpa, earum error fuga incidunt numquam pariatur sit!
          </p>
          <div className='mt-10'>
            <Button variant='secondary' type='button' onClick={()=>{}}>Click me</Button>
          </div>
        </div>

        <div className='relative'>
          <div className='text-secondary'>
            <PcIcon size={400}/>
          </div>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%]'>
            <LogoIcon/>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between flex-row py-6 px-16 rounded-full bg-primary mt-20'>
        <div className='flex flex-row items-center gap-x-2'>
          <div>
            <MapCheckIcon/>
          </div>
          <div>
            <span>Meet Us</span>
            <p>Everywhere in Armenia, Yerevan</p>
          </div>
        </div>
        {separator}
        <div className='flex flex-row items-center gap-x-2'>
          <div>
            <MailIcon/>
          </div>
          <div>
            <span>Mail us</span>
            <a href="mailto:albertbarsegyan6@gmail.com" className='block'>albertbarsegyan6@gmail.com</a>
          </div>
        </div>
        {separator}
        <div className='flex flex-row items-center gap-x-2'>
          <div>
            <PhoneIcon/>
          </div>
          <div>
            <span>Call us</span>
            <p>+374 (94)-77-07-13</p>
          </div>
        </div>
      </div>
    </div>
  );
};
