'use client';

import { useState } from 'react';

import IconClose from '@/assets/shared/mobile/icon-close.svg';
import IconHamburger from '@/assets/shared/mobile/icon-hamburger.svg';

function MenuIcon({ label }: { label: string }) {
  return (
    <>
      <IconHamburger aria-hidden="true" focusable="false" />
      <span className="sr-only">{label}</span>
    </>
  );
}

function CloseIcon({ label }: { label: string }) {
  return (
    <>
      <IconClose aria-hidden="true" focusable="false" />
      <span className="sr-only">{label}</span>
    </>
  );
}

export default function ToggleButton() {
  const [open, setOpen] = useState(false);

  return (
    <button className="flex size-10 items-center justify-center" onClick={() => setOpen((o) => !o)}>
      {open ? <CloseIcon label="Close menu" /> : <MenuIcon label="Open menu" />}
    </button>
  );
}
