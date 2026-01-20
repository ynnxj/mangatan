import { MongoClient } from 'mongodb';
import { MONGODB_URI, DB_NEWS, DB_GIGS, DB_MERCH } from '$env/static/private';
import type { Post } from '$lib/types/posts';

const client = new MongoClient(MONGODB_URI);
let connected = false;

// Connect to client
const connectToClient = async () => {
  if (!connected) {
    await client.connect();
    connected = true;
    console.log('Connected to MongoDB');
  }
  return client;
};

const connectToDb = async (database: string) => {
  try {
    const client = await connectToClient();
    return client.db(database);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Connect to dbs
export const connectToNews = () => connectToDb(DB_NEWS),
  connectToGigs = () => connectToDb(DB_GIGS),
  connectToMerch = () => connectToDb(DB_MERCH);

// Get collections
export const getCollection = async <T = unknown>(
  database: string,
  collectionName: string
): Promise<T[]> => {
  const db = await connectToDb(database);
  const data = await db.collection(collectionName).find().toArray();
  return JSON.parse(JSON.stringify(data));
};

export const getNews = () => getCollection<Post>(DB_NEWS, 'posts'),
  getGigs = () => getCollection(DB_GIGS, 'gigs'),
  getMerch = () => getCollection(DB_MERCH, 'items');
