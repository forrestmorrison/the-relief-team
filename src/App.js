import './App.css';
import { Routes, Route } from 'react-router';
import Home from "./pages/Home"

function App() {

  return (
    <div className="App">
      <header>
        <div className='container'>
          <div className='logo'>
            <h1>The <strong>Relief</strong> Team</h1>
            <div className='sub-text'>
              <h4>Emergency Response</h4>
              <h4>Pre-Planning & Support</h4>
            </div>
          </div>
          <section>
            <p>24/7 Emergency Support</p>
            <p className='phone-number'>+1 800 4-RELIEF</p>
          </section>
          <ul className='nav'>
            <li>ABOUT US</li>
            <li>PRODUCTS</li>
            <li>SERVICES</li>
            <li>TOOLS</li>
            <li>CLIENT LOGIN</li>
          </ul>
        </div>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
      <footer>
        <section>
          <div className='footer-logo'>
            <h1>The <strong>Relief</strong> Team</h1>
            <div className='sub-text'>
              <h4>Emergency Response</h4>
              <h4>Pre-Planning & Support</h4>
            </div>
          </div>
          <p>© The Relief Team</p>
          <div className='address'>
            <p>4444 Westheimer Rd</p>
            <p>Houston, TX 77777</p>
          </div>
        </section>
        <section>
          <h2>Company Info</h2>
          <div className='links'>
            <p>Contact Us</p>
            <p>Office Locations</p>
          </div>
        </section>
        <section>
          <h2>Quick Nav</h2>
          <div className='links'>
            <p>HR Portal</p>
            <p>Employee Webmail</p>
            <p>Privacy Policy</p>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
