import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../src/database/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ success: false, message: 'ID is required' });
    }

    // Connect to MongoDB and get the collection
    const ProductsCollection = client.db("Power").collection("Posts");

    // Fetch a single document by ID
    const post = await ProductsCollection.findOne({ _id: new ObjectId(id as string) });

    if (post) {
      return res.status(200).json({ success: true, data: post });
    } else {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
  } catch (err) {
    console.error('API Error:', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
