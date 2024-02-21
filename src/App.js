import './App.css';
import Navbar from './components/navbar';
import NavbarMobile from './components/navbar_mobile';
import Hero from './sections/hero';
import Celebrate from './sections/celebrate';
import Where from './sections/where';

function App() {
  return (
    <div >
      <Navbar display={{base: "none", md: "flex"}} />
      <NavbarMobile display={{base: "flex", md: "none"}}/>
      <Hero />
      <Celebrate />
      <Where />
    </div>
  );
}

export default App;
