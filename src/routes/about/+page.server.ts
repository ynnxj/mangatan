import { getGigs } from '$lib/server/db';
import type { Gig } from '$lib/types/gigs';

/**
 * Load functions for the page.
 * Fetch all gigs from db.
 * Log error if error.
 */
export const load = async () => {
  try {
    const gigs = await getGigs();
    console.log(`About page: Loaded ${gigs.length} gigs`);
    return { gigs: gigs as Gig[] };
  } catch (error) {
    console.error('About page error:', error);
    return { gigs: [] };
  }
};
