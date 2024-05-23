'use client';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  
  return (
    <label className='border-2 rounded px-2'>
      <select
        defaultValue={localActive}
        className='bg-[#121A32] py-2'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en' className=''>English</option>
        <option value='ar' className=''>العربية</option>
      </select>
    </label>
  );
}
