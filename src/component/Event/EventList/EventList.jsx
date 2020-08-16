import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

// class QRoomList extends Component {
//     render() {
//         const { events, selectEvent, deleteEvent } = this.props
//         return <Fragment>{/* {events.map((event) => (
//           <QRoomListItem
//             key={event.id}
//             event={event}
//             selectEvent={selectEvent}
//             deleteEvent={deleteEvent}
//           />
//         ))} */}</Fragment>
//     }
// }
function EventList({events, selectEvent, deleteEvent}){
  return(
    <>
      {events.map( event=>(
        <EventListItem event={event} 
        key={event.id}
        selectEvent={selectEvent}
        deleteEvent={deleteEvent}
      />
    ))}      
    </>
  )
}
export default EventList
