import { Clerk } from '@clerk/clerk-sdk-node';

if (!process.env.CLERK_API_KEY) {
  throw new Error('Missing CLERK_API_KEY environment variable');
}

const clerk = new Clerk({
  apiKey: process.env.CLERK_API_KEY as string,
});

export { clerk };