//Patient Dash Card Content: This is the Dashboard info/section under Header

import React from 'react';
import { BiBook, BiCheck, BiHeart, BiMessage } from 'react-icons/bi';
import "../styles/drcards.css";
import { Link } from 'react-router-dom';



const drcontent = [
     {
        title: 'alerts!',
        icon: <BiHeart />,
        className: 'card-alerts',
        link: '/alerts' // Links card to alerts page

    },

    {
        title: 'send care instructions',
        icon: <BiMessage />,
        className: 'drcard-intructions',
        link: '/drform'
        
        // Links card to care instructions page
        // link: '/careinstructions'
    },
   
   
];

const Drcards = () => {
    return(

          <div className="drcard_contain">
      {drcontent.map((item, index) => (
        <Link to={item.link} key={index} className={`drcard ${item.className}`}>
          <div className="drcard_cover">{item.icon}</div>
          <div className="drcard_titles">
            <h5>{item.title}</h5>
          </div>
        </Link>
        // </div>
      ))}
    </div>
    );

};
export default Drcards;