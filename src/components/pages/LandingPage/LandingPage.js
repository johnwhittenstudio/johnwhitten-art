import React from 'react';
import { Link } from "react-router-dom";
import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <header >
        <h1 >John Whitten</h1>
      </header >
      <main >
        <Link to="/home">
          <button >Enter</button>
        </Link>
      </main>
    </div>
  );
};
  
export default LandingPage;