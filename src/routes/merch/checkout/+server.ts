import { json } from '@sveltejs/kit';
import { connectToMerch } from '$lib/server/db';
import { ObjectId } from 'mongodb';
import type { Cart } from '$lib/types/merch';

// Similar to express's app.post('/checkout', async (req, res) => {} i guess
export const POST = async ({ request }) => {
  const cart: Cart[] = await request.json();

  if (!cart || cart.length === 0) {
    //request.json instead of express's req.body
    return json({ error: 'Cart is empty' });
  }

  const db = await connectToMerch();
  const collection = db.collection('items');

  for (const { item, quantity } of cart) {
    const currentItem = await collection.findOne({ _id: new ObjectId(item._id) });

    if (!currentItem) {
      return json({ error: `Item ${item.name} not found` });
    }

    if ((currentItem.stock_count ?? 0) < quantity) {
      return json({ error: `Not enough stock for ${item.name}` });
    }

    await collection.updateOne(
      { _id: new ObjectId(item._id) },
      { $inc: { stock_count: -(quantity ?? 1) } }
    );
  }

  return json({ success: true });
};

// Quote from chatgpt: "You don’t need an extra backend folder — SvelteKit IS your backend."
// Hmmmmm ok.
