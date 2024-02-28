import { PropsWithChildren } from 'react';

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className='px-20'>
      {children}
    </div>
  );
}
