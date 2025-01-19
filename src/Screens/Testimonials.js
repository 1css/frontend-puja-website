import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CSS/Home/testimonials.css";

const testimonials = [
  {
    left: {
      name: "Devotee 1",
      location: "Haridwar",
      feedback:
        "This experience has truly been a blessing. Thank you for the guidance!",
    },
    right: {
      name: "Devotee 2",
      location: "Varanasi",
      feedback:
        "Amazing service and divine experience. Highly recommended to others!",
    },
  },
  {
    left: {
      name: "Devotee 1",
      location: "Haridwar",
      feedback:
        "This experience has truly been a blessing. Thank you for the guidance!",
    },
    right: {
      name: "Devotee 2",
      location: "Varanasi",
      feedback:
        "Amazing service and divine experience. Highly recommended to others!",
    },
  },
  {
    left: {
      name: "Devotee 1",
      location: "Haridwar",
      feedback:
        "This experience has truly been a blessing. Thank you for the guidance!",
    },
    right: {
      name: "Devotee 2",
      location: "Varanasi",
      feedback:
        "Amazing service and divine experience. Highly recommended to others!",
    },
  },
];

const TestimonialCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
      {testimonials.map((testimonial, index) => (
        <div className="sectionhome" key={index}>
          <div className="modern-container">
            <div className="left-content">
              <h3>{testimonial.left.name}</h3>
              <p>Location: {testimonial.left.location}</p>
              <p>"{testimonial.left.feedback}"</p>
            </div>
            <div className="right-content">
              <h3>{testimonial.right.name}</h3>
              <p>Location: {testimonial.right.location}</p>
              <p>"{testimonial.right.feedback}"</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;

// without map function
// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
// import { Carousel } from "react-responsive-carousel";
// import "../CSS/Home/testimonials.css";

// const Testimonials = () => {
//   return (
//     <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
//       <div className="sectionhome">
//         <div className="modern-container">
//           <div className="left-content">
//             <h3>Devotee 1</h3>
//             <p>Location: Haridwar</p>
//             <p>
//               "This experience has truly been a blessing. Thank you for the
//               guidance!"
//             </p>
//           </div>
//           <div className="right-content">
//             <h3>Devotee 2</h3>
//             <p>Location: Varanasi</p>
//             <p>
//               "Amazing service and divine experience. Highly recommended to
//               others!"
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="sectionhome">
//         <div className="modern-container">
//           <div className="left-content">
//             <h3>Devotee 1</h3>
//             <p>Location: Haridwar</p>
//             <p>
//               "This experience has truly been a blessing. Thank you for the
//               guidance!"
//             </p>
//           </div>
//           <div className="right-content">
//             <h3>Devotee 2</h3>
//             <p>Location: Varanasi</p>
//             <p>
//               "Amazing service and divine experience. Highly recommended to
//               others!"
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="sectionhome">
//         <div className="modern-container">
//           <div className="left-content">
//             <h3>Devotee 1</h3>
//             <p>Location: Haridwar</p>
//             <p>
//               "This experience has truly been a blessing. Thank you for the
//               guidance!"
//             </p>
//           </div>
//           <div className="right-content">
//             <h3>Devotee 2</h3>
//             <p>Location: Varanasi</p>
//             <p>
//               "Amazing service and divine experience. Highly recommended to
//               others!"
//             </p>
//           </div>
//         </div>
//       </div>
//     </Carousel>
//   );
// };

// export default Testimonials;
