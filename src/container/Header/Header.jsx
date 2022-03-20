import React, {useState} from 'react';
import styled from 'styled-components';

import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Header.css';

const DropDownContainer = styled("div")`
  width: 10.5em;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  background-color: var(--color-crimson);
  color: var(--color-black);
  font-family: var(--font-base);
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 28px;
  font-size: 16px;
  padding: 0.5rem 1.5rem;
  border-radius: 1px;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  width: 141px;
  z-index: 1;
}`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title='Chase the new flavour' />
        <h1 className='app__header-h1'>A unique Italian experience</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum!
        </p>
        <DropDownContainer>
          <button type='submit' className='custom__button' onClick={toggling}>Explore Menu</button>
          {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem><a href='https://pacinos.ie/wp-content/uploads/2021/08/Pac-Brunch-June-2021-PDF.pdf' target='_blank'>Brunch</a></ListItem>
              <ListItem><a href='https://pacinos.ie/wp-content/uploads/2021/06/Pac-Lunch-June-2021-PDF.pdf' target='_blank'>Lunch</a></ListItem>
              <ListItem><a href='https://pacinos.ie/wp-content/uploads/2021/06/Pac-Dinner-June-2021-PDF.pdf' target='_blank'>Dinner</a></ListItem>
              <ListItem><a href='https://pacinos.ie/wp-content/uploads/2021/06/Pac-Dessert-June-2021-PDF.pdf' target='_blank'>Dessert</a></ListItem>
            </DropDownList>
          </DropDownListContainer>
          )}
        </DropDownContainer>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.header} alt='header img' />
      </div>
    </div>
  );
}
export default Header;
