import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Plan from './components/Plan';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/plan">
          <Plan />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
