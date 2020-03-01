import React, {Component} from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col } from "./components/Grid";
import imageLoader from "./components/Images/index";

class App extends Component {
 
  state = {
    images: [],
    score: 0,
    topScore: 0,
    message: ""
   }

  componentDidMount = () => {
    const images = imageLoader();
    this.setState({ images: images });
    
  }

  handleImgClick = () => {
    console.log("clicked")
  }

  render(){
    return (
      <>
      <Nav score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
      <Jumbotron />
        <Container>
          <Row>
        {this.state.images.map(cat => {
          return (
             <Col size="md-3" key={cat.id}>
              <img src={cat.src} alt="cat face" onClick={this.handleImgClick}/>
              

             </Col>
          )
          
           })}
          </Row>
        </Container>
        </>
    )
  }
}

export default App;
