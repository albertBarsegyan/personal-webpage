'use client';
import { Button } from '@/components/common/button/button';
import { CodeIllustration } from '@/icons/code-illustration';

export function AboutUsSection() {
  return (
    <div className='mt-10 md:mt-20'>
      <div className='flex flex-col md:flex-row justify-between gap-x-4'>

        <h2 className='font-bold text-2xl'>Introduction</h2>

        <p className='max-w-3xl text-base mt-4 md:mt-0'>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>

      </div>

      <div className='flex flex-col gap-x-0 md:gap-x-4 md:flex-row justify-between align-middle mt-10 md:mt-24'>
        <div>
          <CodeIllustration className='w-full md:w-100' size={400}/>
        </div>

        <div>
          <span className='md:text-3xl text-xl font-bold'>About something</span>
          <p className='max-w-3xl text-base mt-5 md:mt-10'>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
            n tempor.
          </p>

          <Button className='mt-6 w-full md:w-fit' onClick={()=>{}}>Get in touch</Button>
        </div>
      </div>
    </div>
  );
};
