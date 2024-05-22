import { PropsWithChildren } from 'react';

export function SectionLayout({ children }: PropsWithChildren) {
  return (
    <div className="px-5 pt-28 md:flex md:justify-center md:px-20 md:pb-6">
      <div className="max-w-full md:max-w-7xl">{children}</div>
    </div>
  );
}
