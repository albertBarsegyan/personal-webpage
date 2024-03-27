'use client';
import { Button } from '@/components/common/button/button';
import { PcIcon } from '@/icons/pc-icon';
import { MapCheckIcon } from '@/icons/map-check-icon';
import { MailIcon } from '@/icons/mail-icon';
import { PhoneIcon } from '@/icons/phone-icon';
import { LogoIcon } from '@/icons/logo.icon';

const separator = <div className='md:h-28 my-4 md:my-0 h-px w-full md:w-px bg-forth rounded-3xl'/>;

  export function HeroSection() {
  return (
    <div className='mt-10'>
      <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center'>
        <div className='mr-4'>
          <h1 className='md:text-5xl text-2xl'>Lorem ipsum dolor sit.</h1>
          <p className='max-w-xl md:text-xl text-sm mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim et eveniet maiores nam nobis, quibusdam rem! Culpa, earum error fuga incidunt numquam pariatur sit!
          </p>
          <div className='mt-5 md:mt-10'>
            <Button className='text-sm md:text-xl' variant='secondary' type='button' onClick={()=>{}}>Click me</Button>
          </div>
        </div>

        <div className='relative flex items-center justify-center md:block overflow-hidden'>
          <div className='text-secondary'>
            <PcIcon className='w-full md:w-100' size={400}/>
          </div>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%]'>
            <LogoIcon className='w-full md:w-70'/>
          </div>
        </div>
      </div>

      <div className='flex items-start md:items-center md:justify-between flex-col md:flex-row py-6 px-4 md:px-16 rounded-3xl md:rounded-full bg-primary mt-10 md:mt-20'>
        <div className='flex flex-row items-center gap-x-2 w-full md:w-fit'>
          <div>
            <MapCheckIcon/>
          </div>
          <div>
            <span>Meet Us</span>
            <p>Everywhere in Armenia, Yerevan</p>
          </div>
        </div>
        {separator}
        <div className='flex flex-row items-center gap-x-2 w-full md:w-fit'>
          <div>
            <MailIcon/>
          </div>
          <div className='overflow-hidden'>
            <span>Mail us</span>
            <a href="mailto:albertbarsegyan6@gmail.com" className='block text-ellipsis overflow-hidden underline'>albertbarsegyan6@gmail.com</a>
          </div>
        </div>
        {separator}
        <div className='flex flex-row items-center gap-x-2 w-full md:w-fit'>
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
