import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Header } from './components/header';
import { SignUp } from './pages/signup';

function App() {

  return (
    <div>
     <SignUp />
    </div>
  );
}

export default App;
