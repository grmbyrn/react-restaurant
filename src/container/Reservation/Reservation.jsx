import React, {useState} from 'react';

import {SubHeading} from '../../components'
import './Reservation.css';

const Reservation = () => {
    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [alert, setAlert] = useState({
      show: false,
      msg: '',
      type: ''
    })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if(!name){
        // display alert
      } else if(name && isEditing){
        // deal with edit
      } else {
        // show alert
        const newItem = {id: new Date().getTime().toString, title: name}
        setList([...list, newItem])
        setName('')
      }
    }
  
    return (
      <section className='app__reservation flex__center app__bg section__padding' style={{backgroundColor: 'var(--color-black)'}}>
        <form className='app__reservation-form' onSubmit={handleSubmit}>
          <SubHeading title='Make a Reservation' />
          <div className='form-control'>
            <label for='name'>Your Name</label>
            <input 
              type='text' 
              className='grocery'  
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <label for='name'>Your Email</label>
            <input 
              type='email' 
              className='grocery'  
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <label for='name'>Your Phone Number</label>
            <input 
              type='phone' 
              className='grocery' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <label for='name'>Reservation Date</label>
            <input 
              type='date' 
              className='grocery' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <label for='name'>Reservation Time</label>
            <input 
              type='time' 
              className='grocery'
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <button type='submit' className='submit-btn'>
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>  
        </form>
      </section>
    )
  }

export default Reservation;