import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import Loadable from 'react-loadable';

import Home from './components/home/Home';
import About from './components/about/About';
import Error from './components/Error'
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

// const Loading = () => <div>Loading...</div>;

// const Home = Loadable({
//   loader: () => import('./components/home/Home'),
//   loading: Loading,
// });

// const About = Loadable({
//   loader: () => import('./components/about/About'),
//   loading: Loading,
// });

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <Router>
                    <section>
                        <Navigation />
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                            <Route component={Error} />
                        </Switch>
                    </section>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;
