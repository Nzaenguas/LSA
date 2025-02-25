import React from 'react';
import SignUp from '../components/SignUp';

const HomePage: React.FC = () => {
  const title = "Welcome to Live Stream";
  console.log(title); // ✅ Just print it

  return (
    <div>
      <h1>{title}</h1>
      <SignUp />
    </div>
  );
};

export default HomePage;