/**
 * Heading
 * Big Text
 */

import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate3d(0, 1, 0, 1turn);
  }
`;

const Subheading = styled.div`
  animation-duration: 4s;
  animation-iteration-count: 300;
  animation-name: ${spin};
  animation-timing-function: linear;
  font-size: 1.5em;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.125em;
  line-height: 1.2;
  margin-bottom: 1em;
  margin-top: 0.5em;
  text-align: center;
  text-transform: uppercase;
`;

export default Subheading;
