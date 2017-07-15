/**
 * Cell
 * Width-limiting container
 */

import styled from 'styled-components';

const Cell = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  padding-left: 16px;
  padding-right: 16px;
`;

export default Cell;
