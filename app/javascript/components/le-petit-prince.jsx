import React, { useState } from 'react';
import {LeftCircleFilled, RightCircleFilled} from '@ant-design/icons';

const LePetitPrince = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (direction) => {
      if(direction === 'left'){
        if(index > 0)
        return setIndex(prevIndex => prevIndex-1)
      }
      else {
        if(index < 13)
        return setIndex(prevIndex => prevIndex+1);
      }
    };
    return (
      <div style={carouselContainerStyle}>
        <button style={carouselButtonStyle} onClick={() => handleSelect('left')}>
          <LeftCircleFilled />
        </button>
        <img src={require(`../../assets/images/pag${index}.png`)} width="80%"/>
        <button style={carouselButtonStyle} onClick={() => handleSelect('right')}>
          <RightCircleFilled />
        </button>
      </div>
    )
}

const carouselContainerStyle = {
display: 'flex',
alignItems: 'center'
}

const carouselButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '30px',
  color: '#45D0C1',
  cursor: 'pointer'
}

export default LePetitPrince;