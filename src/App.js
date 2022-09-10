import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import WelcomePage from './components/WelcomePage';
import UserProfile from './components/UserProfile';

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={isAuthenticated ? <BestBooks /> :
                <WelcomePage />
              }
            >
            </Route>
            <Route
              exact path="/profile"
              element={isAuthenticated && <UserProfile />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);