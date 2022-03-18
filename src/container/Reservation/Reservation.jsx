import React, {useState} from 'react';

import {SubHeading} from '../../components'
import './Reservation.css';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: "", 
        email: "", 
        phone: "", 
        date: "",
        time: ""
    })

    function handleChange(event) {
        const {name, value, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }
  
    return (
      <section className='app__reservation flex__center app__bg section__padding' style={{backgroundColor: 'var(--color-black)'}}>
        <form className='app__reservation-form' onSubmit={handleSubmit}>
          <SubHeading title='Make a Reservation' />
            <label for='name'>Your Name</label>
            <input 
                type='text'  
                value={formData.name} 
                name="name"
                onChange={handleChange} 
            />
            <label for='name'>Your Email</label>
            <input 
                type='email'
                value={formData.email} 
                name="email"
                onChange={handleChange} 
            />
            <label for='name'>Your Phone Number</label>
            <input 
                type='phone' 
                value={formData.phone} 
                name="phone"
                onChange={handleChange} 
            />
            <label for='name'>Reservation Date</label>
            <input 
                type='date' 
                value={formData.date} 
                name="date"
                onChange={handleChange} 
            />
            <label for='name'>Reservation Time</label>
            <input 
                type='time' 
                value={formData.time} 
                name="time"
                onChange={handleChange} 
            />
            <button type='submit' className='submit-btn'>
                Submit
            </button>
        </form>
      </section>
    )
  }

export default Reservation;