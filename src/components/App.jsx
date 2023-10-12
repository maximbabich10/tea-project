import React from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import useUser from '../../customHooks/useUser';
import AppNavBar from './Pages/AppNavBar'
import AdminPage from './Pages/AdminPage';


function App({ user }) {
  const {
    currentUser, signInHandler, signUpHandler, logoutHandler,
  } = useUser(user);
  return (
    <Container>
      <AppNavBar logoutHandler={logoutHandler} currentUser={currentUser} />
      <Routes>
        <Route path="/auth/signin" element={<SignInPage signInHandler={signInHandler} />} />
        <Route path="/auth/signup" element={<SignUpPage signUpHandler={signUpHandler} />} />
        <Route path="/admin/page" element={<AdminPage />} />


      </Routes>
    </Container>
  );
}

export default App;
