'use client';

import { ComponentPropsWithRef, memo } from 'react';

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

interface ToggleButtonProps extends ComponentPropsWithRef<'button'> {
  open: boolean;
  handleToggle: () => void;
}

const ToggleButton = memo(function ToggleButton({
  open,
  handleToggle,
  className,
  ...props
}: ToggleButtonProps) {
  return (
    <button
      className={['flex size-10 items-center justify-center', className].join(' ')}
      onClick={handleToggle}
      {...props}
    >
      {open ? <CloseIcon label="Close menu" /> : <MenuIcon label="Open menu" />}
    </button>
  );
});

export default ToggleButton;
