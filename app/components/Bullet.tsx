import React, { ReactNode } from 'react';
import { RiCheckLine } from '@remixicon/react';
type Props = {
  children: ReactNode;
};

export default function Bullet({ children }: Props) {
  return (
    <div className='className="mb-8 md:text-xl" flex items-center text-lg font-normal text-neutral-600'>
      <RiCheckLine className="mr-3 rounded-full bg-indigo-50 fill-indigo-500" size={'24px'} />
      {children}
    </div>
  );
}
