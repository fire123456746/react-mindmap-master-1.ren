import React from "react";
import { Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Mindmap from "./component/mindmap";
import "./App.css";
import HomePage from "./component/homepage/HomePage";
import EventDashBoard from "./component/Event/EventDashBoard/EventDashBoard";
import EventForm from "./component/Event/EventForm/EventForm";
import NavBar from "./component/Event/nav/NavBar";
import EventDetailedPage from "./component/Event/eventDetailed/EventDetailedPage";

// function App() {
//   return <Mindmap />;
// }
// function handleCreateFormOpen(){
//   setSelectedEvent(null);
//   setFormOpne(true);
// }
export default function App(){
  
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashBoard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}


{/* <Route path='/mindmap' component={Mindmap} /> */}


