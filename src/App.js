import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Project from './components/Project';
import Stack from './components/Stack';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
      <Header/>
      <Home id="home" />
      <Introduction id="introduction" />
      <Project id="project" />
      <Stack id="stack" />
      <Footer/>
    </>
  );
};

export default App;