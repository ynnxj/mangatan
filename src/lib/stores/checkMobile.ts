import { writable } from 'svelte/store';

// Store to track if mobile viewport
export const isMobile = writable(false);

// Only run in the browser
if (typeof window !== 'undefined') {
  // Update isMobile when window is resized
  const handleResize = () => isMobile.set(window.innerWidth <= 1050);
  window.addEventListener('resize', handleResize);
  handleResize();
}
