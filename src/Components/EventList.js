import './EventList.modules.css'
import React from 'react'

export default function EventList({events,onClick}) {

  return (
    <div className='event-list'>
    {events.map((eventItem,index) => {

            return (
            <div className='event-card' key= {eventItem.id}>
            <h2>{`${index} - ${eventItem.title}`}</h2>
            <p>{eventItem.location} - {eventItem.date}</p>
            <button className='events-button' onClick= {() =>onClick(eventItem.id)}>
                Delete
            </button>
        </div>
            )
    }     
      ) }
  
  </div>
 
    
  )
}
