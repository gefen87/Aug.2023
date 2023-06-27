import './App.css';
import Head from './components/Head';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Aside1 from './components/Aside1';
import Aside2 from './components/Aside2';
import Aside3 from './components/Aside3';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div>
        <Head />
      </div>
      <div>
        <Nav />
     </div>
     <div>
        <Main />
      </div>
      <div>
        <h1>This Weeks Specials!</h1>
        <button>Online Menu</button>
        <Aside1 />
        <Aside2 />
        <Aside3 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;