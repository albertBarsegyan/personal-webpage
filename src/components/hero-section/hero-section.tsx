'use client';
import { Button } from '@/components/common/button/button';
import { PcIcon } from '@/icons/pc-icon';
import { MapCheckIcon } from '@/icons/map-check-icon';
import { MailIcon } from '@/icons/mail-icon';
import { PhoneIcon } from '@/icons/phone-icon';

const separator = <div className='h-28 w-px bg-blueberry-200 rounded-3xl mx-10'/>;

  export function HeroSection() {
  return (
    <div className='mt-10'>
      <div className='w-full flex justify-between items-center'>
        <div>
          <h1 className='text-5xl'>Lorem ipsum dolor sit.</h1>
          <p className='max-w-xl text-xl mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim et eveniet maiores nam nobis, quibusdam rem! Culpa, earum error fuga incidunt numquam pariatur sit!
          </p>
          <div className='mt-10'>
            <Button variant='secondary' type='button' onClick={()=>{}}>Click me</Button>
          </div>
        </div>

        <div className='text-blueberry-300'>
          <PcIcon size={400}/>
        </div>
      </div>

      <div className='flex items-center justify-center flex-row p-6 rounded-full bg-blue-gray-900 mt-20'>
        <div className='flex flex-row items-center gap-x-2'>
          <div>
            <MapCheckIcon/>
          </div>
          <div>
            <span>Pay Us a Visit</span>
            <p>Union St, Seattle, WA 98101, United States</p>
          </div>
        </div>
        {separator}
        <div className='flex flex-row items-center gap-x-2'>
          <div>
            <MailIcon/>
          </div>
          <div>
            <span>Pay Us a Visit</span>
            <p>Union St, Seattle, WA 98101, United States</p>
          </div>
        </div>
        {separator}
        <div className='flex flex-row items-center gap-x-2'>
          <div>
            <PhoneIcon/>
          </div>
          <div>
            <span>Pay Us a Visit</span>
            <p>Union St, Seattle, WA 98101, United States</p>
          </div>
        </div>
      </div>
    </div>
  );
};
