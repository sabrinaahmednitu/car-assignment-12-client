import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import CarDetails from './pages/Home/CarDetails/CarDetails';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ExploreItems from './pages/Home/ExploreItems/ExploreItems';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/Home/NotFound/NotFound';
import Contact from './pages/Home/Contact/Contact.js';
import AboutUs from './pages/Home/AboutUs/AboutUs.js';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <AboutUs/>
            </Route>
            <PrivateRoute path="/cars/:carId">
              <CarDetails />
            </PrivateRoute>
            <Route path="/explore">
              <ExploreItems />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
