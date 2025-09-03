//Patient Dash Card Content: This is the Dashboard info/section under Header

import React from 'react';
import { BiBook, BiCheck, BiHeart } from 'react-icons/bi';
import "../styles/pcards.css";

const pcontent = [
    {
        title: 'recovery',
        icon: <BiBook size={28}/>,
        className: 'card-recovery'
    },
    {
        title: 'daily checkins',
        icon: <BiHeart size={28}/>,
        className: 'card-checkins'
    },
    {
        title: 'active instuctions',
        icon: <BiCheck size={28}/>,
        className: 'card-instructions'
    },
    {
        title: 'days in recovery',
        icon: <BiCheck size={28}/>,
        className: 'card-recovery'
    }

];

const Pcard = () => {
    return(
        <div className='pcard_contain'>
            {pcontent.map((item, index) => (
               
                <div key={index} className={`pcard ${item.className}`}>
                    <div className="pcard_cover">{item.icon}</div>

                     <div className="pcard_titles"><h5>{item.title}</h5></div>
                </div>
                
            ))}


        </div>
    )
};
export default Pcard;