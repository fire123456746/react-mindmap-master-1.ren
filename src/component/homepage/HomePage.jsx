import React from "react";
import {
  Segment,
  Container,
  Header,
  Button,
  Icon,
  Image,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// const HomePage = ({ history }) => {
//     return (

//         <Segment inverted textAlign="center" vertical className="masthead">
//             <Container text>
//                 <Header as="h1" inverted>
//                     <Image size="massive" src="/assets/logo.png" alt="logo" style={{ marginBottom: 12 }} />
//                     Mindustry
//                 </Header>
//                 <Button onClick={() => history.push('/mindmap')} size="huge" inverted>
//                     前往mindmap
//                     <Icon name="right arrow" inverted />
//                 </Button>
//                 <Button onClick={() => history.push('/QuestionRoom')} size="huge" inverted>
//                     前往QuestionRoom
//                     <Icon name="right arrow" inverted />
//                 </Button>
//             </Container>

//         </Segment>
//     )
// }

export default function HomePage({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            style={{ marginBottom: 12 }}
          />
          Mindustry
        </Header>

        <Button onClick={() => history.push("/events")} size="huge" inverted>
          QRoom
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
}
{
  /* <Button onClick={() => history.push('/mindmap')} size='huge' inverted>
                    MindMap
                    <Icon name='right arrow' inverted />
                </Button> */
}
