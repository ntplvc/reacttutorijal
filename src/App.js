/*
import './App.css';

function App() {
  const name = <h1>Nikola</h1>;
  return (
    <div className="App">
      {name}
      <User />
      <Blabla name="Nikola" age={25} email="nikola@example.com" />
    </div>
  );
}

const Blabla = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
      <h3>{props.email}</h3>
      <br/>
    </div>
  );
}

const User = () => {
  return (
    <div>
      <h2>Ovo je korisnik</h2>
      <h3>Podnaslov korisnika</h3>
      <h3>Podnaslov korisnika</h3>
      <br/>
    </div>
  );
}

export default App;
*/

/*USESTATE HOOK

import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0); //promenljiva, setPromenljiva, useState(pocetnaVrednost)

  const increaseCount = () => {
    setAge(age + 1);
  };

  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      {age}
      <button onClick = {increaseCount}>Click me</button>
      <br/>
      suprotna vrednost od trenutne, ne treba staviti ime funkcije
      <br/>
      <button onClick = {() => setShowText(!showText)}>Click me</button> 
      
      {showText === true && <h1>This is a text</h1>}
    </div>
  );
}

export default App;
*/

//Router
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { Home } from './Home';
import { Menu } from './Menu';
import { Contact } from './Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Home</Link> |
          <Link to="/menu">Menu</Link> |
          <Link to="/contact">Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
