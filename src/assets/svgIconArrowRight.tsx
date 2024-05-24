// This React component defines an SVG icon representing an arrow pointing to the right

const SvgIconArrowRight = () => (
  <svg // Create an SVG element
    xmlns="http://www.w3.org/2000/svg" // Set the XML namespace for SVG
    width={12} // Set the width of the SVG to 12 pixels
    height={12} // Set the height of the SVG to 12 pixels
  >
    <path // Define a path element to draw the shape of the arrow
      fill="#24232C" // Set the fill color of the path to a dark gray (#24232C)
      d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" // Define the path data using SVG path syntax
    />
  </svg>
);

export default SvgIconArrowRight; // Export the component as the default export
