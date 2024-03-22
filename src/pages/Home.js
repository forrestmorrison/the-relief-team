import '../App.css';
import ImageSlider from '../components/ImageSlider';

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
                    <h3>Training</h3>
                    <p>
                        Our years of experience in crisis management and incident response help us deliver superior training courses.
                        We offer both instructor led training in person or virtual training.
                        Proper training makes a difference when responding to a real event.
                    </p>
                </section>
                <section>
                    <h3>Exercise Design & Facilitation</h3>
                    <p>
                        We design and facilitate emergency response management team exercises bith in the US and internationally.
                        These range from small tabletop exercises to large exercises encompassing multiple levels of management response at geographically separated locations
                    </p>
                </section>
                <section>
                    <h3>Response Support</h3>
                    <p>
                        We have dedicated professionals on call 24/7 to provide emergency resonse support for All-Hazards.
                        Our team can provide remote support or deploy personnel onsite to integrate with your team for any event.
                    </p>
                </section>
            </div>
        </div>
        
    </div>
  )
}

export default Home