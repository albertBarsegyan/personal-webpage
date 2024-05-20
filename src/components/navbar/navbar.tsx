'use client';
import { Button } from '@/components/common/button/button';
import { LogoIcon } from '@/icons/logo.icon';
import { useWindowSize } from '@/hooks/use-window-size';
import { useRef, useState } from 'react';
import { MenuIcon } from '@/icons/menu-icon';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Power2 } from 'gsap/gsap-core';
import { useOverflow } from '@/hooks/use-overflow';
import classNames from 'classnames';
import { RoutePath } from '@/constants/route-contants';
import { useRouter } from 'next/navigation';

const NavbarRoutes = [
  { id:0,name:'About Us',contentId:'aboutSection' },
  { id:2,name:'Open Source',contentId:'openSource' },
  { id:1,name:'Services',contentId:'services' },
];

// yacko.software@gmail.com
const EmailButton = ({ isMobile = false }:{isMobile?:boolean}) => {
  return (
    <Button
      variant='primary'
      // href='mailto:yacko.software@gmail.com?subject=Software development'
    >EMAIL US</Button>
  );
};

const MobileNavbar = () => {
  const tl = useRef<any>(null);
  const router = useRouter();
  const [isMenuOpen,setIsMenuOpen] = useState(false);

const { contextSafe } = useGSAP(()=> {
      tl.current = gsap.timeline({ paused:true,defaults: { duration:0.1 } }).to('.menu-icon > path:first-child',{
        x:1,
        attr:{ d: 'M8,2 L2,8' },
        color:'#ff6961',
        ease: Power2.easeInOut,
      },'start').to('.menu-icon > path:nth-child(2)',{
        autoAlpha:0,
      },'start').to('.menu-icon > path:nth-child(3)',{
        attr:{ d: 'M8,8 L2,2' },
        color:'#ff6961',
        x:1,
        ease: Power2.easeInOut
      },'start').to('.mobile-menu-open',{
        autoAlpha:1,
        height:'100%'
      }).to('.mobile-menu-links-wrapper > button:first-child',{
        height:'auto',
        autoAlpha:1
      })
        .to('.mobile-menu-links-wrapper > button:nth-child(2)',{
        height:'auto',
          autoAlpha:1
      })
        .to('.mobile-menu-links-wrapper > button:nth-child(3)',{
          height:'auto',
          autoAlpha:1
        })
        .to('.mobile-menu-links-wrapper > button:nth-child(4)',{
          height:'auto',
          autoAlpha:1
        })
        .to('.email-button',{
          autoAlpha:1,
        }).to('.contact-button',{
          autoAlpha:1
        });
  });

  const toggleMenu =  contextSafe(() => {
    setIsMenuOpen(prev=> !prev);
      !isMenuOpen ? tl.current.play() : tl.current.reverse();
  });

  useOverflow(isMenuOpen);

  return (
    <>
      <div className='flex flex-row justify-between top-4 mx-4 py-5 bg-blue-dark-1/80 backdrop-blur-md z-10 px-4 rounded-lg'>
        <div className='flex-one-line justify-between md:px-20 w-full gap-x-5'>

          <button type='button' onClick={()=>router.push(RoutePath.Home)} className='button-reset text-secondary flex-one-line'>
            <LogoIcon className='w-12' size={48}/>
          </button>

          <Button onClick={toggleMenu} variant='icon' className='text-secondary'>
            <MenuIcon className='menu-icon' size={36}/>
          </Button>

        </div>

      </div>

      <div className='overflow-hidden opacity-0 mobile-menu-open fixed top-[100px] left-0 bottom-0 w-full h-0 bg-primary/80 backdrop-blur-md z-10 '>
        <div className='px-5 flex flex-col justify-center gap-5 flex-shrink-0 mobile-menu-links-wrapper'>
          {NavbarRoutes.map((route) => {
            const handleScroll = () => {

              const element = document.getElementById(route.contentId);
              element?.scrollIntoView({ behavior: 'smooth' });
              toggleMenu();
            };

            return (
              <button className='h-0 overflow-hidden' key={route.id} onClick={handleScroll}>{route.name}</button>);
          })}
          <button className='h-0 overflow-hidden' onClick={()=> {router.push(RoutePath.OpenSource); toggleMenu();}}>Open Source</button>

          <EmailButton isMobile/>

          <Button className='opacity-0 overflow-hidden contact-button active:bg-white active:text-black duration-75'
                  variant='secondary'>CONTACT US</Button>

        </div>
      </div>
    </>
  );
};

const DesktopNavbar = () => {
  const router = useRouter();

  return (
    <div className='flex flex-row justify-between top-4 py-5 bg-blue-dark-1/80 backdrop-blur-md z-10 lg:px-20 rounded-lg mx-4'>
      <div className='flex-one-line justify-between w-1/2 gap-x-5'>
        <button type='button' className='button-reset text-secondary flex-one-line flex gap-1'>
          <LogoIcon size={48} color='#8B50FF'/>
          <span className='text-2xl'>YACKO</span>
        </button>

        <div className='flex-one-line gap-5 flex-shrink-0'>
          {NavbarRoutes.map((route) => {
            const handleScroll = () => {
              const element = document.getElementById(route.contentId);
              element?.scrollIntoView({ behavior: 'smooth' });
            };

            return (<button key={route.id} onClick={handleScroll}>{route.name}</button>);
          })}
        </div>
      </div>

      <div className='flex-one-line gap-x-5'>
        <EmailButton/>

        <Button variant='secondary' onClick={() => {
        }}>CONTACT US</Button>
      </div>
    </div>
  );
};

export function Navbar() {
  const { width } = useWindowSize();

  const isMobile = width <= 1100;

  return (
    <div className='md:max-w-7xl max-w-full mx-auto top-4 sticky z-10'>
      {isMobile ? <MobileNavbar/> : <DesktopNavbar/>}
    </div>
  );
};

