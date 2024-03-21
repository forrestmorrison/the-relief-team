import { useEffect, useState, useRef, useCallback } from "react";

const ImageSlider = ({ slides }) => {
    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(2);

    const sliderStyles = {
        height: "100%",
        position: "relative"
    }

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const leftArrowStyles = {
        position: 'absolute',
        transform: 'translate(0, -50%)',
        top: '50%',
        left: "32px",
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        transform: 'translate(0, -50%)',
        top: '50%',
        right: "32px",
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const dotContainerStyles = {
        display: 'flex',
        justifyContent: "center",
        position: 'absolute',
        transform: 'translate(0, -50%)',
        left: "47%",
        bottom: "0%",
        color: "#fff",
        zIndex: 1,
        cursor: 'pointer'
        
    }

    const dotStyles = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
    }

    const goToPrevious = () => {
        const isFirstSlide = (currentIndex === 0);
        const newIndex = (isFirstSlide ? slides.length - 1 : currentIndex - 1);
        setCurrentIndex(newIndex);
    }

    const goToNext = useCallback(() => {
        const isLastSlide = (currentIndex === slides.length - 1);
        const newIndex = (isLastSlide ? 0 : currentIndex + 1);
        setCurrentIndex(newIndex);
    }, [currentIndex, slides])

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }

        timerRef.current = setTimeout(() => {
            goToNext();
        }, 5000)

        return () => clearTimeout(timerRef.current)
    }, [goToNext])

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>❬</div>
            <div style={rightArrowStyles} onClick={goToNext}>❭</div>
            <div style={dotContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div 
                        style={dotStyles} 
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        •
                    </div>
                ))}
            </div>
            <div style={slideStyles}></div>
            
        </div>
    )
}

export default ImageSlider
