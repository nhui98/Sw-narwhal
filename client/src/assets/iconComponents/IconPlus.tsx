import * as React from "react";
import { SVGProps } from "react";

const SvgIconPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 0H6v6H0v4h6v6h4v-6h6V6h-6V0Z" />
  </svg>
);

export default SvgIconPlus;
