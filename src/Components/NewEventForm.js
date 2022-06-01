import './NewEventForm.modules.css';
import React, { useRef } from 'react'

export default function NewEventForm({addEvent}) {

    const titleRef= useRef(null)
    const dateRef= useRef(null)
    const locationRef= useRef(null)

  const handleFormSubmit = (e) => {
      e.preventDefault()

      const event = {
          id: Math.random() * (1000-1) + 1,
          title: titleRef.current.value,
          date: dateRef.current.value,
          location:locationRef.current.value
      }
      addEvent(event)

  }
  return (
    <form onSubmit={handleFormSubmit}>
        <label>
            <span>New Title:</span>
            <input type="text" ref={titleRef} placeholder='Title..'/>
        </label>
        <label>
            <span>Date:</span>
            <input type="date" ref={dateRef} placeholder='Select Date..'/>
        </label>
        <label>
            <span>Location:</span>
            <select ref={locationRef}>
                <option value="manchester">Manchester</option>
                <option value="London">London</option>
            </select>
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}
