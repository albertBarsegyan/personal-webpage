'use client';
import Link from 'next/link';
import { Button } from '@/components/common/button/button';
import { LogoIcon } from '@/icons/logo.icon';
import { useWindowSize } from '@/hooks/use-window-size';
import { useRef, useState } from 'react';
import { MenuIcon } from '@/icons/menu-icon';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { getMenuIconAnimation } from '@/components/navbar/navbar-animations';
import timeline = gsap.timeline;
import Timeline = gsap.core.Timeline;

const NavbarRoutes = [
  { id:0,name:'About',link:'/' },
  { id:1,name:'Services',link:'/' },
  { id:2,name:'Technologies',link:'/' },
  { id:3,name:'How to',link:'/' },
  { id:4,name:'Open source',link:'/' },
];

const MobileNavbar = () => {
  const tl = useRef<any>(null);
  // const [menuSettings,setMenuSettings] = useState({ isAnimationStart:false,isMenuOpen:false });
  // const [isMenuOpen,setIsMenuOpen] = useState(false);

const { contextSafe } = useGSAP(()=> {
      tl.current = gsap.timeline({ defaults: { duration:0.3 } }).to('.menu-icon > path:first-child',{
        x:1,
        attr:{ d: 'M8,2 L2,8' },
        ease: Power2.easeInOut,
      }).to('.menu-icon > path:nth-child(2)',{
        autoAlpha:0,
      }).to('.menu-icon > path:nth-child(3)',{
        attr:{ d: 'M8,8 L2,2' },
        x:1,
        ease: Power2.easeInOut
      }).to('.mobile-menu-open',{
        autoAlpha:1,
        width: '100%',
      });
  });

  const toggleMenu =  () => {

    const menuIconAnimations = getMenuIconAnimation(isMenuOpen);

    tl.current = gsap.timeline({ paused:true });

    menuIconAnimations.map(menuIconAnimation => gsap.to(menuIconAnimation.className,menuIconAnimation.settings));
  };

  return (
    <>
      <div className='flex flex-row justify-between sticky top-0 py-5 bg-black/80 backdrop-blur-md z-10 px-4'>
        <div className='flex-one-line justify-between w-full gap-x-5'>

          <button type='button' className='button-reset text-secondary flex-one-line'>
            <LogoIcon size={100}/>
          </button>

          <Button onClick={toggleMenu} variant='icon' className='text-secondary'>
            <MenuIcon className='menu-icon' size={48}/>
          </Button>

        </div>

      </div>

      { (
        <div className='overflow-hidden opacity-0 mobile-menu-open fixed top-[140px] left-0 bottom-0 w-0 h-full bg-black/80 backdrop-blur-md z-10 '>
          <div className='px-5 flex flex-col justify-center gap-5 flex-shrink-0'>
            {NavbarRoutes.map((route) => (<Link className='text-center text-2xl' key={route.id} href={route.link}>{route.name}</Link>))}

            <Button variant='primary' onClick={() => {
          }}>EMAIL US</Button>

            <Button variant='secondary'>CONTACT US</Button>

          </div>
        </div>
      )}

    </>
  );
};

const DesktopNavbar = () => {
  return (
    <div className='flex flex-row justify-between sticky top-0 py-5 bg-black/80 backdrop-blur-md z-10'>
      <div className='flex-one-line justify-between w-1/2 gap-x-5'>
        <button type='button' className='button-reset text-secondary flex-one-line'>
          <LogoIcon size={100}/>
        </button>

        <div className='flex-one-line gap-5 flex-shrink-0'>
          {NavbarRoutes.map((route) => (<Link key={route.id} href={route.link}>{route.name}</Link>))}
        </div>
      </div>

      <div className='flex-one-line gap-x-5'>
        <Button variant='secondary' onClick={() => {
        }}>CONTACT US</Button>
        <Button variant='primary' onClick={() => {
        }}>EMAIL US</Button>
      </div>
    </div>
  );
};

export function Navbar() {
  const { width } = useWindowSize();

  const isMobile = width <= 1100;

  return (
    <div className='md:max-w-7xl max-w-full mx-auto'>
      {isMobile ? <MobileNavbar/> : <DesktopNavbar/>}
    </div>
  );
};

