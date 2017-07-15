/**
 * Home
 * …is where the 🌵 is
 */

import React from 'react';
import styled from 'styled-components';

import Cell from '../components/Cell';
import DesertScene from '../components/DesertScene';
import Heading from '../components/Heading';

const ThreeD = styled.div`
  background-color: black;
  box-shadow: 0 32px 64px rgba(248, 106, 0, 0.5);
  margin-bottom: 128px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
  position: relative;
  width: calc(100vw - 64px);

  & canvas {
    display: block;
    width: 100%;
  }
`;

const Title = styled.h1`
  bottom: 32px;
  color: red;
  font-family: cursive;
  font-size: 1.25em;
  font-style: italic;
  line-height: 1;
  margin-bottom: 0;
  margin-top: 0;
  position: absolute;
  right: 32px;
  z-index: 10;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      height: 544.625,
      width: 1024,
    });
  }

  render() {
    return (
      <div>
        <Cell>
          <Heading>🌵🏜🌵 Welcome to Cactus World! 🌵🏜🌵</Heading>
        </Cell>
        <ThreeD>
          <DesertScene />
          <Title>Artist’s Rendering</Title>
        </ThreeD>
      </div>
    );
  }
}

export default Home;
