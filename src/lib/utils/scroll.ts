export const scroll = {
  // Lock scrolling
  lock() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  },

  // Unlock scrolling
  unlock() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  },

  /**
   * Toggle scrolling.
   * If able to lock, lock,
   * otherwise, unlock
   */
  toggle(canLock: unknown) {
    if (canLock) {
      this.lock();
    } else {
      this.unlock();
    }
  }
};
