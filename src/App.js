import React from 'react';
import { UserProvider } from './components/usecontext';
import SignupForm from './components/signup';
import DisplayData from './components/aboutus';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <center>
        <SignupForm />
        <DisplayData />
        </center>
      </div>
    </UserProvider>
  );
}

export default App;
