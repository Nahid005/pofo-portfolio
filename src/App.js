import {Router} from '@reach/router'
import './App.css';
import Home from './component/page/Home';
import About from './component/page/About'
import Blog from './component/page/Blog'
import Portfolio from './component/page/Portfolio'
import Contact from './component/page/Contact'

function App() {
  return (
    <Router>
      <Home path = '/' />
      <About path = '/about' />
      <Blog path = '/blog' />
      <Portfolio path = '/portfolio' />
      <Contact path = '/contact' />
    </Router>
  );
}

export default App;
