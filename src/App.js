import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/pages/homepage/homepage.component'
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from "../src/components/firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;