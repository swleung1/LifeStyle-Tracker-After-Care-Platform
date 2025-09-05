import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import BackProgress from '../../apis/ProgressApi'; '../apis/ProgressApi';

const Progress = ({ progress }) => {
  return (

    <ProgressBar now={progress} label={`${progress}%`}  />

  );
};

export default Progress;