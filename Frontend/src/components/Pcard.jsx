//Patient Dash Card Content: This is the Dashboard info/section under Header

import React from 'react';
import { useEffect, useState } from 'react';
import { BiBook, BiCheck, BiHeart } from 'react-icons/bi';
import "../styles/pcards.css";
import { Link } from 'react-router-dom';

// FETCH days in recovery from backend to display it (Optional)
const Pcard = () => {
    const [daysInRecovery, setDaysInRecovery] = useState(null);

    useEffect(() => {
        // Fetch days in recovery from backend API
        fetch('http://localhost:5000/api/days-in-recovery') // Replace with our actual API endpoint
            .then(response => response.json())
            .then(data => {
                setDaysInRecovery(data.days); // Assuming the API returns { days: number }
            })
            .catch(error => {
                console.error('Cannot find days in recovery:', error);
            });
    }, []);

const pcontent = [
    // {
    //     title: 'recovery',
    //     icon: <BiBook size={28}/>,
    //     className: 'card-recovery'
    // },
    {
        title: 'daily checkins',
        icon: <BiHeart size={28}/>,
        className: 'card-checkins',
        link: '/dailycheckin' // Links card to daily check-in page
    },
    {
        title: 'active instuctions',
        icon: <BiCheck size={28}/>,
        className: 'card-instructions',
         link: '/careinstructions' // Links card to care instructions page
    },
    {
        title: daysInRecovery !== null ? `${daysInRecovery} days in recovery` : 'days in recovery',
        // title: 'days in recovery',
        icon: <BiCheck size={28}/>,
        className: 'card-recovery'

    }

];

// const Pcard = () => {
    return(
        <div className='pcard_contain'>
            {pcontent.map((item, index) => (
            //    Linking the cards to other pages
                <Link to={item.link} key={index} className={`pcard ${item.className}`}>
                    <div className="pcard_cover">{item.icon}</div>

                     <div className="pcard_titles"><h5>{item.title}</h5></div>
                {/* </div> */}
                </Link>
                
            ))}


        </div>
    )
};
export default Pcard;