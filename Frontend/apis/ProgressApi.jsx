// ProgressApi.jsx - Fetch for the progress bar data from the backend API
import React, { use, useEffect, useState } from 'react';
// import Progress from '../components/Pprogress';
// import { getProgress } from '../apis/ProgressApi';

// not importing also need to use our urls and key names

const BackProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
       
        const fetchProgress = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/progress'); // Adjust the URL as needed
                const data = await response.json();
                setProgress(data.progress); // Assuming the API returns { progress: number }
            } catch (error) {
                console.error('Error fetching progress:', error);
            }
        };
        fetchProgress();
    }, []);

    return (
        <div className="progress-container">
            <h2 className="mb-4">Your Recovery Progress</h2> 
            {/* <Progress progress={progress} /> */}
        </div>
    );
};

export default BackProgress;