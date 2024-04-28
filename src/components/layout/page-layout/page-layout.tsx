import { PropsWithChildren } from 'react';

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className='md:px-20 md:pb-6 px-5 md:flex md:justify-center'>
      <div className='md:max-w-7xl max-w-full'>
        {children}
      </div>
    </div>
  );
}
