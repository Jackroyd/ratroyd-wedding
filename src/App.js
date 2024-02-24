import './App.css';
import Navbar from './components/navbar';
import NavbarMobile from './components/navbar_mobile';
import Hero from './sections/hero';
import Celebrate from './sections/celebrate';
import Where from './sections/where';
import Accommodation from './sections/accomodation';
import TheDay from './sections/the_day';
import Rsvp from './sections/rsvp';
import Gifts from './sections/gifts';

function App() {
  return (
    <div >
      <Navbar display={{base: "none", md: "flex"}} />
      <NavbarMobile display={{base: "flex", md: "none"}}/>
      <Hero />
      <Celebrate />
      <Where />
      <Accommodation />
      <TheDay />
      <Rsvp />
      <Gifts />
    </div>
  );
}

export default App;
