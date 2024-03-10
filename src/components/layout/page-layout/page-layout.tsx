import { PropsWithChildren } from 'react';

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className='px-20 pb-20 flex justify-center'>
      <div className='max-w-7xl'>
        {children}
      </div>
    </div>
  );
}
