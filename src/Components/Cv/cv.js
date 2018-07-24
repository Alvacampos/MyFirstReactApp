import React from 'react';
import CvEN from './cvEN';
import CvSP from './cvSP';
import Aux from '../../HoC/Auxiliary';

const Cv = () =>{ 
  return (
    <Aux>
      <CvEN/>
      <CvSP/>
    </Aux>
    )
}

export default Cv;