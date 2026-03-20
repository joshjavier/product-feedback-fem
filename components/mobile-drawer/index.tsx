'use client';

import { Drawer } from '@base-ui/react';
import { BreakPointHooks, breakpointsTailwind } from '@react-hooks-library/core';
import { ComponentPropsWithRef, useCallback, useEffect, useRef, useState } from 'react';

import ToggleButton from '../header-nav/toggle-button';

import styles from './index.module.css';

const { useGreater } = BreakPointHooks(breakpointsTailwind);

interface MobileDrawerProps extends ComponentPropsWithRef<'div'> {}

export default function MobileDrawer({ children }: MobileDrawerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<() => void | null>(null);
  const fromTabletSize = useGreater('md');

  const handleToggle = useCallback(() => {
    ref.current?.();
  }, []);

  useEffect(() => {
    ref.current = () => {
      setOpen((o) => !o);
    };
  }, []);

  useEffect(() => {
    if (fromTabletSize) {
      setOpen(false);
    }
  }, [fromTabletSize]);

  return (
    <Drawer.Root open={open} onOpenChange={setOpen} swipeDirection="right">
      <Drawer.Trigger
        className="absolute top-4 right-3.5 shrink-0 md:hidden"
        render={(props) => (
          <ToggleButton open={open} handleToggle={handleToggle} className={props.className} />
        )}
      ></Drawer.Trigger>
      <Drawer.Portal className={styles.Portal}>
        <Drawer.Backdrop className={styles.Backdrop} />
        <Drawer.Viewport className={styles.Viewport}>
          <Drawer.Popup className={styles.Popup}>
            <Drawer.Content className={styles.Content}>
              <Drawer.Title className="sr-only">Mobile navigation</Drawer.Title>
              {children}
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
