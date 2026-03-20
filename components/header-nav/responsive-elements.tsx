import { ComponentPropsWithRef } from 'react';

import MobileDrawer from '../mobile-drawer';

interface ResponsiveElementsProps extends ComponentPropsWithRef<'div'> {}

export default function ResponsiveElements({ children }: ResponsiveElementsProps) {
  return (
    <>
      <MobileDrawer>{children}</MobileDrawer>
      <div className="hidden md:contents">{children}</div>
    </>
  );
}
