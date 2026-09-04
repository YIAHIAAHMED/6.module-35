import React, { use } from 'react';
import AvailablePlayers from '../../availablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
    // console.log(playerPromise)
    const players = use(playerPromise);
    console.log(players);
    return (
        <div className='container mx-auto'> 
            <h2> Players: {players.length} </h2>
            <AvailablePlayers players= {players} ></AvailablePlayers>
        </div>
    );
};

export default Players;