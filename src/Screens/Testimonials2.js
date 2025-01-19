import React, { useRef, useState, useEffect } from "react";
import "../CSS/Testimonials2.css";

const Testimonials2 = () => {
  const testimonials = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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

  return (
    <div className="testimonials2">
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="testimonial-left">
              <h3>{testimonial.left.name}</h3>
              <p>{testimonial.left.location}</p>
              <p>{testimonial.left.feedback}</p>
            </div>
            <div className="testimonial-right">
              <h3>{testimonial.right.name}</h3>
              <p>{testimonial.right.location}</p>
              <p>{testimonial.right.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

//   return (
//     <div
//       className="testimonials2"
     
//     >
//       <div className="testimonials-container">
//         {testimonials.map((testimonial) => (
//           <div key={testimonial.id} className="testimonial">
//             <div className="testimonial-left">
//               <h3>{testimonial.left.name}</h3>
//               <p>{testimonial.left.location}</p>
//               <p>{testimonial.left.feedback}</p>
//             </div>
//             <div className="testimonial-right">
//               <h3>{testimonial.right.name}</h3>
//               <p>{testimonial.right.location}</p>
//               <p>{testimonial.right.feedback}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
};

export default Testimonials2;
