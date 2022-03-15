import React from 'react';

import {images} from '../../constants'
import {SubHeading} from '../../components'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
    
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Morbi Ante Risus, Sagittis Ac Mattis Vitae, Auctor Sit Amet Ligula. Morbi Laoreet Elementum Vehicula. Nullam Vehicula Tempor Nunc Eget Tincidunt.   
          </p>
        </div>
        <p className='p__opensans'>
          Quisque Et Accumsan Nibh. Donec Viverra Diam Id Magna Pellentesque Facilisis. Sed Blandit Commodo Arcu, At Scelerisque Arcu Rhoncus A. Vivamus.  
        </p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
