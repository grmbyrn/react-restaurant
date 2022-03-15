import React, {useRef} from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'

import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {
  const videRef = useRef()

    return (
    <div className='app__video'>
      <video 
        src={meal} 
        type='video/mp4' 
        loop 
        controls={false} 
        muted 
      />
    </div>
  )
}
export default Intro;
