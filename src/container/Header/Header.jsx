import React from 'react';

import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>
        I'm baby skateboard enamel pin photo booth cardigan air plant offal swag kinfolk chia semiotics. Messenger bag quinoa biodiesel pork belly, thundercats twee fanny pack irony cardigan godard street art letterpress chicharrones. Four dollar toast taxidermy DIY, crucifix keytar gluten-free neutra iceland mumblecore hot chicken small batch celiac pug kinfolk ennui.
      </p>
      <button type='submit' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
