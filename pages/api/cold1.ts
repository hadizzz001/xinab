import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../src/database/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    // Connect to MongoDB and get the collection
    const ProductsCollection = client.db("Power").collection("Posts");

    // Fetch all documents from MongoDB
    const data = await ProductsCollection.find().toArray();

    if (data.length > 0) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(404).json({ success: false, message: 'No data found' });
    }
  } catch (err) {
    console.error('API Error:', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
