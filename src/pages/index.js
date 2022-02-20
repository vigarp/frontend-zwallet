import React from 'react';
import { Navigate } from 'react-router-dom';

const LandingPage = () => {
  const auth = localStorage.getItem('token');
  if (auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/main/home" />;
  }
  return (
    <div>LandingPage</div>
  )
}

export default LandingPage