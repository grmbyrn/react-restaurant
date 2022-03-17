import React from 'react';

import {images, data} from '../../constants'
import {SubHeading, MenuItem} from '../../components'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title={'Menu that fits your palate'} />
      <h1 className='headtext__cormorant'>Today's special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex-center'>
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem 
              key={wine.title + index} 
              title={wine.title} 
              price={wine.price} 
              tags={wine.tags} 
            />
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
          <img src={images.drinks} alt='menu image' />
      </div>

      <div className='app__specialMenu-menu_cocktails  flex-center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem 
              key={cocktail.title + index} 
              title={cocktail.title} 
              price={cocktail.price} 
              tags={cocktail.tags} 
            />
          ))}
        </div>
      </div>
    </div>

    <div>
          <a href='https://pacinos.ie/wp-content/uploads/2021/06/PAC-Drinks-Menu-June-2021-PDF.pdf' target='_blank'><button type='button' className='custom__button'>View more</button></a>
    </div>
  </div>
);

export default SpecialMenu;
