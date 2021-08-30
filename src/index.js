import React from 'react';
import ReactDOM from 'react-dom';
import "animate.css";
import './index.css';

import GifExpertApp from './GifExpertApp';

const defaultCategories = ["One Punch Man"];

ReactDOM.render(
    <GifExpertApp defaultCategories = { defaultCategories }/>,
  document.getElementById('root')
);
