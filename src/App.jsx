
import { Suspense, useState } from 'react';
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
  const [coin, setCoin] = useState(50000);
  

  return (
    <>
      <Navbar coin={coin} ></Navbar>
      <Banner></Banner>
      <Suspense fallback ={<span className="loading loading-spinner loading-xl"></span>} >
          <Players playerPromise={playerPromise} setCoin= {setCoin} ></Players>
      </Suspense>
    
    </>
  )
}

export default App
