import React from 'react';

import Card from '../../../ui/Card';

const AvailablePlayers = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    console.log('players', players);
    return (
        <div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        players.map((player, index) => {
                            console.log('player', player);
                            return (
                                <Card
                                    player={player}
                                    key={player.id || index}
                                    setCoin={setCoin}
                                    coin={coin}
                                    setSelectedPlayers={setSelectedPlayers}
                                    selectedPlayers={selectedPlayers}
                                />
                            );
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default AvailablePlayers;