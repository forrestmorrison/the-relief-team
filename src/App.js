import './App.css';
import Slide1 from "./images/slide-1.jpg";
import Slide2 from "./images/slide-2.jpg";
import Slide3 from "./images/slide-3.jpg";

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
            <p className='phone-number'>+1 800.444.4444</p>
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
        <section className='slider'>
          <div className='slides'>
            <div id="slide-1">
              <img src={Slide1} alt="" />
            </div>
            <div id="slide-2">
            <img src={Slide2} alt="" />
            </div>
            <div id="slide-3">
            <img src={Slide3} alt="" />
            </div>
          </div>
          <div className='slide-tabs'>
            <a href="#slide-1">•</a>
            <a href="#slide-2">•</a>
            <a href="#slide-3">•</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
