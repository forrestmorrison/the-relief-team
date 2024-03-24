import '../App.css';
import ImageSlider from '../components/ImageSlider';
import Img1 from "../images/img1.jpg"
import Img2 from "../images/img2.jpg"
import Img3 from "../images/img3.jpg"

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

const Home = () => {
  return (
    <div className='home'>
        <div style={containerStyles}>
            <ImageSlider slides={slides} />
        </div>
        <div className='services'>
            <div className='heading'>
                <h2>SERVICES</h2>
            </div>
            <div className='services-info'>
                <section>
                    <img src={Img1} alt='' className='img'/>
                    <h3>Training</h3>
                    <p>
                        Our years of experience in crisis management and incident response help us deliver superior training courses.
                        We offer both instructor led training in person or virtual training.
                        Proper training makes a difference when responding to a real event.
                    </p>
                </section>
                <section>
                    <img src={Img2} alt='' className='img'/>
                    <h3>Exercise Design & Facilitation</h3>
                    <p>
                        We design and facilitate emergency response management team exercises both in the US and internationally.
                        These range from small tabletop exercises to large exercises encompassing multiple levels of management response at geographically separated locations.
                    </p>
                </section>
                <section>
                    <img src={Img3} alt='' className='img'/>
                    <h3>Response Support</h3>
                    <p>
                        We have dedicated professionals on call 24/7 to provide emergency resonse support for All-Hazards.
                        Our team can provide remote support or deploy personnel onsite to integrate with your team for any event.
                    </p>
                </section>
            </div>
        </div>
        <div className='container'>
            <div className='about-us'>
                <div className='heading'>
                    <h2>ABOUT US</h2>
                </div>
                <p>
                    Established in 2024, The Relief Team is the almost industry leader in Crisis Management and Emergency Response with a wide spectrum of experience in the oil and gas, chemical, and emergency response industries for both private and public sector.
                    We provide quality products with a suite of emergency response software and services from plans to actual response support.
                    Through the appropriate and accurate implementation of technology, regulatory interpretation, and creativity, we shall provide practical and cost effective solutions to the full spectrum of our clientele.
                    We will make every effort to exceed expectations and ensure success to all parties.
                </p>
            </div>
        </div>
        <div className='stats'>
            <section className='stats-section'>
                <h1>281</h1>
                <h2>Exercises Supported</h2>
            </section>
            <section className='stats-section'>
                <h1>330</h1>
                <h2>Emergency Responses Supported</h2>
            </section>
            <section>
                <h1>8004</h1>
                <h2>Instructed Training Sessions</h2>
            </section>
        </div> 
    </div>
  )
}

export default Home