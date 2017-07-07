import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import registerServiceWorker from './registerServiceWorker';
import style from './style';

ReactDOM.render(
  <CommentBox />,
  document.getElementById('root')
);
registerServiceWorker();
