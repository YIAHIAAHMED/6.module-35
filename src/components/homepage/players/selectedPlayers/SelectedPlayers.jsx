import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

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
                    selectedPlayers ===0?
                    <div>
                        <h2>hello </h2>
                     </div>
                    :
                    selectedPlayers.map((player, index) => {
                        return (
                            <div key={index} className='flex items-center gap-6 justify-between p-10 rounded-2xl border' >
                                <div className='flex items-center gap-6'>
                                    <img
                                        src={player.image}
                                        alt={player.name}
                                        className='h-[75px] w-auto rounded-md ' />
                                    <div>
                                        <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser /> {player.name}</h2>
                                        <p>{player.role} </p>
                                    </div>

                                </div>
                                <button
                                    className='btn text-red-500'
                                    onClick={() => handleDeleteSelectedPlayer(player) }
                                ><MdDelete />
                                </button>

                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;