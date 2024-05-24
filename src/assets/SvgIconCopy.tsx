// This React component defines an SVG icon representing a copy icon

const SvgIconCopy = () => (
  <svg // Create an SVG element
    xmlns="http://www.w3.org/2000/svg" // Set the XML namespace for SVG
    width={21} // Set the width of the SVG to 21 pixels
    height={24} // Set the height of the SVG to 24 pixels
  >
    <path // Define a path element to draw the shape of the copy icon
      fill="#A4FFAF" // Set the fill color of the path to a light green (#A4FFAF)
      d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591M12.469 21.75H2.53a.28.28 0 0 1-.281-.281V7.03a.28.28 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.28.28 0 0 1-.281.281Zm6-4.5H8.53a.28.28 0 0 1-.281-.281V2.53a.28.28 0 0 1 .281-.281h4.97v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.28.28 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.28.28 0 0 1 .082.199z" // Define the path data using SVG path syntax
    />
  </svg>
);

export default SvgIconCopy; // Export the component as the default export
