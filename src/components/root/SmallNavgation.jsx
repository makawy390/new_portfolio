// import React from 'react'
import { Container } from '@mui/material';
import Switches from './Switches';

const SmallNavgation = () => {
  return (
    <div className='small-nav'>
     <Container fixed>
      <div className="listed-top">
      {/* <h3><span>logo</span></h3> */}
      <Switches />
      </div>
     </Container>
    </div>
  )
}

export default SmallNavgation;
