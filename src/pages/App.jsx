import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/sbadmin2.css';

import Layout from './Layout';
import Deshboard from './Dashboard';
import NotFound from './NotFound';
import Menu from '../components/Menu';
import Modules from '../components/Modules';

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Menu/>
          <Layout>
            <Switch>
              <Route exact path="/"><Deshboard/> </Route>
              <Route exact path="/modules"><Modules /></Route>
              <Route component={NotFound} />
            </Switch>
          </Layout>
      </div>
    </Router>
  );
}

export default App;
