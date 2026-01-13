export const scroll = {
  lock() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  },

  unlock() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  },

  toggle(canLock: unknown) {
    if (canLock) {
      this.lock();
    } else {
      this.unlock();
    }
  }
};
