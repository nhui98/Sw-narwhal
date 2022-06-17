import * as React from "react";
import { SVGProps } from "react";

const SvgIconSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.742 10.328 3.965 3.965-1.414 1.414-3.965-3.966A6.455 6.455 0 0 1 6.5 13 6.508 6.508 0 0 1 0 6.5C0 2.916 2.916 0 6.5 0S13 2.916 13 6.5a6.454 6.454 0 0 1-1.258 3.828ZM6.5 1A5.506 5.506 0 0 0 1 6.5C1 9.533 3.467 12 6.5 12S12 9.533 12 6.5 9.533 1 6.5 1Z"
      fill="#999"
    />
  </svg>
);

export default SvgIconSearch;
