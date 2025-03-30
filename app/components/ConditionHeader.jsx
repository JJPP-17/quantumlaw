'use client'; // This is a client component

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

export default function ConditionalHeadear() {
  const pathname = usePathname();

  // Only render the Header if the pathname is not '/login'
  return pathname !== '/admin' && pathname !== '/login' ?(
    <Navigation/> // Pass the logout function to Header
  ) : null;
};
