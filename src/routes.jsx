import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import HelloWorld from './components/HelloWorld';
import Search from './components/Search';

export default (store) => {
  return(
    <Route path="/" component={App}>
      <Route path="helloworld" component={HelloWorld}/>
      <Route path="search" component={Search}/>
    </Route>
  );
};
