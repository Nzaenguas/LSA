import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <SignedOut>
          <Link href="/signin">Sign In</Link>
          <Link href="/signup">Sign Up</Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
};

export default Header;