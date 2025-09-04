//Patient Dash Card Content: This is the Dashboard info/section under Header

import React from 'react';
import { BiBook, BiCheck, BiHeart, BiMessage } from 'react-icons/bi';
import "../styles/drcards.css";
const drcontent = [
    {
        title: 'pending checkins',
        icon: <BiBook />,
        className: 'card-pending'
    },
    {
        title: 'messages from today',
        icon: <BiMessage />,
        className: 'card-messages'
    },
    {
        title: 'alerts!',
        icon: <BiHeart />,
        className: 'card-alerts'
    }
];

const Drcards = () => {
    return(

          <div className="drcard_contain">
      {drcontent.map((item, index) => (
        <div key={index} className={`drcard ${item.className}`}>
          <div className="drcard_cover">{item.icon}</div>
          <div className="drcard_titles">
            <h5>{item.title}</h5>
          </div>
        </div>
      ))}
    </div>

    )
};
export default Drcards;