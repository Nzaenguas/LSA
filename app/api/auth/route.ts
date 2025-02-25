import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongodb';
import { clerk } from '../../../clerkConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { method } = req;

  switch (method) {
    case 'POST':
      // Handle user sign-up or sign-in
      const { email, password } = req.body;
      try {
        const user = await clerk.users.createUser({
          emailAddress: email,
          password,
        });
        res.status(200).json(user);
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}