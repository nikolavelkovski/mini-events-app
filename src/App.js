
import { useState } from 'react';
import './App.css';
import EventList from './Components/EventList';
import Modal from './Components/Modal';
import NewEventForm from './Components/NewEventForm';

const events = [
  {id:0,title: "nikolas event1"},
  {id:1,title: "nikolas event2"},
  {id:2,title: "nikolas event3"},
]
function App() {
  const [eventsList, setEventsList] = useState(events)
  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const eventDeleteHandler = (itemId) =>{
    setEventsList(prevState => prevState.filter(item => item.id !== itemId))
  }
  const addEvent = (event) => {
    setEventsList(prevState => [...prevState, event])
    
    handleCloseModal();

  }
  const handleCloseModal = () => setShowModal(false)

  return (
    <div className="App">
      <button className='hide-show-button' onClick = {() => {setShowEvents(prevState => !prevState)}}>
        {showEvents ? 'Hide Events' : 'Show Events'}
      </button>
      
      {showEvents && <EventList events ={eventsList} onClick= {eventDeleteHandler} />}
      <button className='hide-show-button' onClick = {() => {setShowModal(true)}}>
                Add Events
              </button>


              {showModal &&( <Modal handleClose={handleCloseModal}>
                  <h2>Add New Event</h2>
                  <NewEventForm addEvent= {addEvent}/>
  </Modal>)
  }
     
    </div>



  );
}

export default App;
