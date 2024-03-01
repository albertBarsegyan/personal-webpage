'use client';
import { Button } from '@/components/button/button';
import { PcIcon } from '@/icons/pc-icon';

export function HeroSection() {
  return (
    <div className='mt-10'>
      <div className='w-full flex justify-between items-center'>
        <div>
          <h1>Lorem ipsum dolor sit.</h1>
          <p className='max-w-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim et eveniet maiores nam nobis, quibusdam rem! Culpa, earum error fuga incidunt numquam pariatur sit!
          </p>
          <Button variant='secondary' type='button' onClick={()=>{}}>Click me</Button>
        </div>

        <div className='text-blueberry-300'>
          <PcIcon size={400}/>
        </div>
      </div>

      <div></div>
    </div>
  );
};
