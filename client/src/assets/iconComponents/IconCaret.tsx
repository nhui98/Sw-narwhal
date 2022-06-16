import * as React from "react";
import { SVGProps } from "react";

const SvgIconCaret = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1 1 4.364 5L1 11"
      stroke="#000"
      strokeOpacity={0.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconCaret;
