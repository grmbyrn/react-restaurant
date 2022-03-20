import React, { useState } from 'react';

import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`A confirmation email has been sent to ${email}`)
    setEmail('')
  }

  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='Newsletter' />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss the latest updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <form onSubmit={handleSubmit}>
          <input 
            type='email' 
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className='custom__button'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter;
