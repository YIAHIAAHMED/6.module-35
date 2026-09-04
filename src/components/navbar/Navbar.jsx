import React from 'react';
import dollar from '../../assets/dollar.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="flex justify-between items-center gap-2 font-bold text-xl">
                    0 coins
                    <img src={dollar} alt='dollar'/>
                </button>
            </div>
        </div>
    );
};

export default Navbar;