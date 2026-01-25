import { writable } from 'svelte/store';

export const isMobile = writable(false);

if (typeof window !== 'undefined') {
  const handleResize = () => isMobile.set(window.innerWidth <= 1050);
  window.addEventListener('resize', handleResize);
  handleResize();
}
