import { getGigs } from '$lib/server/db';

/**
 * Load functions for the page.
 * Fetch all gigs from db.
 * Log error if error.
 */
export const load = async () => {
  try {
    const gigs = await getGigs();
    console.log(`About page: Loaded ${gigs.length} gigs`);
    return { gigs };
  } catch (error) {
    console.error('About page error:', error);
    return { gigs: [] };
  }
};
