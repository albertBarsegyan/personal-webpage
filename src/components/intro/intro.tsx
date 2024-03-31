'use client';
import { LogoIcon } from '@/icons/logo.icon';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Simulate } from 'react-dom/test-utils';
import animationEnd = Simulate.animationEnd;
import { useLocalStorage } from '@/hooks/use-storage';
import { StorageKey } from '@/constants/storage-constant';
import { useOverflow } from '@/hooks/use-overflow';

export function Intro() {
  const [isFirstTime,setIsFirstTime] = useLocalStorage(StorageKey.IsFirstLogin,true);
  const tl = useRef<any>(null);

  useGSAP(()=> {
    tl.current = gsap.timeline({ defaults: { duration:0.6 } }).to('.welcome-text',{
      autoAlpha:1,
      scale: 3,
      display:'block'
  }).to('.welcome-text',{
      autoAlpha:0,
      scale:0,
      delay:1,
      display:'none'
    }).to('.logo',{
      opacity:1,
      display:'block',
      color:'#8b50ff',
      scale:3
    }).to('.logo',{
      opacity:0,
      delay:1,
      display:'none',
      color:'#8b50ff',
      scale:0,
      onComplete:()=>setIsFirstTime(false)
    });
  });

  useOverflow(isFirstTime);

  if (isFirstTime)
  return (
    <div  className='flex items-center justify-center fixed top-0 bottom-0 h-screen left-0 w-full bg-black z-20'>
      <p className='welcome-text text-3xl opacity-0 hidden'>Welcome</p>

      <div className='logo opacity-0 hidden'>
        <LogoIcon/>
      </div>
    </div>
  );

  return null;
};
