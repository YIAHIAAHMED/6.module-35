import React from 'react';

import SelectedCard from '../../../ui/SelectedCard';

const SelectedPlayers = ({ 
    selectedPlayers, 
    setSelectedPlayers, 
    coin, 
    setCoin }) => {
    console.log('selectedPlayers', selectedPlayers);

    const handleDeleteSelectedPlayer = (player)=>{

        console.log('player', player);
        const filterdPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.name !==player.name)
        console.log('filterdPlayers', filterdPlayers);
        setSelectedPlayers(filterdPlayers);
        setCoin(coin + player.price);
        
    }
    return (
        <div>
            <div className='space-y-4'>
                {
                    selectedPlayers.length ===0?
                    <div className='h-[400px] flex justify-center items-center flex-col gap-4 '>
                        <h2 className='font-semibold text-xl'>No Players Selected yet </h2>
                        <p>Go to Available tab to select players</p>
                     </div>

                    
                     : selectedPlayers.map((player, index) => {
                        return (
                            <SelectedCard player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer} key={index} ></SelectedCard>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;