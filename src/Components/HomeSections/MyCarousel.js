import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../CSS/Carousel/Carousel.css";
import { carouselData } from '../../Data/data'





const MyCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={2000}
      transitionTime={500}
      useKeyboardArrows
      emulateTouch
      className="Carouselclassname"
    >
      {carouselData.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url('${item.backgroundImage}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "550px",
          }}
        >
          <div className="carousel-caption">
            <h3 style={{ color: "white" }}>{item.title}</h3>
            {/* <p style={{ color: "white" }}>{item.description}</p> */}
            <button className="carousel-btn">{item.buttonText}</button>
          </div>
        </div>
      ))}
    </Carousel>
  )
}



export default MyCarousel;
