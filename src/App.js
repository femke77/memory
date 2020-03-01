import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col } from "./components/Grid";
import imageLoader from "./utils/images";
import "./App.css"

class App extends Component {

  state = {
    images: [],
    clickedArr: [],
    score: 0,
    topScore: 0,
    message: ""
  }

  componentDidMount = () => {
    const images = imageLoader();
    this.setState({ images: images });
  }

  restartGame = () => {
    //logic to clear the score
  }

  shuffleImages = () => {
    //logic to shuffle the images
    //re-render will happen when state changes otherwise
    //forceUpdate
  }

  handleImgClick = id => {
    console.log("clicked")
    //logic to determine if this image has already been clicked
    //use a clicked array with the image id and then just check if latest is in array
    //if not, continue, if it is, message the user, save top score, and restart 
    //game
  }

  render() {
    return (
      <>
        <Nav score={this.state.score} topScore={this.state.topScore} message={this.state.message} />
        <Jumbotron />
        <Container>
          <Row>
            {this.state.images.map(cat => {
              return (
                <Col size="md-3" key={cat.id}>
                  <img src={cat.src} alt="cat face" onClick={() => this.handleImgClick(cat.id)} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    )
  }
}

export default App;
