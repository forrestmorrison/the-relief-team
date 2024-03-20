import './App.css';
import ImageSlider from './components/ImageSlider';

function App() {
  const slides = [
    { url: "http://localhost:3000/images/slide1.png", title: "Slide-1" },
    { url: "http://localhost:3000/images/slide2.png", title: "Slide-2" },
    { url: "http://localhost:3000/images/slide3.png", title: "Slide-3" },
  ]

  const containerStyles = {
    width: '100%',
    height: '400px',
    margin: '0 auto'
  }

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
        <div style={containerStyles}>
          <ImageSlider slides={slides}/>
        </div>
      </main>
    </div>
  );
}

export default App;
