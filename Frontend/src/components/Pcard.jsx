//Patient Dash Card Content: This is the Dashboard info/section under Header

import React from 'react';
import { BiBook, BiCheck, BiHeart } from 'react-icons/bi';

const pcontent = [
    {
        title: 'recovery',
        icon: <BiBook />,
    },
    {
        title: 'daily checkins',
        icon: <BiHeart />,
    },
    {
        title: 'active instuctions',
        icon: <BiCheck />,
    },
];

const Pcard = () => {
    return(
        <div className='pcard_contain'>
            {pcontent.map((item) => (
                <div className="pcard">
                    <div className="pcard_cover">{item.icon}</div>

                     <div className="pcard_titles"><h5>{item.title}</h5></div>
                </div>
            ))}

        </div>
    )
};
export default Pcard;