import React from 'react';
import { Link } from "react-router-dom";
// import Layout from '../LandingPage/LandingPage';
import './LandingPage.css';


const LandingPage = () => {
  return (
    // <Layout isLandingPage>
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
    // </Layout>
  );
};
  
export default LandingPage;