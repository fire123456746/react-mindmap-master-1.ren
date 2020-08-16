import React, { useState, Component } from "react";
import { Grid, Button, Container } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import cuid from "cuid";
import NavBar from "../nav/NavBar";
import { sampleData } from "../../../app/api/sampleData";
import CategoryList from "../category/CategoryList";

export default function EventDashboard() {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }


  // function handleCreateFormOpen() {
  //   setSelectedEvent(null);
  //   setFormOpen(true);
  // }

  // function handleUpdatateEvent(updateEvent){
  //   setEvents(events.map(evt => evt.id === updateEvent.id ? updateEvent : evt));
  //   selectEvent(null);
  // }

  function handleDeleteEvent(eventId){
    setEvents(events.filter(evt => evt.id !== eventId))
  }

  return (
    <>
      <Container className="main">
        <Grid>         
          <Grid.Column width={10}>
             <EventList events={events} deleteEvent={handleDeleteEvent}/>
          </Grid.Column>
          <Grid.Column width={6}>
            <h2>Event Filters</h2>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
}
