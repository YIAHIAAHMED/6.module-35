
import { Suspense } from 'react';
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Players from './components/homepage/players/Players';
import Navbar from './components/navbar/Navbar'

const fetchPlayer = async () => {
  const res = await fetch('./Data.json');
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback ={<span className="loading loading-spinner loading-xl"></span>} >
          <Players playerPromise={playerPromise} ></Players>
      </Suspense>
    
    </>
  )
}

export default App
