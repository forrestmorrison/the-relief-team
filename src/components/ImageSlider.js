import Slide1 from "../images/slide-1.jpg";
import Slide2 from "../images/slide-2.jpg";
import Slide3 from "../images/slide-3.jpg";

const ImageSlider = () => {
  return (
    <div>
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
    </div>
  )
}

export default ImageSlider
