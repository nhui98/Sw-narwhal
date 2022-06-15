import * as React from "react";
import { SVGProps } from "react";

const SvgCaretdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 10 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.2}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.757 0h8.486L5 4.243.757 0Z"
      fill="#000"
    />
  </svg>
);

export default SvgCaretdown;
