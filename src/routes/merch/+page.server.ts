import { getMerch } from '$lib/server/db';

/**
 * Load functions for the page.
 * Fetch all merch items from db.
 * Log error if error.
 */
export const load = async () => {
  try {
    const merch = await getMerch();
    return { merch };
  } catch (error) {
    console.error('Merch page error:', error);
    return { merch: [] };
  }
};
