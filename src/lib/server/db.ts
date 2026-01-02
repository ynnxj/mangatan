import { MongoClient } from 'mongodb';
import { MONGODB_URI, DB_NAME } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);

export const connectToDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(DB_NAME);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Helper function
export const getGigs = async () => {
  const db = await connectToDB();
  const gigs = await db.collection('gigs').find().toArray();

  return JSON.parse(JSON.stringify(gigs));
};
