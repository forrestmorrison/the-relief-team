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
    <div>
        <div style={containerStyles}>
            <ImageSlider slides={slides} />
        </div>
    </div>
  )
}

export default Home