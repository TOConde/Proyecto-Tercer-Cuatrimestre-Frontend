import React from 'react';
import  Button  from 'react-bootstrap/Button';
import './BrowseButton.css';

export const BrowseButton = () => {
  const handleBrowseButton = () => {
    window.location.href = '/browse'
  }

  return (
    <div className='BrowseButtonContainer'>
      <Button className='browseButton' onClick={handleBrowseButton}>Browse</Button>
    </div>
  );
}