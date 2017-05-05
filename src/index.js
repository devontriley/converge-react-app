import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, withRouter } from 'react-router';
import { createBrowserHistory } from 'history';
import DataActions from './actions/DataActions';
import './index.css';
import App from './App';
import Home from './components/Home';
import Team from './components/Team';
import Investment from './components/Investments';
import VPNetwork from './components/VPNetwork';
import Blog from './components/Blog';

const history = createBrowserHistory();
const AppWithRouter = withRouter(App);

class AppInit extends Component {

  /*
  buildRoutes(data) {
    return data.pages.map((page, i) => {
      const component = Views[page.slug];
      console.log(component);
      return (
        <Route
          getComponent={(nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require(component).default);
            });
          }}
          key={page.id}
          path={`/${page.slug}`}
        />
      );
    })
  }
  */
  render() {
    return (
      <Router history={history}>
        <AppWithRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/investments' component={Investment} />
          <Route exact path='/vp-network' component={VPNetwork} />
          <Route exact path='/blog' component={Blog} />
          {/*this.buildRoutes(response)*/}
        </AppWithRouter>
      </Router>
    )
  }
}

  ReactDOM.render(
    <AppInit />,
    document.getElementById('root')
  );
