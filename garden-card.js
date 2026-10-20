(() => {
  'use strict';
  // Clear any old stored custom greeting so the card uses the exact HTML content
  const STORAGE_KEY = 'flower.garden.greeting.20-10.v1';
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
})();
