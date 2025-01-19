import Masonry from "react-masonry-css";

// Breakpoints for responsive masonry layout
const masonryBreakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

// Example TestimonialCard component
const TestimonialCard = ({ name, location, feedback }) => (
  <div className="testimonial-card">
    <h3>{name}</h3>
    <p>{location}</p>
    <p>{feedback}</p>
  </div>
);

// Example testimonials data
const testimonials = [
  {
    left: { name: "John Doe", location: "New York, USA", feedback: "Great service!" },
    right: { name: "Jane Smith", location: "London, UK", feedback: "Amazing experience!" },
  },
  {
    left: { name: "Carlos Lopez", location: "Madrid, Spain", feedback: "Highly recommended!" },
    right: { name: "Anna Müller", location: "Berlin, Germany", feedback: "Loved it!" },
  },
];

const TestimonialsMasonry2 = () => {
  // Flatten the left and right testimonials into a single array
  const testimonialCards = testimonials.flatMap((testimonial) => [
    testimonial.left,
    testimonial.right,
  ]);

  return (
    <Masonry
      breakpointCols={masonryBreakpoints}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {testimonialCards.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          location={testimonial.location}
          feedback={testimonial.feedback}
        />
      ))}
    </Masonry>
  );
};

export default TestimonialsMasonry2;
