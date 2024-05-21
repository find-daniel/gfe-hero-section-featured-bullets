import React, { ReactElement } from 'react';

type Props = {
  text: string;
  type: 'primary' | 'secondary';
};

export default function Button({ text, type, ...rest }: Props): ReactElement {
  return (
    <button
      className={[
        'w-full rounded px-[28px] py-3 text-base font-medium shadow md:text-lg',
        'md:px-14 md:py-4 xl:px-9',
        type === 'primary'
          ? 'border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:bg-neutral-50'
          : 'bg-indigo-700 text-white hover:bg-indigo-800 focus-visible:bg-indigo-800',
        'focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]',
        'disabled:border-none disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none',
      ].join(' ')}
      type="button"
      {...rest}>
      {text}
    </button>
  );
}
