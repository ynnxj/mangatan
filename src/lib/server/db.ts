//TODO: Refactor this. It's too loooong and repeating.

import { MongoClient } from 'mongodb';
import { MONGODB_URI, DB_NEWS, DB_GIGS, DB_MERCH } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);
let connected = false;

const connectToClient = async () => {
  if (!connected) {
    await client.connect();
    connected = true;
    console.log('Connected to MongoDB');
  }
  return client;
};

export const connectToNews = async () => {
  try {
    const client = await connectToClient();
    return client.db(DB_NEWS);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export const getNews = async () => {
  const db = await connectToNews();
  const news = await db.collection('posts').find().toArray();

  return JSON.parse(JSON.stringify(news));
};

export const connectToGigs = async () => {
  try {
    const client = await connectToClient();
    return client.db(DB_GIGS);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export const getGigs = async () => {
  const db = await connectToGigs();
  const gigs = await db.collection('gigs').find().toArray();

  return JSON.parse(JSON.stringify(gigs));
};

export const connectToMerch = async () => {
  try {
    const client = await connectToClient();
    return client.db(DB_MERCH);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export const getMerch = async () => {
  const db = await connectToMerch();
  const merch = await db.collection('items').find().toArray();

  return JSON.parse(JSON.stringify(merch));
};
