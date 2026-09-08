import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false);
    // console.log(player.price);
    const handleChoosePlayer = () => {

        let newCoin = coin - player.price;
        if (newCoin >= 0) {
            setCoin(newCoin);
            toast.success(` ${player.name} is selected`);
            setIsSelected(true);
            setSelectedPlayers([...selectedPlayers, player]);
        } else {
            toast.error('not enough  hase this player');
            return;
        }
    };
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='w-full'>
                <img
                    className='w-full h-64'
                    src={player.image}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser /> {player.name}</h2>
                <div className='flex justify-between gap-2 items-center'>
                    <div className='flex gap-2 items-center'>
                        <FaFlag />
                        <p>{player.country}</p>
                    </div>

                    <button className='btn' >{player.role} </button>
                </div>
                <div className="divider"></div>
                <h2 className='font-bold'>{player.rating}</h2>
                <div className='flex justify-between gap-4 font-bold'>
                    <p>{player.
                        battingStyle} </p>
                    <p className='text-left'>{player.bowlingStyle} </p>
                </div>

                <div className="card-actions justify-between items-center">
                    <p className='font-semibold'>Price: ${player.price} </p>
                    <button
                        onClick={handleChoosePlayer}
                        disabled={isSelected}
                        // or disabled = {isSelected? true: false}
                        // className="btn ">{isSelected ===true ? 'Selected': 'Choose Player'} 
                        className="btn ">{isSelected ? 'Selected' : 'Choose Player'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;