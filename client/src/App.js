import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import UsersView from './views/UsersView';
import RegisterView from './views/RegisterView';

import './App.css';

const Button = styled.button`
  text-align: center;
  background-color: #24B8BD;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  width: 200px;
  height: 3rem;
  margin: 0.5rem 0;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.signout}>Logout</button>
          <NavLink to="/signin" activeClassName="activeNavButton">
          <Button>
            Log In
            </Button>
            </NavLink>
            <NavLink to="/users" activeClassName="activeNavButton">
          <Button>
            Users List
            </Button>
            </NavLink>
            <NavLink to="/signup" activeClassName="activeNavButton">
          <Button>
            Register
            </Button>
            </NavLink>
        </header>
        <Route exact path="/" render={() => <HomeView {...this.props} />} />
        <Route path="/users" render={() => <UsersView {...this.props} />} />
        <Route path="/signin" render={() =><LoginView {...this.props} />} />
        <Route path="/signup" render={() => <RegisterView {...this.props} />} />
      </div>
    );
  }

  signout = () => {
    localStorage.removeItem('jwt');
  };
}

export default withRouter(App);
