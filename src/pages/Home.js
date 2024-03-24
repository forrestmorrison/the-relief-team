import '../App.css';
import ImageSlider from '../components/ImageSlider';
import Img1 from "../images/img1.jpg";
import Img2 from "../images/img2.jpg";
import Img3 from "../images/img3.jpg";
import { FaGlobe } from "react-icons/fa";
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { MdOutlineWarehouse } from 'react-icons/md';
import { PiCertificate } from 'react-icons/pi';
import { SlScreenSmartphone} from "react-icons/sl";

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

const iconStyles = {
    height: '80px',
    width: '80px',
    color: 'grey'
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
                <h4>Exercises Supported</h4>
            </section>
            <section className='stats-section'>
                <h1>330</h1>
                <h4>Emergency Responses Supported</h4>
            </section>
            <section>
                <h1>8004</h1>
                <h4>Instructed Training Sessions</h4>
            </section>
        </div>
        <div className='products'>
            <div className='product-types'>
                <div className='column'>
                    <section>
                        <FaGlobeAmericas style={iconStyles} />
                        <h4>IAP SOFTWARE</h4>
                        <p>Incident and Crisis Management Software</p>
                    </section>
                    <section>
                        <FaGlobe style={iconStyles} />
                        <h4>COMMON OPERATING PICTURE</h4>
                        <p>Command and control web-based mapping tool</p>
                    </section>
                    <section>
                        <MdOutlineWarehouse style={iconStyles} />
                        <h4>ASSET DEPOT</h4>
                        <p>Asset Management Software</p>
                    </section>
                </div>
                <div className='column'>
                    <section>
                        <SlScreenSmartphone style={iconStyles} />
                        <h4>MOBILE APPS</h4>
                        <p>Suite of mobile applications to enhance your capabilities</p>
                    </section>
                    <section>
                        <FaComputer style={iconStyles} />
                        <h4>WEBPLANS</h4>
                        <p>Web based plan management software</p>
                    </section>
                    <section>
                        <PiCertificate style={iconStyles} />
                        <h4>PQS RESPONDER</h4>
                        <p>Qualifications and Training Management Software</p>
                    </section>
                </div>
            </div>
            <div className='description'>
                <div className='heading'>
                    <h2>PRODUCTS</h2>
                </div>
                <p>
                    The Relief Team has years of experience in delivering advanced real world technological solutions to the energy sector, particularly emergency response programs focusing on preservation and recovery of strategic company assets and operations through response support, planning, training, exercising and compliance.
                    We have knowledgeable staff ready to assist your company in reaching its emergency preparedness goals and look forward to working alongside you to establish a better preparedness posture within your organization.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home