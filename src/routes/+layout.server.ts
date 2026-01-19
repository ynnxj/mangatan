import { getNews } from '$lib/server/db';

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
