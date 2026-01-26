// Detects clicks outside a given element
export const overlayClick = (node: HTMLElement, onEventFunction: () => void) => {
  const handleClick = (event: MouseEvent) => {
    // If click is NOT inside the element, run a callback
    if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
      onEventFunction();
    }
  };

  // Listen for clicks anywhere in the document
  document.addEventListener('click', handleClick, true);

  return {
    // Cleanup
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
};
