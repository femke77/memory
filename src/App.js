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
    this.setState({ images: images }, this.cb);
  }

  cb = () => {
    this.shuffleImages();
  }

  shuffleImages = () => {
    const temp = this.state.images;
    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    this.setState({ images: temp })
  }

  handleClick = id => {
    console.log("clicked")
    //first we check if the latest image id is in the clickedArr
    //and if it is, we end the game, else continue
    if (this.state.clickedArr.includes(id)) {
      //if new score > top score, update top score
      this.setState({
        message: "You guessed incorrectly!",
        score: 0,
        topScore: this.state.topScore > this.state.score ? this.state.topScore : this.state.score,
        clickedArr: []
      });
    } else {
      //add the id to the clickedArr and update the score
      this.setState({
        clickedArr: this.state.clickedArr.concat(id),
        message: "You guessed correctly!",
        score: this.state.score + 1
      });
    }
    this.shuffleImages();
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
