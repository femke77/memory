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
    message: "Click an image to begin play."
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

  handleClick = id => {
    console.log("clicked")
    //first we check if the latest image id is in the clickedArr
    //and if it is, we end the game, else continue
    if (this.state.clickedArr.includes(id)){
      //end and reset game
      this.setState({
        message: "You guessed incorrectly!",
        score: 0
      });
    } else {
        //add the id to the clickedArr and change the message
        //if new score > top score, update top score
        this.setState({
        clickedArr: this.state.clickedArr.concat(id),
        message: "You guessed correctly!"
      });
      //update the score
      this.setState({ 
        score: this.state.score + 1
      })
    }
    
    

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
                  <img src={cat.src} alt="cat face" onClick={() => this.handleClick(cat.id)} />
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
