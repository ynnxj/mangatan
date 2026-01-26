import { getNews } from '$lib/server/db';

/**
 * Load functions for the page.
 * Fetch all news from db.
 * Log error if error.
 */
export const load = async () => {
  try {
    const news = await getNews();
    console.log(`Loaded ${news.length} posts for sidepanel`);
    return { news };
  } catch (error) {
    console.error('Layout load error:', error);
    return { news: [] };
  }
};
