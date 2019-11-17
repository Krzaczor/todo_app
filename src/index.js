import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import styled from 'styled-components';
import './index.css';

const Root = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;



ReactDOM.render(<Root><App /></Root>, document.getElementById('root'));