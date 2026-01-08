import { getMerch } from '$lib/server/db';
import type { Item } from '$lib/types/merch';

export const load = async () => {
  try {
    const merch = await getMerch();
    return { merch: merch as Item[] };
  } catch (error) {
    console.error('Merch page error:', error);
    return { merch: [] };
  }
};
