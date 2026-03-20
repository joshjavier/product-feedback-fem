'use client';

import { Select } from '@base-ui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import IconArrowDown from '@/assets/shared/icon-arrow-down.svg';
import IconCheck from '@/assets/shared/icon-check.svg';

import styles from './index.module.css';

const sortOptions = [
  { label: 'Most Upvotes', value: 'upvotes:desc' },
  { label: 'Least Upvotes', value: 'upvotes:asc' },
  { label: 'Most Comments', value: 'comments:desc' },
  { label: 'Least Comments', value: 'comments:asc' },
];

export default function SortPicker() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState<string>('upvotes');
  const [order, setOrder] = useState<string>('desc');
  const [shouldRender, setShouldRender] = useState(false);

  const handleChange = (value: string | null) => {
    if (!value) return;
    const [sort, order] = value.split(':');
    const params = new URLSearchParams(searchParams.toString());

    if (sort === 'upvotes') {
      params.delete('sort');
    } else {
      params.set('sort', sort);
    }

    if (order === 'asc') {
      params.set('asc', '');
    } else {
      params.delete('asc');
    }

    const href = pathname + '?' + params.toString();

    setSort(sort);
    setOrder(order);
    router.push(href);
  };

  useEffect(() => {
    const initialSort = searchParams.get('sort') || 'upvotes';
    const initialOrder = searchParams.get('asc') == null ? 'desc' : 'asc';

    setSort(initialSort);
    setOrder(initialOrder);
    setShouldRender(true);
  }, []);

  if (!shouldRender) {
    return <div className="text-[13px] md:text-[14px]">Loading...</div>;
  }

  return (
    <Select.Root items={sortOptions} value={`${sort}:${order}`} onValueChange={handleChange}>
      <Select.Trigger
        className={`${styles.Select} md:text-[14px]`}
        aria-label="Sort product requests"
      >
        <span>
          Sort by : <Select.Value className={styles.Value} />
        </span>
        <Select.Icon className={styles.SelectIcon}>
          <IconArrowDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner
          alignItemWithTrigger={false}
          align="start"
          alignOffset={2}
          sideOffset={32}
        >
          <Select.Popup className={styles.Popup}>
            <Select.List>
              {sortOptions.map(({ label, value }) => (
                <Select.Item key={label} value={value} className={styles.Item}>
                  <Select.ItemText>{label}</Select.ItemText>
                  <Select.ItemIndicator>
                    <IconCheck />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
