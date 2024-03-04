'use client';
import Link from 'next/link';
import { Button } from '@/components/common/button/button';
import { LogoIcon } from '@/icons/logo.icon';

const NavbarRoutes = [
  { id:0,name:'About',link:'/' },
  { id:1,name:'Services',link:'/' },
  { id:2,name:'Technologies',link:'/' },
  { id:2,name:'How to',link:'/' },
  { id:2,name:'Open source',link:'/' },
];

export function Navbar() {
  return (
    <div className='flex flex-row justify-between sticky top-0 py-5 bg-black/80 backdrop-blur-md'>
      <div className='flex-one-line justify-between w-1/2 gap-x-5'>
        <button type='button' className='button-reset text-blueberry-300 flex-one-line'>
          <LogoIcon size={100}/>
        </button>

        <div className='flex-one-line gap-5'>
          {NavbarRoutes.map((route) => (<Link key={route.id} href={route.link}>{route.name}</Link>))}
        </div>
      </div>

      <div className='flex-one-line gap-x-5'>
        <Button variant='secondary' onClick={()=>{}}>CONTACT US</Button>
        <Button variant='primary' onClick={()=>{}}>EMAIL US</Button>
      </div>
    </div>
  );
};

